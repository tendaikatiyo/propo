import React, { useState } from 'react';
import { Product, ShoppingList } from '../types/index';

interface ListsPageProps {
  shoppingLists: ShoppingList[];
  products: Product[];
  onCreateList: (name: string) => void;
  onDeleteList: (id: string) => void;
}

export const ListsPage: React.FC<ListsPageProps> = ({
  shoppingLists,
  products,
  onCreateList,
  onDeleteList,
}) => {
  const [newListName, setNewListName] = useState('');

  const handleCreateList = () => {
    if (newListName.trim()) {
      onCreateList(newListName);
      setNewListName('');
    }
  };

  const getProductName = (barcode: string) => {
    return products.find((p) => p.barcode === barcode)?.name || 'Unknown Product';
  };

  return (
    <div className="p-4 space-y-4 pb-24">
      <h2 className="font-bricolage text-2xl font-bold text-gray-900">Shopping Lists</h2>

      <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="New list name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-easishop-green"
          onKeyPress={(e) => e.key === 'Enter' && handleCreateList()}
        />
        <button
          onClick={handleCreateList}
          className="w-full px-4 py-2 bg-easishop-green text-white rounded-lg font-semibold hover:opacity-90"
        >
          Create List
        </button>
      </div>

      <div className="space-y-3">
        {shoppingLists.length > 0 ? (
          shoppingLists.map((list) => (
            <div
              key={list.id}
              className="bg-white border border-gray-200 rounded-lg p-4 space-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{list.name}</h3>
                  <p className="text-xs text-gray-500">{list.items.length} items</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm('Delete this list?')) {
                      onDeleteList(list.id);
                    }
                  }}
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  ✕
                </button>
              </div>
              {list.items.length > 0 && (
                <div className="space-y-1">
                  {list.items.map((barcode) => (
                    <p key={barcode} className="text-sm text-gray-700">
                      • {getProductName(barcode)}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">No shopping lists yet</p>
        )}
      </div>
    </div>
  );
};
