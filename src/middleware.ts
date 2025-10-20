import type { NextFetchEvent, NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './lib/I18nRouting';

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(
  request: NextRequest,
  _: NextFetchEvent,
) {
  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/_next`, `/_vercel` or `monitoring`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!_next|_vercel|monitoring|.*\\..*).*)',
  runtime: 'nodejs',
};
