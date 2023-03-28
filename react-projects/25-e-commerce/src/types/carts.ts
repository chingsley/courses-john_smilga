import { IProductImage } from "./products";

export interface ICartItemProductInfo {
  name: string;
  images: IProductImage[];
  price: number;
  stock: number;
}

export interface ICartItem {
  id: string;
  color: string;
  count: number;
  product: ICartItemProductInfo;
  name: string,
  image: string,
  price: number,
}

export interface ICartState {
  cart: ICartItem[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
}

export enum CartItemCountToggleDirection {
  Inc = 'INCREMEMNT',
  Dec = 'DECREMENT'
}