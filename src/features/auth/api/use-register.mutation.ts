import { useMutation } from '@tanstack/react-query';

import type { RegisterPayload } from '../model/auth.types';

import { authApi } from './auth.api';

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => authApi.register(payload),
  });
};
