import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'always';
// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Abundio',
  company: 'Abundio App, LLC',
  locales: ['en', 'fr', 'rw'],
  defaultLocale: 'en',
  localePrefix,
};
