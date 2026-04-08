import { type InputHTMLAttributes } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { inputVariants } from './input.variants';

export type InputType = 'text' | 'email' | 'password';

export type InputProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hasError?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    type?: InputType;
  } & VariantProps<typeof inputVariants>;
