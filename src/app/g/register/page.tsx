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
import { signUpAction } from "@/utils/supabase/actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/config";

export default async function Register(props: { searchParams: Promise<Message> }) {
    const searchParams = await props.searchParams;

    return (
        <div className="flex justify-center items-center h-full">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>Creaza contul tau.</CardDescription>
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
                            <SubmitButton pendingText="Registering..." formAction={signUpAction}>
                                Register
                            </SubmitButton>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p>
                        Deja ai cont? <Link href={ROUTES.LOGIN}>
                            <Button variant="link" size="none" className="font-semibold">Logheaza-te</Button>
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
