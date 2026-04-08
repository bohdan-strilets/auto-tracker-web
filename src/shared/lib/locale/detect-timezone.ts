export const detectTimezone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
