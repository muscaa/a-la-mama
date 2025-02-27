"use client";

import { Button } from "@/components/ui/button";
import { useBasket } from "@/utils/States";

export default function Basket() {
    const basket = useBasket();

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h3>Basket {basket.size}</h3>
            <Button onClick={basket.increment}>increment</Button>
        </div>
    );
}
