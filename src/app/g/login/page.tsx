import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/form/submit-button";
import {
    Message,
    MessageBox
} from "@/components/form/message-box";
import { signInAction } from "@/utils/supabase/actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/config";

export default async function Login(props: { searchParams: Promise<Message> }) {
    const searchParams = await props.searchParams;

    return (
        <div className="flex justify-center items-center h-full">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Intra in contul tau.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">E-mail</Label>
                                <Input name="email" placeholder="email@example.com" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password">Parola</Label>
                                <Input name="password" type="password" placeholder="Parola" required />
                            </div>
                            <MessageBox message={searchParams} />
                            <SubmitButton pendingText="Logging In..." formAction={signInAction}>
                                Login
                            </SubmitButton>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p>
                        Nu ai cont? <Link href={ROUTES.REGISTER}>
                            <Button variant="link" size="none" className="font-semibold">Creeaza unul</Button>
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
