import type { Locale } from '@entities/user';

const SUPPORTED_LOCALES: Locale[] = ['UK_UA', 'EN_US', 'PL_PL'];

export const detectLocale = (): Locale => {
  const locale = navigator.language.replace('-', '_').toUpperCase();

  return SUPPORTED_LOCALES.includes(locale as Locale) ? (locale as Locale) : 'EN_US';
};
