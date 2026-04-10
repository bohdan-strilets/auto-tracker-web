import type { Locale, User } from '@entities/user';

import type { useForgotPasswordForm } from './use-forgot-password-form';

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

export type ResetPasswordPayload = {
  token: string;
  password: string;
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

// UI component props types
export type ForgotPasswordFormProps = {
  form: ReturnType<typeof useForgotPasswordForm>;
};
