"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();
  

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex overflow-y-auto">
                <ul className="-my-6 divide-y divide-gray-200"> 
                    {cartCount === 0 ? (
                        <h1 className="py-6">You don't have any items</h1>
                    ) : (
                        <h1 className="py-6">Hey, you have some items</h1>
                    )}
                </ul>

            </div>

        </div>

      </SheetContent>
    </Sheet>
  );
}