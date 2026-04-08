import { type VariantProps } from 'class-variance-authority';

import { cardVariants } from './card.variants';

export type CardColor =
  | 'primary'
  | 'fuel'
  | 'service'
  | 'documents'
  | 'expenses'
  | 'reminders'
  | 'success'
  | 'error'
  | 'warning';

export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: CardColor;
  interactive?: boolean;
  onClick?: () => void;
} & VariantProps<typeof cardVariants>;
