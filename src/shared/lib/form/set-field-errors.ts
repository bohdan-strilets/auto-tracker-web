import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';

import { getErrorMessage } from '@shared/api';
import type { ErrorDetail } from '@shared/api';

export const setFieldErrors = <T extends FieldValues>(
  details: ErrorDetail[],
  setError: UseFormSetError<T>,
): void => {
  details.forEach(({ field, code }) => {
    setError(field as Path<T>, { message: getErrorMessage(code) });
  });
};
