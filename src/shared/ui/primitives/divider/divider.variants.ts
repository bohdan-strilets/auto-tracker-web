import { cva } from 'class-variance-authority';

export const dividerVariants = cva('bg-border', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
});
