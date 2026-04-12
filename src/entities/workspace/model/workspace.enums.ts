export const WORKSPACE_TYPE = {
  PERSONAL: 'PERSONAL',
  FAMILY: 'FAMILY',
  BUSINESS: 'BUSINESS',
} as const;

export type WorkspaceType = (typeof WORKSPACE_TYPE)[keyof typeof WORKSPACE_TYPE];

export const WORKSPACE_ROLE = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
} as const;

export type WorkspaceRole = (typeof WORKSPACE_ROLE)[keyof typeof WORKSPACE_ROLE];
