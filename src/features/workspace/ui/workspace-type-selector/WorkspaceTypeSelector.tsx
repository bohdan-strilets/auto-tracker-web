import { cn } from '@shared/lib/utils';
import { IconBox } from '@shared/ui';
import { Stack, Text } from '@shared/ui/primitives';

import { WORKSPACE_TYPE_OPTIONS } from './workspace-type-selector.config';
import type { WorkspaceTypeSelectorProps } from './workspace-type-selector.types';

export const WorkspaceTypeSelector = ({ value, onChange }: WorkspaceTypeSelectorProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-bg-sunken">
      {WORKSPACE_TYPE_OPTIONS.map((option) => {
        const isSelected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value);
            }}
            className={cn(
              'flex flex-col items-center gap-2 px-1 py-3  sm:px-3  rounded-lg',
              'transition-all duration-normal ease-out',
              'cursor-pointer select-none',
              isSelected ? 'bg-bg-card shadow-card' : 'hover:bg-bg-muted',
            )}
          >
            <IconBox
              icon={option.icon}
              size="md"
              color={isSelected ? option.iconColor : 'tertiary'}
            />

            <Stack align="center" gap="xs">
              <Text
                size="sm"
                weight={isSelected ? 'medium' : 'regular'}
                color={isSelected ? 'primary' : 'secondary'}
                className="transition-colors duration-normal"
              >
                {option.label}
              </Text>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-normal',
                  isSelected ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0',
                )}
              >
                <Text size="xs" color="tertiary" className="text-center leading-tight">
                  {option.description}
                </Text>
              </div>
            </Stack>
          </button>
        );
      })}
    </div>
  );
};
