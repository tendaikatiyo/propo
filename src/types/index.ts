export interface Product {
  name: string;
  barcode: string;
  category: string;
  pnp: string | null;
  pnp_prev: string | null;
  chk: string | null;
  chk_prev: string | null;
  srt: string | null;
  srt_prev: string | null;
  woo: string | null;
  woo_prev: string | null;
  dsc: string | null;
}

export interface ShoppingList {
  id: string;
  name: string;
  items: string[]; // barcodes
  createdAt: string;
}

export interface UserProfile {
  name: string;
  email: string;
  watchedProducts: string[]; // barcodes
  shoppingLists: ShoppingList[];
  alerts: boolean;
}

export type Store = 'pnp' | 'chk' | 'srt' | 'woo' | 'dsc';

export const STORES: Record<Store, string> = {
  pnp: 'Pick n Pay',
  chk: 'Checkers',
  srt: 'Shoprite',
  woo: 'Woolworths',
  dsc: 'Dischem',
};
