import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";
import MixinStorage "blob-storage/Mixin";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  include MixinStorage();

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserRole = AccessControl.UserRole;

  public type Location = {
    latitude : Float;
    longitude : Float;
    address : ?Text;
    postalCode : ?Text;
  };

  module Location {
    public func compare(l1 : Location, l2 : Location) : Order.Order {
      switch (Float.compare(l1.latitude, l2.latitude)) {
        case (#equal) { Float.compare(l1.longitude, l2.longitude) };
        case (order) { order };
      };
    };
  };

  public type UserProfile = {
    name : Text;
    role : Text; // Citizen, Authority, Admin
    badgeLevel : Nat;
    civicScore : Nat;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public type IssueType = {
    #tobaccoSpit;
    #garbage;
    #trafficViolation;
    #publicNuisance;
  };

  public type MediaType = {
    #image;
    #video;
  };

  public type Media = {
    mediaType : MediaType;
    url : Text;
    location : Location;
    timestamp : Time.Time;
  };

  public type ComplaintStatus = {
    #received;
    #underReview;
    #actionTaken;
    #escalated;
  };

  public type Complaint = {
    id : Text;
    reporter : ?Principal;
    issueType : IssueType;
    description : Text;
    location : Location;
    timestamp : Time.Time;
    status : ComplaintStatus;
    statusHistory : [ComplaintStatus];
    media : [Media];
    anonymous : Bool;
  };

  let complaints = Map.empty<Text, Complaint>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  private func isAuthorityOrAdmin(caller : Principal) : Bool {
    switch (userProfiles.get(caller)) {
      case (?profile) {
        profile.role == "Authority" or profile.role == "Admin" or AccessControl.isAdmin(accessControlState, caller);
      };
      case (null) {
        AccessControl.isAdmin(accessControlState, caller);
      };
    };
  };

  public query ({ caller }) func getComplaint(complaintId : Text) : async Complaint {
    switch (complaints.get(complaintId)) {
      case (?complaint) {
        if (complaint.anonymous) {
          return complaint;
        };

        let canView = isAuthorityOrAdmin(caller) or 
          (switch (complaint.reporter) {
            case (?reporter) { caller == reporter };
            case (null) { true };
          });

        if (not canView) {
          Runtime.trap("Unauthorized: Cannot view this complaint");
        };
        complaint;
      };
      case (null) { Runtime.trap("Complaint not found") };
    };
  };

  public query ({ caller }) func getComplaintsByStatus(status : ComplaintStatus) : async [Complaint] {
    if (not isAuthorityOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only authorities can view complaints by status");
    };

    complaints.values().toArray().filter<Complaint>(
      func(c : Complaint) : Bool { c.status == status }
    );
  };

  public shared ({ caller }) func uploadMedia(
    mediaType : MediaType,
    url : Text,
    location : Location,
  ) : async Media {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can upload media");
    };

    {
      mediaType;
      url;
      location;
      timestamp = Time.now();
    };
  };

  public shared ({ caller }) func fileComplaint(
    issueType : IssueType,
    description : Text,
    location : Location,
    media : [Media],
    anonymous : Bool,
  ) : async Complaint {
    if (not anonymous and not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can file non-anonymous complaints");
    };

    let id = Time.now().toText();
    let complaint : Complaint = {
      id;
      reporter = if (anonymous) { null } else { ?caller };
      issueType;
      description;
      location;
      timestamp = Time.now();
      status = #received;
      statusHistory = [#received];
      media;
      anonymous;
    };
    complaints.add(id, complaint);
    complaint;
  };

  public shared ({ caller }) func updateComplaintStatus(
    complaintId : Text,
    newStatus : ComplaintStatus,
  ) : async () {
    if (not isAuthorityOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only authorities can update complaint status");
    };

    switch (complaints.get(complaintId)) {
      case (?complaint) {
        let updatedStatusHistory = complaint.statusHistory.concat([newStatus]);
        complaints.add(
          complaintId,
          {
            id = complaintId;
            reporter = complaint.reporter;
            issueType = complaint.issueType;
            description = complaint.description;
            location = complaint.location;
            timestamp = complaint.timestamp;
            status = newStatus;
            statusHistory = updatedStatusHistory;
            media = complaint.media;
            anonymous = complaint.anonymous;
          },
        );
      };
      case (null) {
        Runtime.trap("Complaint not found");
      };
    };
  };

  public query ({ caller }) func getMyComplaints() : async [Complaint] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view their complaints");
    };

    complaints.values().toArray().filter<Complaint>(
      func(c : Complaint) : Bool {
        switch (c.reporter) {
          case (?reporter) { reporter == caller };
          case (null) { false };
        };
      }
    );
  };

  module Complaint {
    public func compare(c1 : Complaint, c2 : Complaint) : Order.Order {
      let locationCompare = Location.compare(c1.location, c2.location);
      switch (locationCompare) {
        case (#equal) { Int.compare(c1.timestamp, c2.timestamp) };
        case (order) { order };
      };
    };
  };
};
