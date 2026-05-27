import React from 'react';
import { Product } from '../types/index';
import { PriceComparison } from '../components/PriceComparison';

interface ComparisonPageProps {
  product: Product | null;
  onWatch: (barcode: string) => void;
  onAddToList: (barcode: string) => void;
  isWatched: boolean;
}

export const ComparisonPage: React.FC<ComparisonPageProps> = ({
  product,
  onWatch,
  onAddToList,
  isWatched,
}) => {
  if (!product) {
    return <div className="p-4 text-center text-gray-500">Select a product to compare</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bricolage text-2xl font-bold text-gray-900">Price Comparison</h2>
      
      <PriceComparison product={product} />

      <div className="flex gap-2">
        <button
          onClick={() => onWatch(product.barcode)}
          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
            isWatched
              ? 'bg-easishop-green text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {isWatched ? '👁️ Watched' : '👁️ Watch'}
        </button>
        <button
          onClick={() => onAddToList(product.barcode)}
          className="flex-1 px-4 py-2 bg-easishop-green text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          📋 Add to List
        </button>
      </div>
    </div>
  );
};
