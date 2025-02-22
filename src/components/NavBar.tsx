import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    User,
    ShoppingBasket
} from "lucide-react";

interface LinkButtonProps {
    children: React.ReactNode;
    href: string;
    square?: boolean;
}

function LinkButton(props: LinkButtonProps) {
    return (
        <Link href={props.href}>
            <Button variant="ghost" size="none" className={`relative min-w-14 min-h-14 font-semibold ${props.square ? "" : "px-6"}`}>
                {props.children}
            </Button>
        </Link>
    );
}

export default function NavBar() {
    const cosSize = 300;

    return (
        <nav className="flex w-full justify-center bg-davys-gray text-baby-powder">
            <div className="flex size-full max-w-6xl justify-between items-center p-2">
                <div className="flex gap-2">
                    <LinkButton href="/">Acasa</LinkButton>
                    <LinkButton href="/catalog">Catalog</LinkButton>
                    <LinkButton href="/contact">Contact</LinkButton>
                </div>
                <div className="flex gap-2">
                    <LinkButton href="/cos" square>
                        <ShoppingBasket size={32} className="min-w-8 min-h-8" />
                        <h6 className="absolute right-1 top-1 h-4 p-1 rounded-full bg-lilac flex justify-center items-center">
                            {cosSize > 99 ? "99+" : cosSize}
                        </h6>
                    </LinkButton>
                    <LinkButton href="/cont" square>
                        <User size={32} className="min-w-8 min-h-8" />
                    </LinkButton>
                </div>
            </div>
        </nav>
    );
}
