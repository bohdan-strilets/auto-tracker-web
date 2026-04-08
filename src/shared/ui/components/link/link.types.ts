import type { VariantProps } from 'class-variance-authority';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';

import type { linkVariants } from './link.variants';

export interface LinkProps extends RouterLinkProps, VariantProps<typeof linkVariants> {}
