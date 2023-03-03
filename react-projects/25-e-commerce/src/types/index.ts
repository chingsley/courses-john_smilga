export interface IProduct {
  name: string;
  images: [{ url: string; }];
  price: number;
  stock: number;
}

export interface ICartItem {
  id: string;
  color: string;
  amount: number;
  product: IProduct;
  name: string,
  imgage: string,
  price: number,
  max: number,
}

export interface IState {
  cart: ICartItem[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
}