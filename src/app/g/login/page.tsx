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
import { SubmitButton } from "./SubmitButton";
import { signInAction } from "@/utils/supabase/actions";

type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
    return (
        <div className="flex flex-col gap-2 w-full max-w-md text-sm">
            {"success" in message && (
                <p className="text-foreground border-l-2 border-foreground px-4">
                    {message.success}
                </p>
            )}
            {"error" in message && (
                <p className="text-destructive border-l-2 border-destructive px-4">
                    {message.error}
                </p>
            )}
            {"message" in message && (
                <p className="text-foreground border-l-2 px-4">{message.message}</p>
            )}
        </div>
    );
}

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
                            <SubmitButton pendingText="Logging In..." formAction={signInAction}>
                                Login
                            </SubmitButton>
                            <FormMessage message={searchParams} />
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
