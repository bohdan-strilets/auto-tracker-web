import { type VariantProps } from 'class-variance-authority';

import { avatarVariants } from './avatar.variants';

export type AvatarProps = {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
} & VariantProps<typeof avatarVariants>;
