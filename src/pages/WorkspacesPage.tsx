import { useState } from 'react';

import { Plus } from 'lucide-react';

import { useWorkspacesQuery, WorkspaceCard, CreateWorkspaceForm } from '@features/workspace';

import { Card, Stack, Title, Text, Button, Spinner } from '@shared/ui';

export const WorkspacesPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const { data: workspaces, isLoading } = useWorkspacesQuery();

  if (isLoading) {
    return (
      <Stack align="center" justify="center" className="h-full">
        <Spinner size="md" />
      </Stack>
    );
  }

  const hasWorkspaces = workspaces && workspaces.length > 0;

  if (!hasWorkspaces || isCreating) {
    return (
      <Stack align="center" justify="center" className="h-full">
        <Card padding="none" className="w-full max-w-md p-4 sm:p-6">
          <Stack gap="lg">
            <Stack gap="xs">
              <Title level={2}>
                {isCreating ? 'New workspace' : 'Create your first workspace'}
              </Title>
              <Text size="sm" color="secondary">
                {isCreating
                  ? 'Set up a new workspace for your vehicles.'
                  : 'A workspace is where you manage your vehicles. Start by creating one.'}
              </Text>
            </Stack>

            <CreateWorkspaceForm
              onSuccess={() => {
                setIsCreating(false);
              }}
            />

            {isCreating && (
              <Button
                variant="ghost"
                onClick={() => {
                  setIsCreating(false);
                }}
              >
                Cancel
              </Button>
            )}
          </Stack>
        </Card>
      </Stack>
    );
  }

  return (
    <Stack gap="xl" className="max-w-2xl mx-auto">
      <Stack
        direction="row"
        align="center"
        justify="between"
        className="flex-col gap-3 sm:flex-row sm:gap-0"
      >
        <Stack gap="xs">
          <Title level={2}>Your workspaces</Title>
          <Text size="sm" color="secondary">
            Select a workspace to continue
          </Text>
        </Stack>

        <Button
          size="sm"
          variant="secondary"
          leftIcon={<Plus size={16} />}
          onClick={() => {
            setIsCreating(true);
          }}
        >
          New workspace
        </Button>
      </Stack>

      <Stack gap="md">
        {workspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </Stack>
    </Stack>
  );
};
