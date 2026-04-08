import { Link as RouterLink } from 'react-router-dom';

import { cn } from '@shared/lib/utils';

import type { LinkProps } from './link.types';
import { linkVariants } from './link.variants';

export const Link = ({ className, variant, size, ...props }: LinkProps) => {
  return <RouterLink className={cn(linkVariants({ variant, size }), className)} {...props} />;
};
