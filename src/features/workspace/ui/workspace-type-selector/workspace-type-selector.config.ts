import { Briefcase, Home, User } from 'lucide-react';

import { WORKSPACE_TYPE, WORKSPACE_TYPE_COLOR, WORKSPACE_TYPE_LABEL } from '@entities/workspace';

import type { WorkspaceTypeOption } from './workspace-type-selector.types';

export const WORKSPACE_TYPE_OPTIONS: WorkspaceTypeOption[] = [
  {
    value: WORKSPACE_TYPE.PERSONAL,
    label: WORKSPACE_TYPE_LABEL.PERSONAL,
    icon: User,
    description: 'Just for you',
    iconColor: WORKSPACE_TYPE_COLOR.PERSONAL,
  },
  {
    value: WORKSPACE_TYPE.FAMILY,
    label: WORKSPACE_TYPE_LABEL.FAMILY,
    icon: Home,
    description: 'Share with family',
    iconColor: WORKSPACE_TYPE_COLOR.FAMILY,
  },
  {
    value: WORKSPACE_TYPE.BUSINESS,
    label: WORKSPACE_TYPE_LABEL.BUSINESS,
    icon: Briefcase,
    description: 'For your team',
    iconColor: WORKSPACE_TYPE_COLOR.BUSINESS,
  },
];
