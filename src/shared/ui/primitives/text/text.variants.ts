import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },

    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },

    color: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      tertiary: 'text-text-tertiary',
      disabled: 'text-text-disabled',
      inverse: 'text-text-inverse',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
    },

    truncate: {
      true: 'truncate',
    },

    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },

  defaultVariants: {
    size: 'base',
    weight: 'regular',
    color: 'secondary',
    align: 'left',
  },
});
