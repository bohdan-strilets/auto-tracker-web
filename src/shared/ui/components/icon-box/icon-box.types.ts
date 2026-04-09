import type { VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';

import type { iconVariants } from '@shared/ui/primitives/icon';

import type { iconBoxVariants } from './icon-box.variants';

export interface IconBoxProps extends VariantProps<typeof iconBoxVariants> {
  icon: LucideIcon;
  iconSize?: VariantProps<typeof iconVariants>['size'];
  iconColor?: VariantProps<typeof iconVariants>['color'];
  className?: string;
}
