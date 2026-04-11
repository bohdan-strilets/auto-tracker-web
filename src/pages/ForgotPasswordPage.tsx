import { MailCheck } from 'lucide-react';

import { ForgotPasswordForm, useForgotPasswordForm } from '@features/auth';

import { PATHS } from '@shared/lib/router';
import { IconBox, Link, Stack, Text, Title } from '@shared/ui';

export const ForgotPasswordPage = () => {
  const forgotPasswordForm = useForgotPasswordForm();

  if (forgotPasswordForm.isSubmitted) {
    return (
      <Stack gap="lg">
        <Stack gap="xs">
          <IconBox icon={MailCheck} size="lg" color="success" radius="xl" />
          <Title level={2}>Check your email</Title>
          <Text size="sm">
            We sent a password reset link to{' '}
            <Text as="span" size="sm" weight="semibold">
              {forgotPasswordForm.email}
            </Text>
            . Check your inbox and follow the instructions.
          </Text>
        </Stack>

        <Text align="center" size="sm">
          Remember your password? <Link to={PATHS.auth.login}>Sign in</Link>
        </Text>
      </Stack>
    );
  }

  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Title level={2}>Forgot password?</Title>
        <Text size="sm">Enter your email and we'll send you a reset link.</Text>
      </Stack>

      <ForgotPasswordForm form={forgotPasswordForm} />

      <Text align="center" size="sm">
        Remember your password? <Link to={PATHS.auth.login}>Sign in</Link>
      </Text>
    </Stack>
  );
};
