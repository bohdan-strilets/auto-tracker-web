import { cva } from 'class-variance-authority';

export const titleVariants = cva('font-semibold text-text-primary tracking-tight', {
  variants: {
    level: {
      1: 'text-4xl leading-tight tracking-[-0.02em]',
      2: 'text-3xl leading-tight tracking-[-0.01em]',
      3: 'text-2xl leading-snug',
      4: 'text-xl leading-snug',
    },

    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },

    truncate: {
      true: 'truncate',
    },
  },

  defaultVariants: {
    level: 1,
    align: 'left',
  },
});
