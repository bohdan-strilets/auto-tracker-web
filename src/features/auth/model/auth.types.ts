import type { Locale, User } from '@entities/user';

// Response types

export type AuthResponse = {
  user: User;
  accessToken: string;
};

export type RefreshResponse = {
  accessToken: string;
};

// Request payload types

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  locale: Locale;
  timezone: string;
};

// Store types

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
};

export type AuthActions = {
  setAuth: (user: User, accessToken: string) => void;
  clearAuth: () => void;
  setAccessToken: (accessToken: string) => void;
  setInitialized: () => void;
};
