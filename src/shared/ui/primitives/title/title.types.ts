import { type VariantProps } from 'class-variance-authority';

import { titleVariants } from './title.variants';

export type TitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & VariantProps<typeof titleVariants>;
