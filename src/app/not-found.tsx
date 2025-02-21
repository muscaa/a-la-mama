import * as React from "react";
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Button variant="outline">
                <MailOpen /> Login with Email
            </Button>
        </div>
    );
}
