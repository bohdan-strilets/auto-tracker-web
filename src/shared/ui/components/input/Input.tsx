import { forwardRef, useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { cn } from '@shared/lib/utils';
import { Stack } from '@shared/ui/primitives';

import { type InputProps } from './input.types';
import { inputVariants } from './input.variants';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', size, className, disabled, leftIcon, rightIcon, hasError, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
    const state = disabled ? 'disabled' : hasError ? 'error' : 'default';

    return (
      <Stack align="center" justify="center" fullWidth className="relative">
        {leftIcon && <span className="absolute left-3 text-text-tertiary">{leftIcon}</span>}

        <input
          ref={ref}
          type={inputType}
          disabled={disabled}
          className={cn(
            inputVariants({ size, state }),
            leftIcon && 'pl-10',
            (rightIcon || isPassword) && 'pr-10',
            className,
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className="absolute right-3 text-text-tertiary hover:text-text-secondary transition-colors duration-fast"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {!isPassword && rightIcon && (
          <span className="absolute right-3 text-text-tertiary">{rightIcon}</span>
        )}
      </Stack>
    );
  },
);

Input.displayName = 'Input';
