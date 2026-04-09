import { authApi, useAuthStore } from '@features/auth';

export const initAuth = async (): Promise<void> => {
  try {
    const { accessToken } = await authApi.refresh();
    useAuthStore.getState().setAccessToken(accessToken);
    const user = await authApi.me();
    useAuthStore.getState().setAuth(user, accessToken);
  } catch {
    useAuthStore.getState().clearAuth();
  } finally {
    useAuthStore.getState().setInitialized();
  }
};
