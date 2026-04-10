import { Logo, Stack } from '@shared/ui';

import { CollapseButton } from '../collapse-button';

export const CollapsedHeader = () => {
  return (
    <Stack gap="md" className="pb-10">
      <CollapseButton />
      <Logo />
    </Stack>
  );
};
