import { cva } from 'class-variance-authority';

export const linkVariants = cva('transition-colors duration-fast font-medium', {
  variants: {
    variant: {
      primary: 'text-primary hover:text-primary-dark',
      secondary: 'text-text-secondary hover:text-text-primary',
    },

    size: {
      sm: 'text-sm',
      md: 'text-base',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});
