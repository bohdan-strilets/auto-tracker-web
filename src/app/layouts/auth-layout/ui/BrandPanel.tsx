import { colors, shadows } from '@shared/design-system';
import { linearGradient } from '@shared/lib/css';
import { Logo, Stack, Text, Title } from '@shared/ui';

export const BrandPanel = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Stack
      direction="column"
      justify="between"
      gap="2xl"
      className="hidden lg:flex lg:w-1/2 p-12"
      style={{
        background: linearGradient(160, colors.sidebar.from, colors.sidebar.to),
        boxShadow: `4px 0 24px ${shadows.neu.dark}, inset -1px 0 0 ${shadows.neu.light}`,
      }}
    >
      <Stack direction="row" align="center" gap="sm">
        <Logo variant="full" size="sm" />
      </Stack>

      <Stack gap="sm">
        <Title level={2}>Every journey starts here.</Title>
        <Text size="sm" color="secondary">
          Track fuel, services, expenses and the full life of your vehicle — in one place.
        </Text>
      </Stack>

      <Text size="sm" color="tertiary">
        © {currentYear} AutoTracker
      </Text>
    </Stack>
  );
};
