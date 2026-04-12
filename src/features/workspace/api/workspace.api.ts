import type { Workspace, CreateWorkspacePayload } from '@entities/workspace';

import { ENDPOINTS, http } from '@shared/api';

export const workspaceApi = {
  list: (): Promise<Workspace[]> => {
    return http.get<Workspace[]>(ENDPOINTS.workspaces.list);
  },

  create: (payload: CreateWorkspacePayload): Promise<Workspace> => {
    return http.post<Workspace>(ENDPOINTS.workspaces.create, payload);
  },
};
