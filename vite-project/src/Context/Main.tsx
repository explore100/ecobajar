// src/Context/Main.ts

import { create } from "zustand";
import { Vege } from "../Types/Types";

interface CartState {
  cartItems: Vege[];
  coupon: string | null;
  discount: number;
  addToCart: (item: Vege) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  totalPrice: () => number;
  applyCoupon: (code: string) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  coupon: null,
  discount: 0,

  addToCart: (item) => {
    const existingItem = get().cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      set((state) => ({
        cartItems: state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }));
    } else {
      set((state) => ({
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      }));
    }
  },

  updateQuantity: (id, delta) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  totalPrice: () => {
    return get().cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
  applyCoupon: (code) => {
    const validCoupons: Record<string, number> = {
      SAVE10: 10,
      SAVE20: 20,
      FREESHIP: 0,
    };

    if (validCoupons[code]) {
      set({ coupon: code, discount: validCoupons[code] });
    } else {
      set({ coupon: null, discount: 0 });
    }
  },
}));
