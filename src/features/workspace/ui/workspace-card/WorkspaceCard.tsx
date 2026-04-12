import { ChevronRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
  ROLE_COLOR,
  ROLE_LABEL,
  WORKSPACE_TYPE_COLOR,
  WORKSPACE_TYPE_ICON,
  WORKSPACE_TYPE_LABEL,
} from '@entities/workspace';
import { useSetActiveWorkspace } from '@features/workspace';

import { PATHS } from '@shared/lib/router';
import { Badge, Card, Icon, IconBox, Stack, Text } from '@shared/ui';

import type { WorkspaceCardProps } from './workspace-card.types';

export const WorkspaceCard = ({ workspace }: WorkspaceCardProps) => {
  const navigate = useNavigate();
  const setActiveWorkspace = useSetActiveWorkspace();

  const handleSelect = () => {
    setActiveWorkspace(workspace.id);
    void navigate(PATHS.workspace.garage(workspace.id));
  };

  return (
    <Card interactive onClick={handleSelect}>
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" gap="md">
          <IconBox
            icon={WORKSPACE_TYPE_ICON[workspace.type]}
            size="md"
            color={WORKSPACE_TYPE_COLOR[workspace.type]}
            radius="xl"
          />

          <Stack gap="xs">
            <Stack direction="row" align="center" gap="sm">
              <Text weight="medium">{workspace.name}</Text>
              <Badge variant="subtle" color={ROLE_COLOR[workspace.currentUserRole]} size="sm">
                {ROLE_LABEL[workspace.currentUserRole]}
              </Badge>
            </Stack>

            <Stack direction="row" align="center" gap="xs">
              <Text size="xs" color="tertiary">
                {WORKSPACE_TYPE_LABEL[workspace.type]}
              </Text>
              <Text size="xs" color="tertiary">
                ·
              </Text>
              <Icon icon={Users} size="xs" color="tertiary" />
              <Text size="xs" color="tertiary">
                {workspace.memberCount} {workspace.memberCount === 1 ? 'member' : 'members'}
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Icon icon={ChevronRight} size="sm" color="tertiary" />
      </Stack>
    </Card>
  );
};
