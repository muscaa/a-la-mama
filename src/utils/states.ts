import { create } from "zustand";

export interface Cart {
    size: number;

    setSize: (size: number) => void;
    increment: () => void;
}

export const useCart = create<Cart>((set) => ({
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
