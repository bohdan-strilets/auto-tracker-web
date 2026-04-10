import { cn } from '@shared/lib/utils';
import { Icon, Stack } from '@shared/ui/primitives';

import { themeToggleStyle, themeButtonActiveStyle } from './theme-toggle.styles';
import type { ThemeToggleProps } from './theme-toggle.types';
import { THEME_OPTIONS } from './theme-toggle.utils';

export const ThemeToggle = ({ value = 'light', onChange, className }: ThemeToggleProps) => {
  return (
    <Stack
      direction="row"
      align="center"
      gap="xs"
      className={cn('p-[2px] rounded-sm', className)}
      style={themeToggleStyle}
    >
      {THEME_OPTIONS.map(({ value: theme, icon: Ic }) => {
        const isActive = value === theme;

        return (
          <button
            key={theme}
            onClick={() => onChange?.(theme)}
            className={cn(
              'w-6 h-5 rounded-xs flex items-center justify-center',
              'transition-all duration-fast cursor-pointer',
              isActive
                ? 'text-accent shadow-neu-sm'
                : 'text-sidebar-icon hover:text-sidebar-icon-hover',
            )}
            style={isActive ? themeButtonActiveStyle : undefined}
          >
            <Icon icon={Ic} size="xs" />
          </button>
        );
      })}
    </Stack>
  );
};
