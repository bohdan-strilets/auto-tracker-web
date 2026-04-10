import { useMutation } from '@tanstack/react-query';

import { authApi } from './auth.api';

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (email: string) => authApi.forgotPassword(email),
  });
};
