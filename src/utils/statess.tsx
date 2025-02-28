import { create } from "zustand";

export interface Basket {
    size: number;

    setSize: (size: number) => void;
    increment: () => void;
}

export const useBasket = create<Basket>((set) => ({
    size: 0,

    setSize(size: number) {
        set({
            size: size
        });
    },
    increment() {
        set((state) => ({
            size: state.size + 1
        }));
    },
}));
