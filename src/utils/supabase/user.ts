import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUser(redirectUrl: string = "/login") {
    const supabase = await createClient();
    const userResponse = await supabase.auth.getUser();
    
    if (userResponse.error) {
        return redirect(redirectUrl);
    }

    return userResponse.data.user;
}
