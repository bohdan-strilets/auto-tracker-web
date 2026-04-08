import { ApiError } from './api-error';
import { errorMessages, FALLBACK_MESSAGE } from './error-messages';

export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError;
};

export const getErrorMessage = (code: string): string => {
  return errorMessages[code] ?? FALLBACK_MESSAGE;
};
