import { LogOut } from 'lucide-react';

import { Avatar, Icon, Stack, Text } from '@shared/ui';

import { NeuItem } from '../neu';

import type { UserBarProps } from './user-bar.types';

export const UserBar = ({ fullName, email }: UserBarProps) => {
  return (
    <Stack gap="md">
      <NeuItem>
        <Avatar size="sm" fallback={fullName} />
        <Stack gap="none" className="flex-1 min-w-0">
          <Text size="xs" weight="medium" color="primary" truncate align="center">
            {fullName}
          </Text>
          {email && (
            <Text size="xs" align="center" color="tertiary" truncate>
              {email}
            </Text>
          )}
        </Stack>
      </NeuItem>

      <NeuItem danger>
        <Stack direction="row" gap="sm">
          <Icon icon={LogOut} size="xs" color="tertiary" />
          <Text size="xs" color="tertiary" truncate>
            Sign out
          </Text>
        </Stack>
      </NeuItem>
    </Stack>
  );
};
