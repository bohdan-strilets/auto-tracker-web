import { type VariantProps } from 'class-variance-authority';

import { spinnerVariants } from './spinner.variants';

export type SpinnerProps = {
  className?: string;
} & VariantProps<typeof spinnerVariants>;
