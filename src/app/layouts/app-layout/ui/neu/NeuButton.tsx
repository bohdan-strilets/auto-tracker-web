import React from 'react';

import { cn } from '@shared/lib/utils';

import { neuStyles } from './neu.styles';
import type { NeuButtonProps } from './neu.types';

export const NeuButton = ({ children, isActive, danger, onClick, className }: NeuButtonProps) => {
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
        'w-[46px] h-[46px] rounded-md',
        'flex items-center justify-center',
        'relative shrink-0 cursor-pointer',
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
