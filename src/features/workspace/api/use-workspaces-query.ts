import { useQuery } from '@tanstack/react-query';

import { workspaceQueryKeys } from './query-keys';
import { workspaceApi } from './workspace.api';

export const useWorkspacesQuery = () => {
  return useQuery({
    queryKey: workspaceQueryKeys.all,
    queryFn: workspaceApi.list,
  });
};
