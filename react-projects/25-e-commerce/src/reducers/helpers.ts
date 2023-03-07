import { IProduct } from '../types/products';
import { SortTypes, IFiltersState } from './../types/filters';
export const sortProducts = (sortType: SortTypes, [...products]: IProduct[]) => {
  switch (sortType) {
    case SortTypes.PriceAsc: {
      return products.sort((a, b) => a.price - b.price);
    }
    case SortTypes.PriceDesc: {
      return products.sort((a, b) => b.price - a.price);
    }
    case SortTypes.NameAsc: {
      return products.sort((a, b) => a.name.localeCompare(b.name));
    }
    case SortTypes.NameDesc: {
      return products.sort((a, b) => b.name.localeCompare(a.name));
    }
    default: {
      return products;
    }
  }
};

export const filterProducts = (filters: IFiltersState["filters"], products: IProduct[]) => {
  const { text, category, company, price, color, shipping } = filters;
  let filteredProducts = [...products];
  if (text) {
    const byText = (product: IProduct) => product.name.toLowerCase().startsWith(text);
    filteredProducts = filteredProducts.filter(byText);
  }
  if (category !== 'all') {
    const byCategory = (product: IProduct) => product.category === category;
    filteredProducts = filteredProducts.filter(byCategory);
  }
  if (company !== 'all') {
    const byCompany = (product: IProduct) => product.company === company;
    filteredProducts = filteredProducts.filter(byCompany);
  }
  if (color !== 'all') {
    const byColor = (prod: IProduct) => prod.colors.find(c => c === color);
    filteredProducts = filteredProducts.filter(byColor);
  }
  if (price) {
    const byPrice = (prod: IProduct) => prod.price <= price;
    filteredProducts = filteredProducts.filter(byPrice);
  }
  if (shipping) {
    const byShipping = (prod: IProduct) => prod.shipping === true;
    filteredProducts = filteredProducts.filter(byShipping);
  }

  return filteredProducts;
};