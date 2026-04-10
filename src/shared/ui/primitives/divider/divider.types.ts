import type { VariantProps } from 'class-variance-authority';

import type { dividerVariants } from './divider.variants';

export interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
}
