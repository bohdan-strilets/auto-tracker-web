import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type ContainerProps } from './container.types';

export const Container: FC<ContainerProps> = ({
  children,
  className,
  style,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        'w-full mx-auto px-4',
        'sm:max-w-[640px]',
        'lg:max-w-[1024px]',
        'xl:max-w-[1280px]',
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  );
};
