import { type VariantProps } from 'class-variance-authority';

import { dividerVariants } from './divider.variants';

export type DividerProps = {
  className?: string;
} & VariantProps<typeof dividerVariants>;
