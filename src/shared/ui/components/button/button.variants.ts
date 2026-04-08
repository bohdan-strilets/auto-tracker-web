import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold whitespace-nowrap',
    'border border-transparent',
    'transition-all duration-fast ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-r from-primary-light to-primary',
          'text-white',
          'shadow-glow-primary',
          'hover:shadow-md hover:brightness-105',
          'active:brightness-95 active:scale-[0.98]',
        ],

        secondary: [
          'bg-primary/10 text-primary',
          'border border-primary/20',
          'hover:bg-primary/15',
          'active:scale-[0.98]',
        ],

        ghost: [
          'bg-transparent text-text-secondary',
          'hover:bg-bg-muted hover:text-text-primary',
          'active:scale-[0.98]',
        ],

        destructive: [
          'bg-gradient-to-r from-red-400 to-error',
          'text-white',
          'shadow-[0_8px_20px_rgba(239,68,68,0.25)]',
          'hover:brightness-105',
          'active:brightness-95 active:scale-[0.98]',
        ],
      },

      size: {
        sm: 'h-9  px-4  text-sm  rounded-xl',
        md: 'h-11 px-5  text-sm  rounded-2xl',
        lg: 'h-12 px-6  text-base rounded-full',
      },

      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);
