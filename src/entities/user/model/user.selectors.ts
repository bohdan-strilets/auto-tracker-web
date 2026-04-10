import type { User } from './user.types';

export const getUserFullName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};

export const getUserInitials = (user: User): string => {
  return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
};

export const getUserDisplayEmail = (user: User): string => {
  return user.email;
};

export const isUserVerified = (user: User): boolean => {
  return user.emailVerifiedAt !== null;
};
