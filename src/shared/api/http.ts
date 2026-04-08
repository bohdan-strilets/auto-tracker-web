import { apiClient } from './client';
import type { ApiResponse, PaginatedResponse, RequestOptions } from './types';

export const http = {
  get: async <T>(path: string, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.get<ApiResponse<T>>(path, options);
    return res.data.data;
  },

  getPaginated: async <T>(
    path: string,
    options?: RequestOptions,
  ): Promise<PaginatedResponse<T>> => {
    const res = await apiClient.get<PaginatedResponse<T>>(path, options);
    return res.data;
  },

  post: async <T>(path: string, data?: unknown, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.post<ApiResponse<T>>(path, data, options);
    return res.data.data;
  },

  put: async <T>(path: string, data?: unknown, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.put<ApiResponse<T>>(path, data, options);
    return res.data.data;
  },

  patch: async <T>(path: string, data?: unknown, options?: RequestOptions): Promise<T> => {
    const res = await apiClient.patch<ApiResponse<T>>(path, data, options);
    return res.data.data;
  },

  delete: async (path: string, options?: RequestOptions): Promise<void> => {
    await apiClient.delete(path, options);
  },
};
