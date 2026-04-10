import { Logo, Stack, Text } from '@shared/ui';

import { CollapseButton } from '../collapse-button';

export const Header = () => {
  return (
    <Stack direction="row" justify="between" align="center" className="mb-10">
      <Stack direction="row" align="center" gap="sm">
        <Logo />
        <Text weight="semibold">AutoTracker</Text>
      </Stack>

      <CollapseButton />
    </Stack>
  );
};
