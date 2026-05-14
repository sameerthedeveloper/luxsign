import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function updateSession(request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  if (!url || !key) {
    return response;
  }

  const supabase = createServerClient(url, key, {
    global: {
      fetch: (url, options) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timeoutId));
      },
    },
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
        response = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // This will refresh session if expired
  await supabase.auth.getUser();

  return response;
}
