import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import type { StackProps } from './stack.types';
import { stackVariants } from './stack.variants';

export const Stack: FC<StackProps> = ({
  children,
  direction,
  align,
  justify,
  wrap,
  gap,
  className,
  style,
  fullWidth,
  fullHeight,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        stackVariants({
          direction,
          align,
          justify,
          wrap,
          gap,
          fullWidth,
          fullHeight,
        }),
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  );
};
