import { Bell, Sun } from 'lucide-react';

import { Badge, Icon, Stack, Text, ThemeToggle } from '@shared/ui';

import { NeuButton, NeuContainer } from '../neu';

export const Controls = () => {
  return (
    <Stack gap="md">
      <NeuButton>
        <Stack direction="row" justify="between" align="center" fullWidth>
          <Icon icon={Bell} size="xs" color="tertiary" />
          <Text size="sm" color="tertiary">
            Notifications
          </Text>
          <Badge variant="solid" color="accent" size="sm">
            3
          </Badge>
        </Stack>
      </NeuButton>

      <NeuContainer>
        <Stack direction="row" justify="between" align="center" fullWidth>
          <Icon icon={Sun} size="xs" color="tertiary" />
          <Text size="sm" color="tertiary">
            Appearance
          </Text>
          <ThemeToggle />
        </Stack>
      </NeuContainer>
    </Stack>
  );
};
