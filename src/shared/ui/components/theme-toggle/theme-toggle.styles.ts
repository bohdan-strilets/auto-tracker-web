import { colors, shadows } from '@shared/design-system';
import { linearGradient } from '@shared/lib/css';

export const themeToggleStyle = {
  background: colors.sidebar.to,
  boxShadow: `inset 1px 1px 3px ${shadows.neu.dark}, inset -1px -1px 2px ${shadows.neu.light}`,
} as const;

export const themeButtonActiveStyle = {
  background: linearGradient(145, colors.sidebar.from, colors.sidebar.to),
} as const;
