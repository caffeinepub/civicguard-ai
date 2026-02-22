import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Location {
    latitude: number;
    postalCode?: string;
    longitude: number;
    address?: string;
}
export type Time = bigint;
export interface Complaint {
    id: string;
    media: Array<Media>;
    status: ComplaintStatus;
    issueType: IssueType;
    description: string;
    statusHistory: Array<ComplaintStatus>;
    anonymous: boolean;
    timestamp: Time;
    reporter?: Principal;
    location: Location;
}
export interface Media {
    url: string;
    timestamp: Time;
    mediaType: MediaType;
    location: Location;
}
export interface UserProfile {
    badgeLevel: bigint;
    name: string;
    role: string;
    civicScore: bigint;
}
export enum ComplaintStatus {
    escalated = "escalated",
    underReview = "underReview",
    actionTaken = "actionTaken",
    received = "received"
}
export enum IssueType {
    trafficViolation = "trafficViolation",
    garbage = "garbage",
    publicNuisance = "publicNuisance",
    tobaccoSpit = "tobaccoSpit"
}
export enum MediaType {
    video = "video",
    image = "image"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    fileComplaint(issueType: IssueType, description: string, location: Location, media: Array<Media>, anonymous: boolean): Promise<Complaint>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getComplaint(complaintId: string): Promise<Complaint>;
    getComplaintsByStatus(status: ComplaintStatus): Promise<Array<Complaint>>;
    getMyComplaints(): Promise<Array<Complaint>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    updateComplaintStatus(complaintId: string, newStatus: ComplaintStatus): Promise<void>;
    uploadMedia(mediaType: MediaType, url: string, location: Location): Promise<Media>;
}
