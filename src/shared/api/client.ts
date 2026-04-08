import axios from 'axios';

import { env } from '@shared/config';

import { authInterceptor, errorInterceptor } from './interceptors';

export const apiClient = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

authInterceptor(apiClient);
errorInterceptor(apiClient);
