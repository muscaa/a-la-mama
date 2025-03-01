export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function MessageBox({ message }: { message: Message }) {
    if (Object.keys(message).length === 0) return null;

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
