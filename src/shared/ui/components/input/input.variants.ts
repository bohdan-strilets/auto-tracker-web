import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'w-full rounded-md px-3',
    'font-normal text-text-primary placeholder:text-text-tertiary',
    'outline-none transition-all duration-fast',
    'bg-bg-sunken shadow-neu-inset',
  ],
  {
    variants: {
      size: {
        sm: 'h-9 text-sm',
        base: 'h-11 text-base',
        lg: 'h-12 text-lg',
      },

      state: {
        default: [
          'border border-transparent',
          'focus:border-accent/30 focus:shadow-[var(--neu-shadow-inset),0_0_0_2px_rgba(var(--color-accent-rgb),0.15)]',
        ],
        error: [
          'border border-error/40',
          'focus:border-error/60 focus:shadow-[var(--neu-shadow-inset),0_0_0_2px_rgba(var(--color-error-rgb),0.15)]',
        ],
        disabled: 'opacity-50 cursor-not-allowed',
      },
    },

    defaultVariants: {
      size: 'base',
      state: 'default',
    },
  },
);
