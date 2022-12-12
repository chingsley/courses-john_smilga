import { useState, useEffect, useCallback } from 'react';

export function useFetch(url: string) {
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
