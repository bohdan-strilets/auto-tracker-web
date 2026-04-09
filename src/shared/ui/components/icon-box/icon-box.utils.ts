import type { IconBoxProps } from './icon-box.types';

export const resolveIconSize = (
  boxSize: IconBoxProps['size'],
): NonNullable<IconBoxProps['iconSize']> => {
  const map = {
    sm: 'xs',
    md: 'sm',
    lg: 'base',
    xl: 'md',
  } as const;

  return map[boxSize ?? 'md'];
};
