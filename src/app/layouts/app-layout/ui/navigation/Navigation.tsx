import { NavLink } from 'react-router-dom';

import { useActiveWorkspaceId } from '@features/workspace';

import { Icon, Stack, Text } from '@shared/ui';

import { getNavItems, workspacesNav, type NavItem } from '../../config';
import { NeuButton } from '../neu';

export const Navigation = () => {
  const activeWorkspaceId = useActiveWorkspaceId();

  const navItems: NavItem[] = activeWorkspaceId ? getNavItems(activeWorkspaceId) : [];

  return (
    <Stack gap="2xl" className="flex-1">
      <Stack gap="md">
        {workspacesNav.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {({ isActive }) => (
              <NeuButton isActive={isActive} className="w-full justify-start">
                <Stack direction="row" align="center" gap="sm">
                  <Icon
                    icon={item.icon}
                    size="xs"
                    color={isActive ? 'inverse' : 'tertiary'}
                    className="shrink-0 transition-colors duration-fast"
                  />

                  <Text
                    size="sm"
                    color={isActive ? 'inverse' : 'tertiary'}
                    className="text-sm truncate transition-colors duration-fast"
                  >
                    {item.label}
                  </Text>
                </Stack>
              </NeuButton>
            )}
          </NavLink>
        ))}
      </Stack>

      <Stack gap="md" className="flex-1">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {({ isActive }) => (
              <NeuButton isActive={isActive} className="w-full justify-start">
                <Stack direction="row" align="center" gap="sm">
                  <Icon
                    icon={item.icon}
                    size="xs"
                    color={isActive ? 'inverse' : 'tertiary'}
                    className="shrink-0 transition-colors duration-fast"
                  />

                  <Text
                    size="sm"
                    color={isActive ? 'inverse' : 'tertiary'}
                    className="text-sm truncate transition-colors duration-fast"
                  >
                    {item.label}
                  </Text>
                </Stack>
              </NeuButton>
            )}
          </NavLink>
        ))}
      </Stack>
    </Stack>
  );
};
