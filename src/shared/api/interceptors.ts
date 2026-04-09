import type { AxiosInstance, AxiosError } from 'axios';

import { router } from '@app/router';

import { useAuthStore } from '@features/auth';

import { PATHS } from '@shared/router';

import { ApiError } from './api-error';
import { ENDPOINTS } from './endpoints';
import type { ErrorResponse } from './types';

export const tokenInterceptor = (client: AxiosInstance): void => {
  client.interceptors.request.use((config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });
};

export const authInterceptor = (client: AxiosInstance): void => {
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const refreshEndpoint = ENDPOINTS.auth.refresh;
      const isRefreshRequest = error.config?.url?.includes(refreshEndpoint);

      if (error.response?.status === 401 && !isRefreshRequest) {
        useAuthStore.getState().clearAuth();
        void router.navigate(PATHS.auth.login, { replace: true });
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
