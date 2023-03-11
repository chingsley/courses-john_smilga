export interface IProduct {
  name: string;
  images: [{ url: string; }];
  price: number;
  stock: number;
}

export interface ICartItem {
  id: string;
  color: string;
  count: number;
  product: IProduct;
  name: string,
  image: string,
  price: number,
  totalStockCount: number,
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