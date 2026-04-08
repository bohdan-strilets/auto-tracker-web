import { cva } from 'class-variance-authority';

export const cardVariants = cva('relative overflow-hidden transition-shadow duration-normal', {
  variants: {
    variant: {
      default: 'bg-bg-card shadow-card rounded-lg',
      outlined: 'bg-bg-card border border-border rounded-lg',
      ghost: 'bg-transparent rounded-lg',
      colored: 'rounded-lg',
    },

    padding: {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    },

    interactive: {
      true: 'cursor-pointer hover:shadow-md active:shadow-sm active:scale-[0.99]',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
});

export const coloredCardVariants: Record<string, string> = {
  primary: '[background-color:rgba(var(--color-primary-rgb),0.1)]',
  fuel: '[background-color:rgba(var(--color-fuel-rgb),0.1)]',
  service: '[background-color:rgba(var(--color-service-rgb),0.1)]',
  documents: '[background-color:rgba(var(--color-documents-rgb),0.1)]',
  expenses: '[background-color:rgba(var(--color-expenses-rgb),0.1)]',
  reminders: '[background-color:rgba(var(--color-reminders-rgb),0.1)]',
  success: '[background-color:rgba(var(--color-success-rgb),0.1)]',
  error: '[background-color:rgba(var(--color-error-rgb),0.1)]',
  warning: '[background-color:rgba(var(--color-warning-rgb),0.1)]',
};
