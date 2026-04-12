import { Car, Bell, BarChart2, User, LayoutGrid } from 'lucide-react';

import { PATHS } from '@shared/lib/router';

import type { NavItem } from './nav-items.types';

export const workspacesNav: NavItem[] = [
  { label: 'Work spaces', path: PATHS.workspaces, icon: LayoutGrid },
];

export const getNavItems = (workspaceId: string): NavItem[] => [
  { label: 'Garage', path: PATHS.workspace.garage(workspaceId), icon: Car },
  { label: 'Reminders', path: PATHS.workspace.reminders(workspaceId), icon: Bell },
  {
    label: 'Statistics',
    path: PATHS.workspace.statistics(workspaceId),
    icon: BarChart2,
  },
  { label: 'Profile', path: PATHS.profile, icon: User },
];
