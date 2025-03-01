"use server";

import { createClient } from "@/utils/supabase/server";

export async function updateCartSize(userId: string, newSize: number) {
    if (!userId) return { error: "User not authenticated" };

    const supabase = await createClient();

    const { error } = await supabase
        .from("carts")
        .upsert([{ id: userId, size: newSize }], { onConflict: "id" });

    if (error) {
        console.error("Update cart error:", error);
        return { error: error.message };
    }

    return { success: true };
}
