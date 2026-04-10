import { cva } from 'class-variance-authority';

export const cardVariants = cva('relative overflow-hidden transition-all duration-normal', {
  variants: {
    variant: {
      default: 'bg-bg-card shadow-neu rounded-xl',
      outlined: 'bg-bg-card border border-border rounded-xl',
      ghost: 'bg-transparent rounded-xl',
      neu: 'bg-bg-card shadow-neu rounded-xl',
      colored: 'rounded-xl',
    },

    padding: {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    },

    interactive: {
      true: [
        'cursor-pointer',
        'hover:shadow-neu-md hover:-translate-y-[1px]',
        'active:shadow-neu-inset active:translate-y-0 active:scale-[0.99]',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
});

export const coloredCardVariants: Record<string, string> = {
  accent: '[background-color:rgba(var(--color-accent-rgb),0.1)]',
  fuel: '[background-color:rgba(var(--color-fuel-rgb),0.1)]',
  service: '[background-color:rgba(var(--color-service-rgb),0.1)]',
  documents: '[background-color:rgba(var(--color-documents-rgb),0.1)]',
  expenses: '[background-color:rgba(var(--color-expenses-rgb),0.1)]',
  reminders: '[background-color:rgba(var(--color-reminders-rgb),0.1)]',
  success: '[background-color:rgba(var(--color-success-rgb),0.1)]',
  error: '[background-color:rgba(var(--color-error-rgb),0.1)]',
  warning: '[background-color:rgba(var(--color-warning-rgb),0.1)]',
};
