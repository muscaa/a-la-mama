import { createClient, getUser } from "@/utils/supabase/server";
import CartControls from "./cart-controls";

export default async function Cart() {
    const supabase = await createClient();
    const user = await getUser(supabase);

    const { data, error } = await supabase
        .from("carts")
        .select("size")
        .eq("id", user.id)
        .single();

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <CartControls userId={user.id} currentSize={data?.size || 0} />
        </div>
    );
}
