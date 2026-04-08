import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type SpinnerProps } from './spinner.types';
import { spinnerVariants } from './spinner.variants';

export const Spinner: FC<SpinnerProps> = ({ size, color, className }) => {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size, color }), className)}
    />
  );
};
