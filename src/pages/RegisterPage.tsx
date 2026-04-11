import { RegisterForm } from '@features/auth';

import { PATHS } from '@shared/lib/router';
import { Title, Text, Link, Stack } from '@shared/ui';

export const RegisterPage = () => {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Title level={2}>Create an account</Title>
        <Text size="sm">Start tracking your vehicles today</Text>
      </Stack>

      <RegisterForm />

      <Text align="center" size="sm">
        Already have an account? <Link to={PATHS.auth.login}>Sign in</Link>
      </Text>
    </Stack>
  );
};
