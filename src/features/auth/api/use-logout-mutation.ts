import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '@shared/router';

import { useClearAuth } from '../model';

import { authApi } from './auth.api';

export const useLogoutMutation = () => {
  const clearAuth = useClearAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.logout,
    onSettled: () => {
      clearAuth();
      void navigate(PATHS.auth.login, { replace: true });
    },
  });
};
