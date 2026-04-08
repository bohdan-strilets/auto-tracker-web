export const clampValue = (value: number, min?: number, max?: number): number => {
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;

  return value;
};

export const decrement = (value: number, step: number, min?: number): number | null => {
  const next = value - step;
  if (min !== undefined && next < min) return null;

  return next;
};

export const increment = (value: number, step: number, max?: number): number | null => {
  const next = value + step;
  if (max !== undefined && next > max) return null;

  return next;
};

export const parseInputValue = (raw: string): number | null => {
  const parsed = parseFloat(raw);
  return isNaN(parsed) ? null : parsed;
};
