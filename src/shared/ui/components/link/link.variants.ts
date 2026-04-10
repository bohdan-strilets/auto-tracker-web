import { cva } from 'class-variance-authority';

export const linkVariants = cva('transition-colors duration-fast font-medium', {
  variants: {
    variant: {
      accent: 'text-accent hover:text-accent-dark',
      secondary: 'text-text-secondary hover:text-text-primary',
    },

    size: {
      sm: 'text-sm',
      md: 'text-base',
    },
  },

  defaultVariants: {
    variant: 'accent',
    size: 'sm',
  },
});
