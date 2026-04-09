import { useState } from 'react';

import { isApiError, getErrorMessage, ERROR_CODES } from '@shared/api';

import { useResendVerificationMutation } from '../api/use-resend-verification.mutation';

const COOLDOWN_SECONDS = 60;

export const useResendVerification = (email: string) => {
  const [cooldown, setCooldown] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const { mutateAsync, isPending } = useResendVerificationMutation();

  const resend = async () => {
    if (cooldown > 0) return;

    setError(null);

    try {
      await mutateAsync(email);
      setCooldown(COOLDOWN_SECONDS);

      const interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      if (isApiError(err)) {
        setError(getErrorMessage(err.code));
        return;
      }
      setError(getErrorMessage(ERROR_CODES.generic.INTERNAL_SERVER_ERROR));
    }
  };

  return { resend, cooldown, isPending, error };
};
