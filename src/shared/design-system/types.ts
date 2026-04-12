import type { colors, radius, shadows, duration, easing, zIndex } from './tokens';

export type ColorAccent = keyof typeof colors.accent;
export type ColorSemantic = keyof typeof colors.semantic;
export type ColorCategory = keyof typeof colors.categories;
export type ColorWorkspace = keyof typeof colors.workspaces;
export type ColorRole = keyof typeof colors.roles;
export type ColorBg = keyof typeof colors.bg;
export type ColorText = keyof typeof colors.text;
export type ColorSidebar = keyof typeof colors.sidebar;

export type Shadow = keyof typeof shadows;
export type NeuShadow = keyof typeof shadows.neu;
export type Radius = keyof typeof radius;
export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;
export type ZIndex = keyof typeof zIndex;

// Utility for components
export type SemanticColor = ColorSemantic | ColorCategory | ColorWorkspace | ColorRole;
export type TextColor = ColorText;
export type BgLevel = 'base' | 'card' | 'elevated' | 'muted' | 'sunken';
