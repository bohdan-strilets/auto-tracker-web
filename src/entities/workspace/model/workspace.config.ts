import { Briefcase, Home, User } from 'lucide-react';

import type { WorkspaceRole, WorkspaceType } from './workspace.enums';

export const WORKSPACE_TYPE_ICON: Record<WorkspaceType, typeof User> = {
  PERSONAL: User,
  FAMILY: Home,
  BUSINESS: Briefcase,
};

export const WORKSPACE_TYPE_LABEL: Record<WorkspaceType, string> = {
  PERSONAL: 'Personal',
  FAMILY: 'Family',
  BUSINESS: 'Business',
};

export const WORKSPACE_TYPE_COLOR: Record<WorkspaceType, 'personal' | 'family' | 'business'> = {
  PERSONAL: 'personal',
  FAMILY: 'family',
  BUSINESS: 'business',
};

export const ROLE_COLOR: Record<WorkspaceRole, 'accent' | 'warning' | 'default'> = {
  OWNER: 'accent',
  ADMIN: 'warning',
  MEMBER: 'default',
};

export const ROLE_LABEL: Record<WorkspaceRole, string> = {
  OWNER: 'Owner',
  ADMIN: 'Admin',
  MEMBER: 'Member',
};
