import { forwardRef } from 'react';

import { Minus, Plus } from 'lucide-react';

import { cn } from '@shared/lib/utils';

import { type NumberInputProps } from './number-input.types';
import { decrement, increment, parseInputValue } from './number-input.utils';

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value, onChange, min, max, step = 1, hasError, className, disabled, ...props }, ref) => {
    const handleDecrement = () => {
      if (disabled) return;
      const next = decrement(value ?? 0, step, min);
      if (next !== null) onChange?.(next);
    };

    const handleIncrement = () => {
      if (disabled) return;
      const next = increment(value ?? 0, step, max);
      if (next !== null) onChange?.(next);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseInputValue(e.target.value);
      if (parsed !== null) onChange?.(parsed);
    };

    return (
      <div
        className={cn(
          'flex items-center w-full rounded-md',
          'bg-bg-sunken shadow-neu-inset',
          'border transition-all duration-fast',
          hasError
            ? 'border-error/40 focus-within:border-error/60'
            : 'border-transparent focus-within:border-accent/30',
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
      >
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled ?? (min !== undefined && (value ?? 0) <= min)}
          className="px-3 h-11 text-text-tertiary hover:text-text-primary transition-colors duration-fast disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus size={16} />
        </button>

        <input
          ref={ref}
          type="number"
          value={value ?? ''}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className="flex-1 h-11 text-center text-base font-medium text-text-primary bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          {...props}
        />

        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled ?? (max !== undefined && (value ?? 0) >= max)}
          className="px-3 h-11 text-text-tertiary hover:text-text-primary transition-colors duration-fast disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus size={16} />
        </button>
      </div>
    );
  },
);

NumberInput.displayName = 'NumberInput';
