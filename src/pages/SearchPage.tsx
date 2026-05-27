import React, { useState } from 'react';
import { Product } from '../types/index';
import { SearchBar } from '../components/SearchBar';
import { useProductSearch, getCategories, filterByCategory } from '../hooks/useProducts';

interface SearchPageProps {
  products: Product[];
  onProductClick: (barcode: string) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ products, onProductClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const searchResults = useProductSearch(searchQuery, products);
  const categories = getCategories(products);

  let filtered = searchResults;
  if (selectedCategory) {
    filtered = filterByCategory(searchResults, selectedCategory);
  }

  return (
    <div className="p-4 space-y-4 pb-24">
      <h2 className="font-bricolage text-2xl font-bold text-gray-900">Search Products</h2>
      
      <SearchBar onSearch={setSearchQuery} />
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedCategory('')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedCategory === ''
              ? 'bg-easishop-green text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-easishop-green text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.barcode}
              onClick={() => onProductClick(product.barcode)}
              className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-easishop-green transition-colors"
            >
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{product.category}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">No products found</p>
        )}
      </div>
    </div>
  );
};
