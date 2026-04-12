import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { WorkspaceState } from './workspace.type';

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      activeWorkspaceId: null,

      setActiveWorkspace: (id) => set({ activeWorkspaceId: id }),
      clearActiveWorkspace: () => set({ activeWorkspaceId: null }),
    }),
    { name: 'active-workspace' },
  ),
);
