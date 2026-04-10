import { getUserFullName } from '@entities/user';
import { useUser } from '@features/auth';

import { useIsSidebarCollapsed } from '@shared/lib/store';
import { Stack } from '@shared/ui';

import { CollapsedControls, Controls } from './controls';
import { CollapsedHeader, Header } from './header';
import { CollapsedNavigation, Navigation } from './navigation';
import { NeuDivider } from './neu';
import { CollapsedUserBar, UserBar } from './user-bar';
import { Wrapper } from './wrapper';

export const Sidebar = () => {
  const isCollapsed = useIsSidebarCollapsed();
  const user = useUser();

  const fullName = user ? getUserFullName(user) : '';

  if (isCollapsed) {
    return (
      <Wrapper isCollapsed={isCollapsed}>
        <CollapsedHeader />
        <CollapsedNavigation />
        <Stack direction="column" align="center" justify="center" gap="md">
          <CollapsedControls />
          <NeuDivider />
          <CollapsedUserBar fullName={fullName} />
        </Stack>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Stack direction="column" gap="md">
        <Controls />
        <NeuDivider expanded />
        <UserBar fullName={fullName} email={user?.email} />
      </Stack>
    </Wrapper>
  );
};
