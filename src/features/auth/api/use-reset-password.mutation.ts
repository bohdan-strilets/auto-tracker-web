import { useMutation } from '@tanstack/react-query';

import type { ResetPasswordPayload } from '../model/auth.types';

import { authApi } from './auth.api';

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ResetPasswordPayload) => authApi.resetPassword(payload),
  });
};
