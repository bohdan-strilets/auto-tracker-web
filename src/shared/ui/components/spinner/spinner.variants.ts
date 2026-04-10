import { cva } from 'class-variance-authority';

export const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        xs: 'size-3',
        sm: 'size-4',
        base: 'size-6',
        md: 'size-8',
        lg: 'size-10',
      },

      color: {
        accent: 'text-accent',
        secondary: 'text-text-secondary',
        inverse: 'text-text-inverse',
        success: 'text-success',
        error: 'text-error',
      },
    },

    defaultVariants: {
      size: 'base',
      color: 'accent',
    },
  },
);
