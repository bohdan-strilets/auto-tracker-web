import { useWorkspaceStore } from './workspace.store';

// Selectors
export const useActiveWorkspaceId = () => {
  return useWorkspaceStore((state) => state.activeWorkspaceId);
};

// Actions
export const useSetActiveWorkspace = () => {
  return useWorkspaceStore((state) => state.setActiveWorkspace);
};

export const useClearActiveWorkspace = () => {
  return useWorkspaceStore((state) => state.clearActiveWorkspace);
};
