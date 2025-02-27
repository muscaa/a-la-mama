import { getUser } from "@/utils/supabase/user";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/utils/supabase/actions";

export default async function Account() {
    const user = await getUser();

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Button onClick={signOutAction}>Sign Out</Button>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
}
