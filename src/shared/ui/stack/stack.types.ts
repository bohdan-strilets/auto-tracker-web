import type { JSX } from 'react';

import type { VariantProps } from 'class-variance-authority';

import { stackVariants } from './stack.variants';

export type StackProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  fullHeight?: boolean;
  as?: keyof JSX.IntrinsicElements;
} & VariantProps<typeof stackVariants>;
