import type { ErrorDetail, ErrorResponse } from './types';

export class ApiError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly details: ErrorDetail[] | null;

  constructor(response: ErrorResponse) {
    super(response.code);
    this.name = 'ApiError';
    this.code = response.code;
    this.statusCode = response.statusCode;
    this.details = response.details;
  }
}
