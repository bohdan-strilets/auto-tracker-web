import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react';

import type { Theme } from './theme-toggle.types';

export const THEME_OPTIONS: { value: Theme; icon: LucideIcon }[] = [
  { value: 'light', icon: Sun },
  { value: 'dark', icon: Moon },
  { value: 'system', icon: Monitor },
];
