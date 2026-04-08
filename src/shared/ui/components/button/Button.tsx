import { forwardRef } from 'react';

import { cn } from '@shared/lib/utils';

import { Spinner } from '../spinner';

import type { ButtonProps } from './button.types';
import { buttonVariants } from './button.variants';

const SPINNER_SIZE: Record<NonNullable<ButtonProps['size']>, 'xs' | 'sm'> = {
  sm: 'xs',
  md: 'xs',
  lg: 'sm',
};

const SPINNER_COLOR: Record<
  NonNullable<ButtonProps['variant']>,
  'inverse' | 'primary' | 'secondary'
> = {
  primary: 'inverse',
  secondary: 'primary',
  ghost: 'secondary',
  destructive: 'inverse',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const spinnerSize = SPINNER_SIZE[size as keyof typeof SPINNER_SIZE];
    const spinnerColor = SPINNER_COLOR[variant as keyof typeof SPINNER_COLOR];

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? <Spinner size={spinnerSize} color={spinnerColor} /> : leftIcon}

        <span>{children}</span>

        {!isLoading && rightIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';
