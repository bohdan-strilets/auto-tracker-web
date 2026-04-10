import { cva } from 'class-variance-authority';

export const dividerVariants = cva('shrink-0', {
  variants: {
    orientation: {
      horizontal: 'w-full h-[2px]',
      vertical: 'h-full w-[2px]',
    },

    variant: {
      default: 'bg-border',
      neu: 'divider-neu',
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
    variant: 'default',
  },
});
