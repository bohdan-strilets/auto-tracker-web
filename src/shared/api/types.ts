// ─── Error types ─────────────────────────────────────────────

export type ErrorDetail = {
  field: string;
  code: string;
};

export type ErrorResponse = {
  statusCode: number;
  code: string;
  details: ErrorDetail[] | null;
};

// ─── Success response types ───────────────────────────────────

export type PaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};

// ─── Request options ──────────────────────────────────────────

export type RequestOptions = {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  signal?: AbortSignal;
};
