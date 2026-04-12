import { PanelLeft } from 'lucide-react';

import { useToggleSidebar } from '@shared/lib/store';
import { Icon, Logo, Stack, Tooltip } from '@shared/ui';

import { NeuButton } from '../neu';

export const CollapsedHeader = () => {
  const toggle = useToggleSidebar();

  return (
    <Stack gap="md" className="pb-10">
      <Tooltip content="Toggle Sidebar" side="right">
        <NeuButton onClick={toggle}>
          <Icon icon={PanelLeft} size="xs" color="tertiary" />
        </NeuButton>
      </Tooltip>

      <Logo size="xs" />
    </Stack>
  );
};
