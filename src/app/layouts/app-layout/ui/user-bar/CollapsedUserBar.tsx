import { LogOut } from 'lucide-react';

import { Avatar, Icon, Stack, Tooltip } from '@shared/ui';

import { NeuButton } from '../neu';

import type { CollapsedUserBarProps } from './user-bar.types';

export const CollapsedUserBar = ({ fullName }: CollapsedUserBarProps) => {
  return (
    <Stack gap="md">
      <Tooltip content={fullName} side="right">
        <NeuButton>
          <Avatar size="xs" fallback={fullName} />
        </NeuButton>
      </Tooltip>

      <Tooltip content="Sign out" side="right">
        <NeuButton danger>
          <Icon icon={LogOut} size="xs" color="tertiary" />
        </NeuButton>
      </Tooltip>
    </Stack>
  );
};
