import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // If we're during a build and environment variables are missing, 
    // return a proxy that prevents crashes during static generation.
    return new Proxy({}, {
      get: (target, prop) => {
        if (prop === 'auth') {
          return {
            getSession: async () => ({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
          };
        }
        return () => ({
          select: () => ({
            eq: () => ({ single: async () => ({ data: null, error: null }) }),
            order: () => ({ ascending: async () => ({ data: [], error: null }) }),
            limit: () => async () => ({ data: [], error: null }),
          }),
        });
      }
    });
  }

  return createBrowserClient(url, key);
}
