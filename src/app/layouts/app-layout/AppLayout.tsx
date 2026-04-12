import { Outlet } from 'react-router-dom';

import { Stack } from '@shared/ui';

import { BottomNav } from './ui/bottom-nav';
import { Sidebar } from './ui/Sidebar';

export const AppLayout = () => {
  return (
    <Stack direction="row" className="h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 pb-20 lg:pb-6 min-w-0">
        <Outlet />
      </main>

      <BottomNav />
    </Stack>
  );
};
