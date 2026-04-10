import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  [
    'relative inline-flex items-center justify-center shrink-0',
    'overflow-hidden rounded-full',
    'bg-bg-muted shadow-neu-sm',
  ],
  {
    variants: {
      size: {
        xs: 'size-6 text-xs',
        sm: 'size-8 text-sm',
        base: 'size-10 text-base',
        md: 'size-12 text-lg',
        lg: 'size-16 text-xl',
        xl: 'size-20 text-2xl',
      },
    },

    defaultVariants: {
      size: 'base',
    },
  },
);
