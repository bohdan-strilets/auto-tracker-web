import { create } from 'zustand';

import type { AuthActions, AuthState } from './auth.types';

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,

  setAuth: (user, accessToken) => {
    set({ user, accessToken, isAuthenticated: true });
  },
  clearAuth: () => {
    set({ user: null, accessToken: null, isAuthenticated: false });
  },
}));
