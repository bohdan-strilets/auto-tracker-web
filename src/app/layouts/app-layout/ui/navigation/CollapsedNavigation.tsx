import { NavLink } from 'react-router-dom';

import { Icon, Stack, Tooltip } from '@shared/ui';

import { NAV_ITEMS } from '../../config';
import { NeuButton } from '../neu';

export const CollapsedNavigation = () => {
  return (
    <Stack gap="md" className="flex-1">
      {NAV_ITEMS.map((item) => (
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
  );
};
