import { useMutation } from '@tanstack/react-query';

import type { LoginPayload } from '../model/auth.types';

import { authApi } from './auth.api';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => authApi.login(payload),
  });
};
