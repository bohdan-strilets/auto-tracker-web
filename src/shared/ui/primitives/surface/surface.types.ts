import type { JSX } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { surfaceVariants } from './surface.variants';

export type SurfaceProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
} & VariantProps<typeof surfaceVariants>;
