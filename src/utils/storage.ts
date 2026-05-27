import { UserProfile, ShoppingList } from '../types/index';

const USER_PROFILE_KEY = 'easishop_user_profile';
const DEFAULT_PROFILE: UserProfile = {
  name: 'Guest User',
  email: 'guest@easishop.com',
  watchedProducts: [],
  shoppingLists: [],
  alerts: true,
};

export const getUserProfile = (): UserProfile => {
  try {
    const stored = localStorage.getItem(USER_PROFILE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_PROFILE;
  } catch {
    return DEFAULT_PROFILE;
  }
};

export const saveUserProfile = (profile: UserProfile): void => {
  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
};

export const updateUserProfile = (updates: Partial<UserProfile>): UserProfile => {
  const profile = getUserProfile();
  const updated = { ...profile, ...updates };
  saveUserProfile(updated);
  return updated;
};

export const addWatchedProduct = (barcode: string): void => {
  const profile = getUserProfile();
  if (!profile.watchedProducts.includes(barcode)) {
    profile.watchedProducts.push(barcode);
    saveUserProfile(profile);
  }
};

export const removeWatchedProduct = (barcode: string): void => {
  const profile = getUserProfile();
  profile.watchedProducts = profile.watchedProducts.filter((b) => b !== barcode);
  saveUserProfile(profile);
};

export const isProductWatched = (barcode: string): boolean => {
  const profile = getUserProfile();
  return profile.watchedProducts.includes(barcode);
};

export const createShoppingList = (name: string): ShoppingList => {
  const profile = getUserProfile();
  const newList: ShoppingList = {
    id: Date.now().toString(),
    name,
    items: [],
    createdAt: new Date().toISOString(),
  };
  profile.shoppingLists.push(newList);
  saveUserProfile(profile);
  return newList;
};

export const addToShoppingList = (listId: string, barcode: string): void => {
  const profile = getUserProfile();
  const list = profile.shoppingLists.find((l) => l.id === listId);
  if (list && !list.items.includes(barcode)) {
    list.items.push(barcode);
    saveUserProfile(profile);
  }
};

export const deleteShoppingList = (listId: string): void => {
  const profile = getUserProfile();
  profile.shoppingLists = profile.shoppingLists.filter((l) => l.id !== listId);
  saveUserProfile(profile);
};

export const calculatePriceDifference = (currentPrice: string | null, prevPrice: string | null): { amount: number; percent: number; direction: 'up' | 'down' | 'none' } | null => {
  if (!currentPrice || !prevPrice) return null;
  
  const current = parseFloat(currentPrice);
  const prev = parseFloat(prevPrice);
  
  if (isNaN(current) || isNaN(prev)) return null;
  
  const amount = current - prev;
  const percent = (amount / prev) * 100;
  const direction = amount > 0 ? 'up' : amount < 0 ? 'down' : 'none';
  
  return { amount: Math.abs(amount), percent: Math.abs(percent), direction };
};
