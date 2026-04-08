import { QueryClient } from '@tanstack/react-query';

import { isApiError } from '@shared/api';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (isApiError(error) && error.statusCode < 500) {
          return false;
        }

        return failureCount < 2;
      },
      staleTime: 1000 * 60 * 5,
    },

    mutations: {
      retry: false,
    },
  },
});
