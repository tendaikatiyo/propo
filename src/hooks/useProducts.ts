import { useEffect, useState } from 'react';
import { Product } from '../types/index';
import productsData from '../data/products.json';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const productList = Object.values(productsData) as Product[];
      setProducts(productList);
      setLoading(false);
    } catch (err) {
      setError('Failed to load products');
      setLoading(false);
    }
  }, []);

  return { products, loading, error };
};

export const useProductSearch = (query: string, products: Product[]) => {
  const [results, setResults] = useState<Product[]>(products);

  useEffect(() => {
    if (!query.trim()) {
      setResults(products);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(lowerQuery) ||
        product.barcode.includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
      );
    });

    setResults(filtered);
  }, [query, products]);

  return results;
};

export const getProductByBarcode = (barcode: string, products: Product[]): Product | undefined => {
  return products.find((p) => p.barcode === barcode);
};

export const getCategories = (products: Product[]): string[] => {
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories).sort();
};

export const filterByCategory = (products: Product[], category: string): Product[] => {
  return products.filter((p) => p.category === category);
};
