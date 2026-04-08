import { cn } from '@shared/lib/utils';
import { Surface } from '@shared/ui/primitives';

import type { FormErrorProps } from './form-error.types';

const ALIGN_CLASSES = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

export const FormError = ({ message, className, align = 'left' }: FormErrorProps) => {
  if (!message) return null;

  return (
    <Surface color={'error'} radius={'md'} className="p-2">
      <p className={cn('text-sm text-error', ALIGN_CLASSES[align], className)}>{message}</p>
    </Surface>
  );
};
