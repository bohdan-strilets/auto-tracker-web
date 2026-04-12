import { NavLink } from 'react-router-dom';

import { useActiveWorkspaceId } from '@features/workspace';

import { Icon, Stack, Tooltip } from '@shared/ui';

import { getNavItems, workspacesNav, type NavItem } from '../../config';
import { NeuButton } from '../neu';

export const CollapsedNavigation = () => {
  const activeWorkspaceId = useActiveWorkspaceId();
  const navItems: NavItem[] = activeWorkspaceId ? getNavItems(activeWorkspaceId) : [];

  return (
    <Stack gap="2xl" className="flex-1">
      <Stack gap="md">
        {workspacesNav.map((item) => (
          <Tooltip key={item.path} content={item.label} side="right">
            <NavLink to={item.path}>
              {({ isActive }) => (
                <NeuButton isActive={isActive}>
                  <Icon
                    icon={item.icon}
                    size="xs"
                    color={isActive ? 'inverse' : 'tertiary'}
                    className="shrink-0 transition-colors duration-fast"
                  />
                </NeuButton>
              )}
            </NavLink>
          </Tooltip>
        ))}
      </Stack>

      <Stack gap="md" className="flex-1">
        {navItems.map((item) => (
          <Tooltip key={item.path} content={item.label} side="right">
            <NavLink to={item.path}>
              {({ isActive }) => (
                <NeuButton isActive={isActive}>
                  <Icon
                    icon={item.icon}
                    size="xs"
                    color={isActive ? 'inverse' : 'tertiary'}
                    className="shrink-0 transition-colors duration-fast"
                  />
                </NeuButton>
              )}
            </NavLink>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
};
