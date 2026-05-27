import React from 'react';
import { Product } from '../types/index';

interface ExplorePageProps {
  products: Product[];
  onProductClick: (barcode: string) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({ products, onProductClick }) => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-bricolage text-3xl font-bold text-easishop-green">EasiShop</h1>
      <p className="text-gray-600">Explore recommended products</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.barcode}
            onClick={() => onProductClick(product.barcode)}
            className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{product.category}</p>
            <p className="text-sm text-gray-600 mt-2">
              From R{Math.min(...[product.pnp, product.chk, product.srt, product.woo]
                .filter((p) => p)
                .map((p) => parseFloat(p!)))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
