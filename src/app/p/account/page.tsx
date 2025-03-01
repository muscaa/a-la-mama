import {
    createClient,
    getUser
} from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/utils/supabase/actions";

export default async function Account() {
    const supabase = await createClient();
    const user = await getUser(supabase);

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Button onClick={signOutAction}>Sign Out</Button>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
}
