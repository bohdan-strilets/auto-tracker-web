import { type VariantProps } from 'class-variance-authority';

import { badgeVariants } from './badge.variants';

export type BadgeProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof badgeVariants>;
