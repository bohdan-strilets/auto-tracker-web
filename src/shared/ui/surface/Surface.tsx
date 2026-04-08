import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type SurfaceProps } from './surface.types';
import { surfaceVariants } from './surface.variants';

export const Surface: FC<SurfaceProps> = ({
  children,
  className,
  style,
  level,
  color,
  radius,
  shadow,
  fullWidth,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        surfaceVariants({
          level,
          color,
          radius,
          shadow,
          fullWidth,
        }),
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  );
};
