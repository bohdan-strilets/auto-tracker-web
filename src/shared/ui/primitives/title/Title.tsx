import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type TitleProps } from './title.types';
import { titleVariants } from './title.variants';

const levelTagMap = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
} as const;

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
