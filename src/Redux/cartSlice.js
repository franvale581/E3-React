import { createSlice } from '@reduxjs/toolkit';

// obtenemos los items del carrito de LocalStorage
const savedCartItems = localStorage.getItem('cartItems');

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartOpen: false,
    items: savedCartItems ? JSON.parse(savedCartItems) : [], // Si existen datos guardados, úsalos. Si no, usa un arreglo vacío.
  },
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addProductToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    // Reducer para incrementar la cantidad de un producto en el carrito
    addUnitToProduct: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    // Reducer para disminuir la cantidad de un producto en el carrito
    removeUnitFromProduct: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    // Reducer para establecer los items del carrito
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { toggleCart, addProductToCart, removeProductFromCart, clearCart, addUnitToProduct, removeUnitFromProduct, closeCart, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;