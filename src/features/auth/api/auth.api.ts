import type { User } from '@entities/user';

import { ENDPOINTS, http } from '@shared/api';

import type {
  AuthResponse,
  LoginPayload,
  RefreshResponse,
  RegisterPayload,
  ResetPasswordPayload,
} from '../model/auth.types';

export const authApi = {
  login: (payload: LoginPayload) => {
    return http.post<AuthResponse>(ENDPOINTS.auth.login, payload);
  },

  register: (payload: RegisterPayload) => {
    return http.post<AuthResponse>(ENDPOINTS.auth.register, payload);
  },

  logout: () => {
    return http.post(ENDPOINTS.auth.logout);
  },

  logoutAll: () => {
    return http.post(ENDPOINTS.auth.logoutAll);
  },

  refresh: () => {
    return http.post<RefreshResponse>(ENDPOINTS.auth.refresh);
  },

  me: async (): Promise<User> => {
    return http.get<User>(ENDPOINTS.auth.me);
  },

  resendVerification: async (email: string): Promise<void> => {
    await http.post(ENDPOINTS.auth.resendVerification, { email });
  },

  verifyEmail: async (token: string): Promise<void> => {
    await http.post(ENDPOINTS.auth.verifyEmail, { token });
  },

  forgotPassword: (email: string): Promise<void> => {
    return http.post(ENDPOINTS.auth.forgotPassword, { email });
  },

  resetPassword: (payload: ResetPasswordPayload): Promise<void> => {
    return http.post(ENDPOINTS.auth.resetPassword, payload);
  },
};
