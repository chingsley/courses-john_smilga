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
    price: number;
    shipping: boolean;
  };
}

export enum ViewTypes {
  Grid = 'Grid',
  List = 'List',
}

export enum SortTypes {
  ByPriceAsc = 'ByPriceAsc',
  ByPriceDesc = 'ByPriceDesc',
  ByNameAsc = 'ByNameAsc',
  SortByNameDesc = 'ByNameDesc'
}
