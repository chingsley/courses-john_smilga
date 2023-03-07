import { IProduct } from "./products";

export interface IFiltersState {
  allProducts: IProduct[];
  filteredProducts: IProduct[];
  viewType: ViewTypes;
  sort: SortTypes;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    maxPrice: number;
    minPrice: number;
    price: number;
    shipping: boolean;
  };
}

export enum ViewTypes {
  Grid = 'Grid',
  List = 'List',
}

export enum SortTypes {
  PriceAsc = 'PriceAsc',
  PriceDesc = 'PriceDesc',
  NameAsc = 'NameAsc',
  NameDesc = 'NameDesc'
}
