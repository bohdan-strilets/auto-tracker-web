export type UserStatus = 'ACTIVE' | 'SUSPENDED' | 'DELETED';
export type RegistrationSource = 'EMAIL' | 'GOOGLE' | 'APPLE';
export type Locale = 'UK_UA' | 'EN_US' | 'PL_PL';

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: UserStatus;
  emailVerified: boolean;
  emailVerifiedAt: Date | null;
  registrationSource: RegistrationSource;
  locale: Locale;
  timezone: string;
  lastLoginAt: Date;
  createdAt: Date;
};
