import {
    createServerClient,
    CookieMethodsServer
} from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ROUTES } from "@/utils/config";

export function createCookiesClient(cookies: CookieMethodsServer) {
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies,
        },
    );
}

export async function createClient() {
    const cookieStore = await cookies();

    return createCookiesClient({
        getAll() {
            return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
            try {
                cookiesToSet.forEach(({ name, value, options }) => {
                    cookieStore.set(name, value, options);
                });
            } catch (error) {
                // The `set` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
            }
        },
    });
}

export async function getUser(redirectUrl: string = ROUTES.LOGIN) {
    const supabase = await createClient();
    const userResponse = await supabase.auth.getUser();
    
    if (userResponse.error) {
        return redirect(redirectUrl);
    }

    return userResponse.data.user;
}
