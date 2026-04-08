import { type FC } from 'react';

import { cn } from '@shared/lib/utils';

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
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label className="text-sm font-medium text-text-primary">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      {children}

      {error && <p className="text-xs text-error">{error}</p>}
      {hint && !error && <p className="text-xs text-text-tertiary">{hint}</p>}
    </div>
  );
};
