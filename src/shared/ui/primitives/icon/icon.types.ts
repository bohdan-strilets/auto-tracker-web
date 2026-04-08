import { type VariantProps } from 'class-variance-authority';
import { type LucideIcon } from 'lucide-react';

import { iconVariants } from './icon.variants';

export type IconProps = {
  icon: LucideIcon;
  className?: string;
} & VariantProps<typeof iconVariants>;
