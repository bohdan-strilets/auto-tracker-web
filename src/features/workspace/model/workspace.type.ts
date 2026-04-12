// Store

export type WorkspaceState = {
  activeWorkspaceId: string | null;
  setActiveWorkspace: (id: string) => void;
  clearActiveWorkspace: () => void;
};

// Hooks

export type UseCreateWorkspaceFormOptions = {
  onSuccess?: () => void;
};
