"use client";

import { ShoppingCart } from "phosphor-react";
import { Button } from "../ui/button";

export function Cart() {
  return (
    <Button variant="icon" size="icon" className="relative">
      <ShoppingCart
        weight="fill"
        className="text-brand-yellow-dark"
        size={22}
      />

      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-yellow-dark text-white flex items-center justify-center font-bold text-xs">
        3
      </div>
    </Button>
  );
}
