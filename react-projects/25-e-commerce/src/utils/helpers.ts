import { IProduct } from './../types/products';

export const formatPrice = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};


export const getUniqueValues = (data: IProduct[], type: string) => {
  // let unique = data.map((item) => item[type as keyof typeof item]); // or
  let unique = data.map((item) => {
    return item[type as keyof IProduct];
  });
  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...Array.from(new Set(unique))];
};
