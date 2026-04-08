import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

import { type CardProps } from './card.types';
import { cardVariants, coloredCardVariants } from './card.variants';

export const Card: FC<CardProps> = ({
  children,
  className,
  style,
  variant,
  padding,
  interactive,
  color,
  onClick,
}) => {
  const isColored = variant === 'colored';
  const colorClass = isColored && color ? coloredCardVariants[color] : '';

  return (
    <div
      className={cn(cardVariants({ variant, padding, interactive }), colorClass, className)}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};
