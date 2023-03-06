
export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[],
  company: string;
  description: string;
  category: string;
  shipping: boolean;
  featured: boolean;
}

export interface IProductDetail {
  id: string;
  stock: number;
  price: number;
  shipping: boolean;
  colors: string[];
  category: string,
  images: IProductImage[];
  reviews: number;
  stars: number;
  name: string;
  description: string;
  company: string;
}

export interface IProductsState {
  isSidebarOpen: boolean;
  productsLoading: boolean;
  products_error: boolean;
  products: IProduct[];
  featuredProducts: IProduct[];
  singleProductLoading: boolean;
  singleProductError: boolean;
  singleProduct: IProductDetail | {};
}

interface IProductImage {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: {
      url: string;
      width: number;
      height: number;
    },
    large: {
      url: string;
      width: number;
      height: number;
    },
    full: {
      url: string;
      width: number;
      height: number;
    };
  };
}