import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  sku: string;
  title: string;
  flavor: string;
  qty: number;
  price: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (sku: string, flavor: string) => void;
  updateQty: (sku: string, flavor: string, qty: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.sku === item.sku && i.flavor === item.flavor
          );
          
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.sku === item.sku && i.flavor === item.flavor
                  ? { ...i, qty: i.qty + item.qty }
                  : i
              ),
            };
          }
          
          return { items: [...state.items, item] };
        });
      },
      
      removeItem: (sku, flavor) => {
        set((state) => ({
          items: state.items.filter((i) => !(i.sku === sku && i.flavor === flavor)),
        }));
      },
      
      updateQty: (sku, flavor, qty) => {
        if (qty <= 0) {
          get().removeItem(sku, flavor);
          return;
        }
        
        set((state) => ({
          items: state.items.map((i) =>
            i.sku === sku && i.flavor === flavor ? { ...i, qty } : i
          ),
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotal: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.qty, 0);
      },
      
      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.qty, 0);
      },
    }),
    {
      name: 'chewsole-cart',
      storage: createJSONStorage(() => {
        // Only use localStorage in browser environment
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        // Return a no-op storage for SSR
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    }
  )
);

