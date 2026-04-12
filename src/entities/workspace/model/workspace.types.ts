import type { WorkspaceRole, WorkspaceType } from './workspace.enums';

export type Workspace = {
  id: string;
  name: string;
  type: WorkspaceType;
  currentUserRole: WorkspaceRole;
  memberCount: number;
  createdAt: string;
};

export type CreateWorkspacePayload = {
  name: string;
  type?: WorkspaceType;
};
