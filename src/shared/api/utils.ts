import { errorMessages, FALLBACK_MESSAGE } from './error-messages';
import type { ErrorResponse } from './types';

export const isApiError = (error: unknown): error is ErrorResponse => {
  return typeof error === 'object' && error !== null && 'code' in error && 'statusCode' in error;
};

export const getErrorMessage = (code: string): string => {
  return errorMessages[code] ?? FALLBACK_MESSAGE;
};
