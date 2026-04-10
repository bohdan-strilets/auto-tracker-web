import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-full',
  {
    variants: {
      variant: {
        solid: '',
        subtle: '',
        outline: 'border bg-transparent',
      },

      color: {
        default: '',
        accent: '',
        fuel: '',
        service: '',
        documents: '',
        expenses: '',
        reminders: '',
        success: '',
        error: '',
        warning: '',
      },

      size: {
        sm: 'text-xs px-2 py-0.5',
        base: 'text-sm px-2.5 py-1',
        lg: 'text-base px-3 py-1.5',
      },
    },

    compoundVariants: [
      // solid
      { variant: 'solid', color: 'accent', className: 'bg-accent text-text-inverse' },
      { variant: 'solid', color: 'fuel', className: 'bg-fuel text-white' },
      { variant: 'solid', color: 'service', className: 'bg-service text-white' },
      { variant: 'solid', color: 'documents', className: 'bg-documents text-white' },
      { variant: 'solid', color: 'expenses', className: 'bg-expenses text-white' },
      { variant: 'solid', color: 'reminders', className: 'bg-reminders text-white' },
      { variant: 'solid', color: 'success', className: 'bg-success text-white' },
      { variant: 'solid', color: 'error', className: 'bg-error text-white' },
      { variant: 'solid', color: 'warning', className: 'bg-warning text-white' },

      // subtle
      {
        variant: 'subtle',
        color: 'accent',
        className: '[background-color:rgba(var(--color-accent-rgb),0.1)] text-accent',
      },
      {
        variant: 'subtle',
        color: 'fuel',
        className: '[background-color:rgba(var(--color-fuel-rgb),0.1)] text-fuel',
      },
      {
        variant: 'subtle',
        color: 'service',
        className: '[background-color:rgba(var(--color-service-rgb),0.1)] text-service',
      },
      {
        variant: 'subtle',
        color: 'documents',
        className: '[background-color:rgba(var(--color-documents-rgb),0.1)] text-documents',
      },
      {
        variant: 'subtle',
        color: 'expenses',
        className: '[background-color:rgba(var(--color-expenses-rgb),0.1)] text-expenses',
      },
      {
        variant: 'subtle',
        color: 'reminders',
        className: '[background-color:rgba(var(--color-reminders-rgb),0.1)] text-reminders',
      },
      {
        variant: 'subtle',
        color: 'success',
        className: '[background-color:rgba(var(--color-success-rgb),0.1)] text-success',
      },
      {
        variant: 'subtle',
        color: 'error',
        className: '[background-color:rgba(var(--color-error-rgb),0.1)] text-error',
      },
      {
        variant: 'subtle',
        color: 'warning',
        className: '[background-color:rgba(var(--color-warning-rgb),0.1)] text-warning',
      },

      // outline
      { variant: 'outline', color: 'accent', className: 'border-accent text-accent' },
      { variant: 'outline', color: 'fuel', className: 'border-fuel text-fuel' },
      { variant: 'outline', color: 'service', className: 'border-service text-service' },
      { variant: 'outline', color: 'documents', className: 'border-documents text-documents' },
      { variant: 'outline', color: 'expenses', className: 'border-expenses text-expenses' },
      { variant: 'outline', color: 'reminders', className: 'border-reminders text-reminders' },
      { variant: 'outline', color: 'success', className: 'border-success text-success' },
      { variant: 'outline', color: 'error', className: 'border-error text-error' },
      { variant: 'outline', color: 'warning', className: 'border-warning text-warning' },
    ],

    defaultVariants: {
      variant: 'subtle',
      color: 'default',
      size: 'base',
    },
  },
);
