import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supbase/middleware';
import { createClient } from '@/lib/supbase/server';

export async function middleware(request: NextRequest) {
    // update user's auth session
    const {data: { user }} = await (await createClient()).auth.getUser();

    if ( !user && request.nextUrl.pathname.startsWith('/profile') ) {
        return Response.redirect(new URL('/auth', request.url));
    }

    if ( user && request.nextUrl.pathname.startsWith('/auth') ) {
        return Response.redirect(new URL('/', request.url));
    }

    // if (

    //     (request.nextUrl.pathname === '/update-password' && request.nextUrl.search.includes('error'))
    //   ) {
    //     // Redirect to home page if the condition is met
    //     return Response.redirect(new URL('/', request.url));
    //   }

    return await updateSession(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
