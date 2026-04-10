import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORE_KEYS } from '../store-keys';

import type { SidebarActions, SidebarState } from './sidebar.types';

export const useSidebarStore = create<SidebarState & SidebarActions>()(
  persist(
    (set) => ({
      isSidebarCollapsed: false,

      toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),

      setSidebarCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
    }),
    { name: STORE_KEYS.sidebar },
  ),
);
