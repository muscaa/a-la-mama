"use client";

import { useTransition } from "react";
import { updateCartSize } from "./actions";
import { useCart } from "@/utils/states";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function CartControls({ userId, currentSize }: { userId: string, currentSize: number }) {
    const cart = useCart();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        cart.setSize(currentSize);
    }, [currentSize]);

    const changeSize = (amount: number) => {
        startTransition(async () => {
            const newSize = cart.size + amount;
            const result = await updateCartSize(userId, newSize);
            if (!result.error) cart.setSize(newSize);
        });
    };

    return (
        <>
            <h3>Cart {cart.size || 0}</h3>
            <div className="flex gap-2 items-center">
                <Button onClick={() => changeSize(-1)} disabled={cart.size <= 0 || isPending}>
                    -
                </Button>
                <Button onClick={() => changeSize(1)} disabled={isPending}>
                    +
                </Button>
            </div>
        </>
    );
}
