import React from 'react';

import { cn } from '@shared/lib/utils';

import { neuStyles } from './neu.styles';
import type { NeuItemProps } from './neu.types';

export const NeuItem = ({ children, isActive, danger, onClick, className }: NeuItemProps) => {
  const [hovered, setHovered] = React.useState(false);

  const style = isActive
    ? neuStyles.active
    : danger && hovered
      ? neuStyles.danger
      : hovered
        ? neuStyles.hover
        : neuStyles.base;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={cn(
        'flex items-center gap-xs w-full',
        'px-4 py-3 rounded-md',
        'relative cursor-pointer',
        'transition-all duration-normal ease-out',
        !isActive && hovered && '-translate-y-px',
        className,
      )}
      style={style}
    >
      {children}
    </button>
  );
};
