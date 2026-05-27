import React from 'react';
import { Product, STORES, Store } from '../types/index';
import { PriceBadge } from './PriceBadge';

interface PriceComparisonProps {
  product: Product;
}

export const PriceComparison: React.FC<PriceComparisonProps> = ({ product }) => {
  const stores: Store[] = ['pnp', 'chk', 'srt', 'woo', 'dsc'];

  const storeEntries = stores
    .map((store) => {
      const price = product[store];
      const prevPrice = product[`${store}_prev` as keyof Product];
      return { store, price: price as string | null, prevPrice: prevPrice as string | null };
    })
    .filter((entry) => entry.price !== null);

  const lowestPrice = Math.min(
    ...storeEntries
      .filter((e) => e.price)
      .map((e) => parseFloat(e.price || '0'))
  );

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
      <h3 className="font-bricolage text-lg font-bold text-gray-900">{product.name}</h3>
      <p className="text-xs text-gray-500">Barcode: {product.barcode}</p>
      <div className="space-y-2">
        {storeEntries.map((entry) => {
          const isLowest = parseFloat(entry.price || '0') === lowestPrice;
          return (
            <div
              key={entry.store}
              className={`flex justify-between items-center p-2 rounded-md border ${
                isLowest
                  ? 'border-easishop-green/30 bg-easishop-green/5'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              <span className="font-semibold text-gray-700 min-w-24">{STORES[entry.store]}</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">R{entry.price}</span>
                <PriceBadge currentPrice={entry.price} previousPrice={entry.prevPrice} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
