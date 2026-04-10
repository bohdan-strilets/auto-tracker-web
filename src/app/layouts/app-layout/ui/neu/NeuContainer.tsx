import React from 'react';

import { cn } from '@shared/lib/utils';

import { neuStyles } from './neu.styles';
import type { NeuContainerProps } from './neu.types';

export const NeuContainer = ({ children, isActive, danger, className }: NeuContainerProps) => {
  const [hovered, setHovered] = React.useState(false);

  const style = isActive
    ? neuStyles.active
    : danger && hovered
      ? neuStyles.danger
      : hovered
        ? neuStyles.hover
        : neuStyles.base;

  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={cn(
        'min-w-12 rounded-md p-3',
        'flex items-center justify-center',
        'relative shrink-0',
        'transition-all duration-normal ease-out',
        !isActive && hovered && '-translate-y-px',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};
