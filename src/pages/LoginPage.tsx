import { LoginForm } from '@features/auth';

import { PATHS } from '@shared/lib/router';
import { Link, Stack, Text, Title } from '@shared/ui';

export const LoginPage = () => {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Title level={2}>Welcome back</Title>
        <Text size="sm">Sign in to your account</Text>
      </Stack>

      <LoginForm />

      <Text align="center" size="sm">
        <Link to={PATHS.auth.forgotPassword}>Forgot your password?</Link>
      </Text>

      <Text align="center" size="sm">
        Don't have an account? <Link to={PATHS.auth.register}>Create one</Link>
      </Text>
    </Stack>
  );
};
