import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type DividerProps } from './divider.types';
import { dividerVariants } from './divider.variants';

export const Divider: FC<DividerProps> = ({ className, orientation, variant }) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation ?? 'horizontal'}
      className={cn(dividerVariants({ orientation, variant }), className)}
    />
  );
};
