import { Outlet } from 'react-router-dom';

import { Stack, Surface, Text, Title } from '@shared/ui';

export const AuthLayout = () => {
  return (
    <Surface level="base" className="min-h-screen flex">
      {/* Brand panel */}
      <Stack
        direction="column"
        justify="between"
        gap="2xl"
        className="hidden lg:flex lg:w-1/2 p-12"
      >
        {/* Logo */}
        <Stack direction="row" align="center" gap="sm">
          <Surface level="card" radius="sm" className="w-8 h-8 bg-primary" />
          <Text weight="semibold" color="primary">
            AutoTracker
          </Text>
        </Stack>

        {/* Quote */}
        <Stack gap="sm">
          <Title level={2}>Every journey starts here.</Title>
          <Text size="sm" color="secondary">
            Track fuel, services, expenses and the full life of your vehicle — in one place.
          </Text>
        </Stack>

        {/* Footer */}
        <Text size="sm" color="tertiary">
          © {new Date().getFullYear()} AutoTracker
        </Text>
      </Stack>

      {/* Form panel */}
      <Stack direction="column" align="center" justify="center" className="flex-1 p-6">
        <Stack direction="column" gap="lg" className="w-full max-w-sm">
          {/* Mobile logo */}
          <Stack direction="row" align="center" gap="sm" className="lg:hidden">
            <Surface radius="sm" className="w-7 h-7 bg-primary" />
            <Text weight="semibold" color="primary">
              AutoTracker
            </Text>
          </Stack>

          <Outlet />
        </Stack>
      </Stack>
    </Surface>
  );
};
