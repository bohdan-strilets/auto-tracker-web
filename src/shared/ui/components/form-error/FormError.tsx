import { Text } from '@shared/ui/primitives';

import type { FormErrorProps } from './form-error.types';

export const FormError = ({ message, className, align = 'left' }: FormErrorProps) => {
  if (!message) return null;

  return (
    <Text color="error" size="sm" align={align} className={className}>
      {message}
    </Text>
  );
};
