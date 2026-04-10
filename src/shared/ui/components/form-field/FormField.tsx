import { type FC } from 'react';

import { Stack, Text } from '@shared/ui/primitives';

import { type FormFieldProps } from './form-field.types';

export const FormField: FC<FormFieldProps> = ({
  children,
  label,
  hint,
  error,
  required,
  className,
}) => {
  return (
    <Stack gap="sm" fullWidth className={className}>
      {label && (
        <Text as="label" size="sm" weight="medium" color="primary">
          {label}
          {required && (
            <Text as="span" color="error" className="ml-1">
              *
            </Text>
          )}
        </Text>
      )}

      {children}

      {error && (
        <Text size="xs" color="error">
          {error}
        </Text>
      )}
      {hint && !error && (
        <Text size="xs" color="tertiary">
          {hint}
        </Text>
      )}
    </Stack>
  );
};
