import { useAuthStore } from './auth.store';

export const useUser = () => useAuthStore((state) => state.user);
export const useAccessToken = () => useAuthStore((state) => state.accessToken);
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);

export const useSetAuth = () => useAuthStore((state) => state.setAuth);
export const useClearAuth = () => useAuthStore((state) => state.clearAuth);
