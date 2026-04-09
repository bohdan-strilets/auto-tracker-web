import { Mail } from 'lucide-react';

import { useResendVerification, useUser } from '@features/auth';

import { PATHS } from '@shared/router';
import { Button, IconBox, Link, Stack, Text, Title } from '@shared/ui';

export const VerifyEmailNoticePage = () => {
  const user = useUser();
  const email = user?.email ?? '';
  const { resend, cooldown, isPending, error } = useResendVerification(email);

  return (
    <Stack gap="lg" align="center" className="max-w-sm mx-auto text-center">
      <IconBox icon={Mail} size="xl" color="default" />

      <Stack gap="xs" align="center">
        <Title level={2}>Check your email</Title>
        <Text size="sm">We sent a verification link to</Text>
        <Text size="sm" weight="semibold" color="primary">
          {email}
        </Text>
      </Stack>

      <Text size="sm" color="tertiary">
        Click the link in the email to verify your account. If you don't see it, check your spam
        folder.
      </Text>

      <Stack gap="sm" fullWidth>
        {error && (
          <Text size="sm" color="error" align="center">
            {error}
          </Text>
        )}

        <Button
          fullWidth
          isLoading={isPending}
          disabled={cooldown > 0}
          onClick={() => void resend()}
        >
          {cooldown > 0 ? `Resend in ${cooldown.toString()}s` : 'Resend email'}
        </Button>

        <Link to={PATHS.garage.list} variant="secondary">
          Skip for now
        </Link>
      </Stack>
    </Stack>
  );
};
