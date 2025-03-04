"use client";

import {
    Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    title: string;
    image: string;
    price: string;
}

export default function ProductCard(props: ProductCardProps) {
    return (
        <Card className="flex flex-col w-72 overflow-hidden gap-2">
            <Link href="/" className="flex flex-col group">
                <Image src={props.image} alt="cake" width={256} height={256} className="size-full" />
                <div className="flex flex-col justify-center items-center p-2 pb-0">
                    <h4 className="transition-colors group-hover:text-lilac">{props.title}</h4>
                    <p>{props.price}</p>
                </div>
            </Link>
            <div className="flex flex-col justify-center items-center p-2 pt-0">
                <Button>Adauga in cos</Button>
            </div>
        </Card>
    );
}
