import { create } from 'zustand';

export interface Item {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: number;
  description?: string;
}

interface StoreState {
  selectedItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  clearItems: () => void;
  getTotalItems: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  selectedItems: [],
  addItem: (item) => {
    const currentItems = get().selectedItems;
    // Check if item already exists
    if (!currentItems.find(i => i.id === item.id)) {
      set({ selectedItems: [...currentItems, item] });
    }
  },
  removeItem: (itemId) => {
    set({ selectedItems: get().selectedItems.filter(item => item.id !== itemId) });
  },
  clearItems: () => {
    set({ selectedItems: [] });
  },
  getTotalItems: () => {
    return get().selectedItems.length;
  },
}));

