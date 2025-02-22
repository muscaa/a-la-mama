"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    User,
    ShoppingBasket,
    Menu
} from "lucide-react";
import { useIsMobile } from "@/hooks/Main";
import { useState } from "react";

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
    
    const cosSize = 300;

    const SharedLinkButtons = () => (
        <>
            <LinkButton href="/catalog" onClick={() => setMenuOpen(false)}>Catalog</LinkButton>
            <LinkButton href="/contact" onClick={() => setMenuOpen(false)}>Contact</LinkButton>
        </>
    );

    return (
        <nav className="flex flex-col w-full justify-center items-center bg-davys-gray text-baby-powder relative">
            <div className="flex size-full max-w-6xl justify-between items-center p-2">
                <div className="flex gap-2">
                    <LinkButton href="/">LOGO</LinkButton>
                    {
                        !isMobile &&
                        <SharedLinkButtons />
                    }
                </div>
                {
                    isMobile &&
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Button variant="ghost" size="none" onClick={() => setMenuOpen(!menuOpen)} className="min-w-14 min-h-14">
                            <Menu size={32} className="min-w-8 min-h-8" />
                        </Button>
                    </div>
                }
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
            {
                isMobile && menuOpen &&
                <div className="absolute top-full flex flex-col gap-2 w-full max-w-6xl justify-center p-2 bg-davys-gray border-t border-border">
                    <SharedLinkButtons />
                </div>
            }
        </nav>
    );
}
