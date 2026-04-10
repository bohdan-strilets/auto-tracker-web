import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type TitleProps } from './title.types';
import { levelTagMap } from './title.utils';
import { titleVariants } from './title.variants';

export const Title: FC<TitleProps> = ({
  children,
  className,
  style,
  level = 1,
  align,
  truncate,
}) => {
  const Component = levelTagMap[level ?? 1];

  return (
    <Component
      className={cn(
        titleVariants({
          level,
          align,
          truncate,
        }),
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  );
};
