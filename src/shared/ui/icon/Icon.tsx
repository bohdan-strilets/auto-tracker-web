import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type IconProps } from './icon.types';
import { iconVariants } from './icon.variants';

export const Icon: FC<IconProps> = ({ icon: LucideIcon, size, color, className }) => {
  return (
    <LucideIcon
      className={cn(
        iconVariants({
          size,
          color,
        }),
        className,
      )}
    />
  );
};
