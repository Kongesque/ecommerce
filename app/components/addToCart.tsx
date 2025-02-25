"use client"

import { Button } from "@/components/ui/button";
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from "@/app/lib/sanity";
import { id } from "date-fns/locale";

export interface ProductCart {
    name: string,
    description: string,
    price: number,
    currency: string,
    image: any,
}

export default function AddToCart({name, description, price, currency, image}: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart()
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: 'asdasd',
    }

    return (
        <Button 
            onClick={() => {addItem(product), handleCartClick()}}
        >
            Add to Cart
        </Button>
    )
}