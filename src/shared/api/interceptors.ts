import type { AxiosInstance, AxiosError } from 'axios';

import { router } from '@app/router';

import { ApiError } from './api-error';
import type { ErrorResponse } from './types';

export const authInterceptor = (client: AxiosInstance): void => {
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      // logout user if 401 is returned and we're not already on the login page

      if (error.response?.status === 401) {
        void router.navigate('/auth/login', { replace: true });
      }

      return Promise.reject(error);
    },
  );
};

export const errorInterceptor = (client: AxiosInstance): void => {
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponse>) => {
      const data = error.response?.data;

      if (data?.code) {
        return Promise.reject(new ApiError(data));
      }

      return Promise.reject(
        new ApiError({
          statusCode: 0,
          code: 'NETWORK_ERROR',
          details: null,
        }),
      );
    },
  );
};
