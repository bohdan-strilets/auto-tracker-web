import { cn } from '@shared/lib/utils';

import {
  Select as SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select.primitive';
import { type AppSelectProps } from './select.types';

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
  hasError,
  disabled,
  className,
}: AppSelectProps) => {
  return (
    <SelectRoot value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger
        className={cn(
          'w-full !h-11 px-3 !rounded-md',
          'bg-bg-sunken shadow-neu-inset',
          'text-base text-text-primary font-normal',
          'transition-all duration-fast outline-none',
          'border',
          hasError
            ? 'border-error/40 focus:border-error/60'
            : 'border-transparent focus:border-accent/30',
          disabled && 'opacity-50 cursor-not-allowed',
          '[&[data-placeholder]>span]:text-text-tertiary',
          className,
        )}
      >
        <SelectValue placeholder={placeholder ?? 'Оберіть...'} />
      </SelectTrigger>

      <SelectContent
        className={cn('bg-bg-card border border-border', 'shadow-neu rounded-xl overflow-hidden')}
      >
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className={cn(
              'text-base text-text-primary px-3 py-2.5 cursor-pointer rounded-none',
              'outline-none focus:outline-none',
              'focus:bg-bg-muted focus:text-text-primary',
              '[&>span:first-child]:hidden pr-3',
              'transition-colors duration-fast',
            )}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
