import { colors, shadows } from '@shared/design-system';
import { linearGradient } from '@shared/lib/css';

export const neuStyles = {
  base: {
    background: linearGradient(145, colors.sidebar.from, colors.sidebar.to),
    boxShadow: shadows.neu.base,
  },

  hover: {
    background: linearGradient(145, colors.sidebar.from, colors.sidebar.to),
    boxShadow: shadows.neu.md,
  },

  active: {
    background: linearGradient(145, colors.sidebar.activeFrom, colors.sidebar.activeTo),
    boxShadow: shadows.neu.active,
  },

  danger: {
    background: linearGradient(145, '#fef2f2', '#fee2e2'),
    boxShadow: shadows.neu.base,
  },
} as const;

export const sidebarSurfaceStyle = {
  background: linearGradient(160, colors.sidebar.from, colors.sidebar.to),
  boxShadow: `${shadows.neu.lg}, inset 1px 0 0 ${shadows.neu.light}`,
} as const;
