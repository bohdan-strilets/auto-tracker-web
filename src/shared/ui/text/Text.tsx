import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type TextProps } from './text.types';
import { textVariants } from './text.variants';

export const Text: FC<TextProps> = ({
  children,
  className,
  style,
  size,
  weight,
  color,
  truncate,
  align,
  as: Component = 'p',
}) => {
  return (
    <Component
      className={cn(
        textVariants({
          size,
          weight,
          color,
          truncate,
          align,
        }),
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  );
};
