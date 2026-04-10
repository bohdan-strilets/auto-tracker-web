import { cva } from 'class-variance-authority';

export const surfaceVariants = cva('', {
  variants: {
    level: {
      base: 'bg-bg',
      card: 'bg-bg-card',
      elevated: 'bg-bg-elevated',
      muted: 'bg-bg-muted',
      sunken: 'bg-bg-sunken',
    },

    color: {
      default: '',
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
      none: 'rounded-none',
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
      lg: 'shadow-lg',
      'neu-sm': 'shadow-neu-sm',
      neu: 'shadow-neu',
      'neu-md': 'shadow-neu-md',
      'neu-lg': 'shadow-neu-lg',
      'neu-inset': 'shadow-neu-inset',
    },

    fullWidth: {
      true: 'w-full',
    },
  },

  defaultVariants: {
    color: 'default',
    radius: 'none',
    shadow: 'none',
  },
});
