import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Equipment } from '../data/equipments';

export interface CartItem {
  equipment: Equipment;
  quantity: number;
  startDate: string;
  endDate: string;
}

export interface Filters {
  category: string[];
  priceRange: [number, number];
  ageSuitability: string[];
  equipmentAge: string[];
  condition: string[];
  city: string[];
  rating: number;
  searchQuery: string;
}

interface Store {
  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (equipmentId: string) => void;
  updateCartItem: (equipmentId: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  
  // Filters
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
  
  // UI State
  isFiltersOpen: boolean;
  setIsFiltersOpen: (open: boolean) => void;
}

const defaultFilters: Filters = {
  category: [],
  priceRange: [0, 500],
  ageSuitability: [],
  equipmentAge: [],
  condition: [],
  city: [],
  rating: 0,
  searchQuery: '',
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      addToCart: (item) => {
        const { cart } = get();
        const existingItem = cart.find(cartItem => cartItem.equipment.id === item.equipment.id);
        
        if (existingItem) {
          set({
            cart: cart.map(cartItem =>
              cartItem.equipment.id === item.equipment.id
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
            )
          });
        } else {
          set({ cart: [...cart, item] });
        }
      },
      removeFromCart: (equipmentId) => {
        const { cart } = get();
        set({ cart: cart.filter(item => item.equipment.id !== equipmentId) });
      },
      updateCartItem: (equipmentId, updates) => {
        const { cart } = get();
        set({
          cart: cart.map(item =>
            item.equipment.id === equipmentId
              ? { ...item, ...updates }
              : item
          )
        });
      },
      clearCart: () => set({ cart: [] }),
      
      // Filters
      filters: defaultFilters,
      setFilters: (newFilters) => {
        const { filters } = get();
        set({ filters: { ...filters, ...newFilters } });
      },
      resetFilters: () => set({ filters: defaultFilters }),
      
      // UI State
      isFiltersOpen: false,
      setIsFiltersOpen: (open) => set({ isFiltersOpen: open }),
    }),
    {
      name: 'farmrent-store',
      partialize: (state) => ({
        cart: state.cart,
        filters: state.filters,
      }),
    }
  )
);
