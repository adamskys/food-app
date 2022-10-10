import React from 'react';
import { CartItemType } from '../typings';

interface CartContextType {
  items: Array<CartItemType>;
  totalAmount: number;
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
