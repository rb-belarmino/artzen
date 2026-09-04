import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Permite que a rota /expirado seja acessada normalmente
  if (pathname === '/expirado') {
    return NextResponse.next();
  }

  const expirationDateEnv = process.env.EXPIRATION_DATE;
  if (expirationDateEnv) {
    const expirationDate = new Date(expirationDateEnv);
    const now = new Date();

    // Se a data atual for maior que a data limite definida
    if (!isNaN(expirationDate.getTime()) && now > expirationDate) {
      const url = request.nextUrl.clone();
      url.pathname = '/expirado';
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|opengraph-image|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
