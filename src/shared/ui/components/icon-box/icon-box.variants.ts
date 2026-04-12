import { cva } from 'class-variance-authority';

export const iconBoxVariants = cva('inline-flex items-center justify-center shrink-0', {
  variants: {
    size: {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    },

    color: {
      default: 'bg-bg-muted',
      tertiary: 'bg-bg-sunken',
      personal: '[background-color:rgba(var(--color-personal-rgb),0.1)]',
      family: '[background-color:rgba(var(--color-family-rgb),0.1)]',
      business: '[background-color:rgba(var(--color-business-rgb),0.1)]',
      owner: '[background-color:rgba(var(--color-owner-rgb),0.1)]',
      admin: '[background-color:rgba(var(--color-admin-rgb),0.1)]',
      member: '[background-color:rgba(var(--color-member-rgb),0.1)]',
      accent: '[background-color:rgba(var(--color-accent-rgb),0.1)]',
      success: '[background-color:rgba(var(--color-success-rgb),0.1)]',
      error: '[background-color:rgba(var(--color-error-rgb),0.1)]',
      warning: '[background-color:rgba(var(--color-warning-rgb),0.1)]',
      fuel: '[background-color:rgba(var(--color-fuel-rgb),0.1)]',
      service: '[background-color:rgba(var(--color-service-rgb),0.1)]',
      documents: '[background-color:rgba(var(--color-documents-rgb),0.1)]',
      expenses: '[background-color:rgba(var(--color-expenses-rgb),0.1)]',
      reminders: '[background-color:rgba(var(--color-reminders-rgb),0.1)]',
    },

    radius: {
      xs: 'rounded-xs',
      sm: 'rounded-sm',
      base: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
    },

    shadow: {
      none: '',
      sm: 'shadow-sm',
      base: 'shadow',
      card: 'shadow-card',
      md: 'shadow-md',
      'neu-sm': 'shadow-neu-sm',
      neu: 'shadow-neu',
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
    radius: 'full',
    shadow: 'none',
  },
});
