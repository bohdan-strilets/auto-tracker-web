import { Outlet } from 'react-router-dom';

import { Logo, Stack, Text } from '@shared/ui';

export const FormPanel = () => {
  return (
    <Stack direction="column" align="center" justify="center" className="flex-1 p-6">
      <Stack direction="column" gap="lg" className="w-full max-w-sm">
        <Stack direction="row" align="center" gap="sm" className="lg:hidden">
          <Logo />
          <Text weight="semibold">AutoTracker</Text>
        </Stack>

        <Outlet />
      </Stack>
    </Stack>
  );
};
