export const getFallbackText = (fallback?: string): string => {
  if (!fallback) return '?';

  const parts = fallback.trim().split(' ');

  if (parts.length === 1) return parts[0][0].toUpperCase();

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
