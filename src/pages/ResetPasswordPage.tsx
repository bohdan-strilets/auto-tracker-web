import { ResetPasswordForm } from '@features/auth';

import { Stack, Text, Title } from '@shared/ui';

export const ResetPasswordPage = () => {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Title level={2}>Reset password</Title>
        <Text size="sm">Enter your new password below.</Text>
      </Stack>

      <ResetPasswordForm />
    </Stack>
  );
};
