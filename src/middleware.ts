import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Define the subdomain you want to use
  // If you use a custom domain later, change this to your domain
  const seniorSubdomain = 'senior';
  const customDomain = 'deepinsights.com.br'; // Example

  // Extract the subdomain from hostname
  const currentSubdomain = hostname.split('.')[0];

  // If the user is accessing via the 'senior' subdomain
  if (currentSubdomain === seniorSubdomain) {
    // Rewrite to the leadership page
    // We check if we are not already on the leadership path to avoid infinite loops
    if (!url.pathname.startsWith('/lideranca')) {
      return NextResponse.rewrite(new URL(`/lideranca${url.pathname}`, request.url));
    }
  }

  return NextResponse.next();
}

// Only run middleware on the root path and leadership path
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
