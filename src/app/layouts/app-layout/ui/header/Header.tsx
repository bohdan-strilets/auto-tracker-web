import { PanelLeft } from 'lucide-react';

import { useToggleSidebar } from '@shared/lib/store';
import { Icon, Logo, Stack } from '@shared/ui';

import { NeuButton } from '../neu';

export const Header = () => {
  const toggle = useToggleSidebar();

  return (
    <Stack direction="row" justify="between" align="center" className="mb-10">
      <Stack direction="row" align="center" gap="sm">
        <Logo variant="full" size="sm" />
      </Stack>

      <NeuButton onClick={toggle}>
        <Icon icon={PanelLeft} size="xs" color="tertiary" />
      </NeuButton>
    </Stack>
  );
};
