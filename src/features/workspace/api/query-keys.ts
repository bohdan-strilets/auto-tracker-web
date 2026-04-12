export const workspaceQueryKeys = {
  all: ['workspaces'] as const,
  byId: (workspaceId: string) => ['workspaces', workspaceId] as const,
};
