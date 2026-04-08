import { apiClient } from './client';
import type { PaginatedResponse, RequestOptions } from './types';

export const http = {
  get: async <T>(path: string, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.get<T>(path, options);
    return res.data;
  },

  getPaginated: async <T>(
    path: string,
    options?: RequestOptions,
  ): Promise<PaginatedResponse<T>> => {
    const res = await apiClient.get<PaginatedResponse<T>>(path, options);
    return res.data;
  },

  post: async <T>(path: string, data?: unknown, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.post<T>(path, data, options);
    return res.data;
  },

  put: async <T>(path: string, data?: unknown, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.put<T>(path, data, options);
    return res.data;
  },

  patch: async <T>(path: string, data?: unknown, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.patch<T>(path, data, options);
    return res.data;
  },

  delete: async (path: string, options?: RequestOptions): Promise<void> => {
    await apiClient.delete(path, options);
  },
};
