import { StaticImageData } from "next/image"

export type Cart = {
   id: string
   name: string
   price: number
   quantity: number;
}

export type CartList = Cart[];