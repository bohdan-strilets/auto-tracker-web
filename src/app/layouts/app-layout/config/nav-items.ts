import { Car, Bell, BarChart2, User } from 'lucide-react';

import { PATHS } from '@shared/lib/router';

import type { NavItem } from './nav-items.types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Garage', path: PATHS.garage.list, icon: Car },
  { label: 'Reminders', path: PATHS.reminders, icon: Bell },
  { label: 'Statistics', path: PATHS.statistics, icon: BarChart2 },
  { label: 'Profile', path: PATHS.profile, icon: User },
];
