import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Complaint, ComplaintStatus, IssueType, Location, Media, MediaType, UserProfile } from '../backend';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetCallerUserRole() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['currentUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFileComplaint() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      issueType,
      description,
      location,
      media,
      anonymous,
    }: {
      issueType: IssueType;
      description: string;
      location: Location;
      media: Media[];
      anonymous: boolean;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.fileComplaint(issueType, description, location, media, anonymous);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myComplaints'] });
      queryClient.invalidateQueries({ queryKey: ['complaintsByStatus'] });
    },
  });
}

export function useMyComplaints() {
  const { actor, isFetching } = useActor();

  return useQuery<Complaint[]>({
    queryKey: ['myComplaints'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyComplaints();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetComplaint(complaintId: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Complaint>({
    queryKey: ['complaint', complaintId],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getComplaint(complaintId);
    },
    enabled: !!actor && !isFetching && !!complaintId,
  });
}

export function useUpdateComplaintStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ complaintId, newStatus }: { complaintId: string; newStatus: ComplaintStatus }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateComplaintStatus(complaintId, newStatus);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['complaint', variables.complaintId] });
      queryClient.invalidateQueries({ queryKey: ['myComplaints'] });
      queryClient.invalidateQueries({ queryKey: ['complaintsByStatus'] });
    },
  });
}

export function useComplaintsByStatus(status: ComplaintStatus) {
  const { actor, isFetching } = useActor();

  return useQuery<Complaint[]>({
    queryKey: ['complaintsByStatus', status],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getComplaintsByStatus(status);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUploadMedia() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      mediaType,
      url,
      location,
    }: {
      mediaType: MediaType;
      url: string;
      location: Location;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.uploadMedia(mediaType, url, location);
    },
  });
}
