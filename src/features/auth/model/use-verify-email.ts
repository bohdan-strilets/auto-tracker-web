import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { isApiError, getErrorMessage, ERROR_CODES } from '@shared/api';

import { authApi } from '../api';

export const useVerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const { isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ['verify-email', token],
    queryFn: async () => {
      if (!token) {
        return Promise.reject(new Error(ERROR_CODES.token.TOKEN_NOT_FOUND));
      }

      await authApi.verifyEmail(token);
      return null;
    },
    enabled: !!token,
    retry: false,
    staleTime: Infinity,
  });

  const errorMessage = (() => {
    if (!token) return getErrorMessage(ERROR_CODES.token.TOKEN_NOT_FOUND);
    if (isError) {
      return isApiError(error)
        ? getErrorMessage(error.code)
        : getErrorMessage(ERROR_CODES.generic.INTERNAL_SERVER_ERROR);
    }
    return null;
  })();

  const status = isLoading ? 'loading' : isSuccess ? 'success' : 'error';

  return { status, errorMessage };
};
