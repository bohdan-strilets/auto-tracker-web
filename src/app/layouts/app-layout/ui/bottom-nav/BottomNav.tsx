import { NavLink } from 'react-router-dom';

import { Icon, Stack } from '@shared/ui';

import { NAV_ITEMS } from '../../config/nav-items';
import { NeuButton, sidebarSurfaceStyle } from '../neu';

export const BottomNav = () => {
  return (
    <Stack
      as="nav"
      direction="row"
      justify="around"
      align="center"
      className="p-4 lg:hidden fixed bottom-0 left-0 right-0 z-sticky"
      style={{ ...sidebarSurfaceStyle }}
    >
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {({ isActive }) => (
            <NeuButton isActive={isActive}>
              <Icon
                icon={item.icon}
                size="sm"
                color={isActive ? 'inverse' : 'tertiary'}
                className="transition-colors duration-fast"
              />
            </NeuButton>
          )}
        </NavLink>
      ))}
    </Stack>
  );
};
