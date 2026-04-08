import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type BadgeProps } from './badge.types';
import { badgeVariants } from './badge.variants';

export const Badge: FC<BadgeProps> = ({ children, className, variant, color, size }) => {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
          color,
          size,
        }),
        className,
      )}
    >
      {children}
    </span>
  );
};
