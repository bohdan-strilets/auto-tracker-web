import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type DividerProps } from './divider.types';
import { dividerVariants } from './divider.variants';

export const Divider: FC<DividerProps> = ({ className, orientation }) => {
  return (
    <hr
      className={cn(dividerVariants({ orientation }), className)}
      aria-orientation={orientation ?? 'horizontal'}
    />
  );
};
