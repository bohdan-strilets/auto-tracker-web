import { type FC } from 'react';

import { cn } from '@shared/lib/utils';
import { Text } from '@shared/ui/primitives';

import { type AvatarProps } from './avatar.types';
import { getFallbackText } from './avatar.utils';
import { avatarVariants } from './avatar.variants';

export const Avatar: FC<AvatarProps> = ({ src, alt, fallback, size, className }) => {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      {src ? (
        <img src={src} alt={alt ?? fallback ?? 'avatar'} className="size-full object-cover" />
      ) : (
        <Text color="tertiary" weight="medium" truncate>
          {getFallbackText(fallback)}
        </Text>
      )}
    </div>
  );
};
