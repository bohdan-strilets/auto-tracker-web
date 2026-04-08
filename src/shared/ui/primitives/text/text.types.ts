import type { JSX } from 'react';

import type { VariantProps } from 'class-variance-authority';

import { textVariants } from './text.variants';

export type TextProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
} & VariantProps<typeof textVariants>;
