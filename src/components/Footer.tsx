import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center min-h-20 bg-alabaster">
            <h5>© {new Date().getFullYear()} A La Mama</h5>
            <h5>
                by <Link href="https://github.com/muscaa" target="_blank">
                    <Button variant="link" size="none" className="font-semibold text-sm">muscaa</Button>
                </Link>
            </h5>
        </footer>
    );
}
