import { NavLink } from 'react-router-dom';

import { Icon, Stack, Text } from '@shared/ui';

import { NAV_ITEMS } from '../../config';
import { NeuItem } from '../neu';

export const Navigation = () => {
  return (
    <Stack gap="md" className="flex-1">
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {({ isActive }) => (
            <NeuItem isActive={isActive}>
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
            </NeuItem>
          )}
        </NavLink>
      ))}
    </Stack>
  );
};
