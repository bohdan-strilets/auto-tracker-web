import { useMutation } from '@tanstack/react-query';

import { authApi } from './auth.api';

export const useResendVerificationMutation = () => {
  return useMutation({
    mutationFn: (email: string) => authApi.resendVerification(email),
  });
};
