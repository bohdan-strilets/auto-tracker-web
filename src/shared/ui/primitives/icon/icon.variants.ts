import { cva } from 'class-variance-authority';

export const iconVariants = cva('shrink-0', {
  variants: {
    size: {
      xs: 'size-4',
      sm: 'size-5',
      base: 'size-6',
      md: 'size-7',
      lg: 'size-8',
      xl: 'size-10',
    },

    color: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      tertiary: 'text-text-tertiary',
      disabled: 'text-text-disabled',
      inverse: 'text-text-inverse',
      accent: 'text-accent',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
      fuel: 'text-fuel',
      service: 'text-service',
      documents: 'text-documents',
      expenses: 'text-expenses',
      reminders: 'text-reminders',
      personal: 'text-personal',
      family: 'text-family',
      business: 'text-business',
      owner: 'text-owner',
      admin: 'text-admin',
      member: 'text-member',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'secondary',
  },
});
