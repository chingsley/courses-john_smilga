import { useState, useEffect, useCallback } from 'react';

export interface IProduct {
  image?: { url: string; };
  name: string;
  price: number;
  id: string;
}

export interface IUseFetchData {
  loading: boolean;
  products: any[];
}

export function useFetch(url: string): IUseFetchData {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState([]);
  const getProducts = useCallback(async () => {
    setLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setProducts(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { loading, products };
}
