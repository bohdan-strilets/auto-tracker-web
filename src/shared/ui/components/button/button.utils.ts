import type { ButtonProps } from './button.types';

export const SPINNER_SIZE: Record<NonNullable<ButtonProps['size']>, 'xs' | 'sm'> = {
  sm: 'xs',
  md: 'xs',
  lg: 'sm',
};

export const SPINNER_COLOR: Record<
  NonNullable<ButtonProps['variant']>,
  'inverse' | 'accent' | 'secondary'
> = {
  primary: 'inverse',
  secondary: 'accent',
  ghost: 'secondary',
  destructive: 'inverse',
};
