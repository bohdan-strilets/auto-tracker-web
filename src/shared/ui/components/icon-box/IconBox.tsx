import { type FC } from 'react';

import { cn } from '@shared/lib/utils';
import { Icon } from '@shared/ui/primitives';

import type { IconBoxProps } from './icon-box.types';
import { resolveIconSize } from './icon-box.utils';
import { iconBoxVariants } from './icon-box.variants';

export const IconBox: FC<IconBoxProps> = ({
  icon,
  size,
  color,
  radius,
  shadow,
  iconSize,
  iconColor,
  className,
}) => {
  const resolvedIconColor = iconColor ?? (color !== 'default' ? color : 'accent');

  return (
    <div
      className={cn(
        iconBoxVariants({
          size,
          color,
          radius,
          shadow,
        }),
        className,
      )}
    >
      <Icon icon={icon} size={iconSize ?? resolveIconSize(size)} color={resolvedIconColor} />
    </div>
  );
};
