import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartOpen: false,
    items: [], // arreglo para almacenar los productos
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
  },
});

export const { toggleCart, addProductToCart, removeProductFromCart, clearCart, addUnitToProduct, removeUnitFromProduct, closeCart } = cartSlice.actions;

export default cartSlice.reducer;