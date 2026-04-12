import type { LucideIcon } from 'lucide-react';

import type { WorkspaceType } from '@entities/workspace';

export type WorkspaceTypeOption = {
  value: WorkspaceType;
  label: string;
  icon: LucideIcon;
  description: string;
  iconColor: 'personal' | 'family' | 'business';
};

export type WorkspaceTypeSelectorProps = {
  value: WorkspaceType;
  onChange: (value: WorkspaceType) => void;
};
