import { useState, useEffect } from 'react';
import './App.css';
import { useProducts, getProductByBarcode } from './hooks/useProducts';
import {
  getUserProfile,
  updateUserProfile,
  createShoppingList,
  addToShoppingList,
  deleteShoppingList,
  isProductWatched,
  addWatchedProduct,
  removeWatchedProduct,
} from './utils/storage';
import { UserProfile } from './types/index';
import { MobileNav } from './components/MobileNav';
import { ExplorePage } from './pages/ExplorePage';
import { SearchPage } from './pages/SearchPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { ProfilePage } from './pages/ProfilePage';
import { ListsPage } from './pages/ListsPage';

function App() {
  const { products } = useProducts();
  const [activeTab, setActiveTab] = useState<'explore' | 'search' | 'lists' | 'profile'>('explore');
  const [profile, setProfile] = useState<UserProfile>(getUserProfile());
  const [selectedBarcode, setSelectedBarcode] = useState<string | null>(null);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    if (selectedBarcode) {
      setIsWatched(isProductWatched(selectedBarcode));
    }
  }, [selectedBarcode]);

  const handleProductClick = (barcode: string) => {
    setSelectedBarcode(barcode);
    setActiveTab('search');
  };

  const handleWatch = (barcode: string) => {
    if (isProductWatched(barcode)) {
      removeWatchedProduct(barcode);
      setIsWatched(false);
    } else {
      addWatchedProduct(barcode);
      setIsWatched(true);
    }
    setProfile(getUserProfile());
  };

  const handleAddToList = (barcode: string) => {
    if (profile.shoppingLists.length === 0) {
      const newList = createShoppingList('My List');
      addToShoppingList(newList.id, barcode);
    } else {
      addToShoppingList(profile.shoppingLists[0].id, barcode);
    }
    setProfile(getUserProfile());
    alert('Added to shopping list!');
  };

  const handleUpdateProfile = (updates: Partial<UserProfile>) => {
    updateUserProfile(updates);
    setProfile(getUserProfile());
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem('easishop_user_profile');
    setProfile(getUserProfile());
    alert('Account deleted. Profile reset to default.');
  };

  const handleCreateList = (name: string) => {
    createShoppingList(name);
    setProfile(getUserProfile());
  };

  const handleDeleteList = (id: string) => {
    deleteShoppingList(id);
    setProfile(getUserProfile());
  };

  const selectedProduct = selectedBarcode ? getProductByBarcode(selectedBarcode, products) : null;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="font-bricolage text-3xl font-bold text-easishop-green">EasiShop</h1>
          <p className="text-gray-600 text-sm">Price comparison made easy</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto md:pb-0 pb-24">
        {activeTab === 'explore' && (
          <ExplorePage products={products} onProductClick={handleProductClick} />
        )}
        {activeTab === 'search' && (
          <SearchPage products={products} onProductClick={handleProductClick} />
        )}
        {activeTab === 'lists' && (
          <ListsPage
            shoppingLists={profile.shoppingLists}
            products={products}
            onCreateList={handleCreateList}
            onDeleteList={handleDeleteList}
          />
        )}
        {activeTab === 'profile' && (
          <ProfilePage
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onDeleteAccount={handleDeleteAccount}
          />
        )}
      </main>

      <aside className="fixed right-0 top-0 hidden md:flex flex-col h-screen w-96 bg-white border-l border-gray-200 overflow-y-auto p-4">
        <h2 className="font-bricolage text-xl font-bold mb-4">Price Comparison</h2>
        <ComparisonPage
          product={selectedProduct || null}
          onWatch={handleWatch}
          onAddToList={handleAddToList}
          isWatched={isWatched}
        />
      </aside>

      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
