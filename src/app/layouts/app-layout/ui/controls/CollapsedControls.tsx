import { Bell, Sun } from 'lucide-react';

import { Icon, Stack, Tooltip } from '@shared/ui';

import { NeuButton } from '../neu';

import { NotificationMarker } from './NotificationMarker';

export const CollapsedControls = () => {
  return (
    <Stack gap="md" className="items-center px-3">
      <Tooltip content="Notifications" side="right">
        <NeuButton>
          <NotificationMarker />
          <Icon icon={Bell} size="xs" className="text-sidebar-icon" />
        </NeuButton>
      </Tooltip>

      <Tooltip content="Appearance" side="right">
        <NeuButton>
          <Icon icon={Sun} size="xs" className="text-sidebar-icon" />
        </NeuButton>
      </Tooltip>
    </Stack>
  );
};
