import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'w-full rounded-md bg-bg-muted px-3 font-normal text-text-primary placeholder:text-text-tertiary outline-none transition-all duration-fast',
  {
    variants: {
      size: {
        sm: 'h-9 text-sm',
        base: 'h-11 text-base',
        lg: 'h-13 text-lg',
      },

      state: {
        default: 'border border-transparent focus:border-primary',
        error: 'border border-error focus:border-error',
        disabled: 'opacity-50 cursor-not-allowed',
      },
    },

    defaultVariants: {
      size: 'base',
      state: 'default',
    },
  },
);
