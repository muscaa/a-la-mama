"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    User,
    ShoppingCart,
    Menu
} from "lucide-react";
import { useIsMobile } from "@/utils/hooks";
import { useState } from "react";
import { useCart } from "@/utils/states";
import Image from "next/image";
import { ROUTES } from "@/utils/config";

interface LinkButtonProps {
    children: React.ReactNode;
    href: string;
    square?: boolean;
    onClick?: () => void;
}

function LinkButton(props: LinkButtonProps) {
    return (
        <Link href={props.href}>
            <Button
                variant="ghost"
                size="none"
                onClick={props.onClick}
                className={`relative w-full h-full min-w-14 min-h-14 font-semibold ${props.square ? "" : "px-6"}`}
            >
                {props.children}
            </Button>
        </Link>
    );
}

export default function NavBar() {
    const isMobile = useIsMobile();
    const [menuOpen, setMenuOpen] = useState(false);
    const cart = useCart();

    const SharedLinkButtons = () => (
        <>
            <LinkButton href={ROUTES.CATALOG} onClick={() => setMenuOpen(false)}>Catalog</LinkButton>
            <LinkButton href={ROUTES.CONTACT} onClick={() => setMenuOpen(false)}>Contact</LinkButton>
        </>
    );

    return (
        <nav className="flex flex-col w-full justify-center items-center bg-davys-gray text-baby-powder relative">
            <div className="flex size-full max-w-6xl justify-between items-center p-2">
                <div className="flex gap-2">
                    <Link href={ROUTES.HOME} onClick={() => setMenuOpen(false)} className="flex justify-center items-center min-w-14 min-h-14 font-semibold px-6">
                        <Image src="/logo.svg" alt="logo" width={64} height={64} className="size-14" />
                    </Link>
                    {
                        isMobile == false &&
                        <SharedLinkButtons />
                    }
                </div>
                {
                    isMobile == true &&
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Button variant="ghost" size="none" onClick={() => setMenuOpen(!menuOpen)} className="min-w-14 min-h-14">
                            <Menu size={32} className="min-w-8 min-h-8" />
                        </Button>
                    </div>
                }
                <div className="flex gap-2">
                    <LinkButton href={ROUTES.CART} square>
                        <ShoppingCart size={32} className="min-w-8 min-h-8" />
                        {
                            cart.size > 0 &&
                            <h6 className="absolute right-1 top-1 h-4 p-1 rounded-full bg-lilac flex justify-center items-center">
                                {cart.size > 99 ? "99+" : cart.size}
                            </h6>
                        }
                    </LinkButton>
                    <LinkButton href={ROUTES.ACCOUNT} square>
                        <User size={32} className="min-w-8 min-h-8" />
                    </LinkButton>
                </div>
            </div>
            {
                isMobile == true && menuOpen &&
                <div className="absolute top-full flex flex-col gap-2 w-full max-w-6xl justify-center p-2 bg-davys-gray border-t border-border">
                    <SharedLinkButtons />
                </div>
            }
        </nav>
    );
}
