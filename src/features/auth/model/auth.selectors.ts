import { useAuthStore } from './auth.store';

// Selectors
export const useUser = () => {
  return useAuthStore((state) => state.user);
};
export const useAccessToken = () => {
  return useAuthStore((state) => state.accessToken);
};
export const useIsAuthenticated = () => {
  return useAuthStore((state) => state.isAuthenticated);
};
export const useIsInitialized = () => {
  return useAuthStore((state) => state.isInitialized);
};

// Actions
export const useSetAuth = () => {
  return useAuthStore((state) => state.setAuth);
};
export const useClearAuth = () => {
  return useAuthStore((state) => state.clearAuth);
};
export const useSetAccessToken = () => {
  return useAuthStore((state) => state.setAccessToken);
};
export const useSetInitialized = () => {
  return useAuthStore((state) => state.setInitialized);
};
