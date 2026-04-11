import { CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useIsAuthenticated, useVerifyEmail } from '@features/auth';

import { PATHS } from '@shared/lib/router';
import { Button, IconBox, Link, Spinner, Stack, Text, Title } from '@shared/ui';

export const VerifyEmailPage = () => {
  const { status, errorMessage } = useVerifyEmail();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  if (status === 'loading') {
    return (
      <Stack gap="md" align="center" className="max-w-sm mx-auto text-center">
        <Spinner size="md" />
        <Text size="sm">Verifying your email...</Text>
      </Stack>
    );
  }

  if (status === 'success') {
    return (
      <Stack gap="lg" align="center" className="max-w-sm mx-auto text-center">
        <IconBox icon={CheckCircle} size="xl" color="success" />

        <Stack gap="xs" align="center">
          <Title level={2}>Email verified</Title>
          <Text size="sm">
            Your email has been successfully verified. You can now use all features.
          </Text>
        </Stack>

        <Button
          fullWidth
          onClick={() => void navigate(isAuthenticated ? PATHS.garage.list : PATHS.auth.login)}
        >
          {isAuthenticated ? 'Go to app' : 'Sign in'}
        </Button>
      </Stack>
    );
  }

  return (
    <Stack gap="lg" align="center" className="max-w-sm mx-auto text-center">
      <IconBox icon={XCircle} size="xl" color="error" />

      <Stack gap="xs" align="center">
        <Title level={2}>Verification failed</Title>
        <Text size="sm" className="text-error">
          {errorMessage}
        </Text>
      </Stack>

      <Stack gap="sm" fullWidth>
        <Link to={PATHS.verifyEmailNotice}>Resend verification email</Link>
        <Link to={PATHS.auth.login} variant="secondary">
          Back to login
        </Link>
      </Stack>
    </Stack>
  );
};
