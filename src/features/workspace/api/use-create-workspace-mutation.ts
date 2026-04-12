import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { CreateWorkspacePayload } from '@entities/workspace';

import { workspaceQueryKeys } from './query-keys';
import { workspaceApi } from './workspace.api';

export const useCreateWorkspaceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateWorkspacePayload) => workspaceApi.create(payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: workspaceQueryKeys.all });
    },
  });
};
