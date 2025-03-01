"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/utils/states";

export default function Cart() {
    const cart = useCart();

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h3>Cart {cart.size}</h3>
            <Button onClick={cart.increment}>increment</Button>
        </div>
    );
}
