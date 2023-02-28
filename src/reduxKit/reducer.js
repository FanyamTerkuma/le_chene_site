import { createSlice } from "@reduxjs/toolkit";

const p = {
  id: 9,
  product_name: "Native shirt",
  description: "Lorem, ipsum 555466 ",
  price: 7500,
  currency: "₦",
  image:
    "https://images.unsplash.com/photo-1601933087289-5cc40b51659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  ratingScore: 4.2,
  quantity: 3,
  colors: ["#fbaf37", "#4b5563", "#cd4c19", "#e03fb4"],
  sizes: ["xl", "lg", "m", "xxl", "s"],
  currentColor: "#fbaf37",
  currentSize: "xxl",
};

const initialState = {
  user: null,
  cart: [p],
  wishlist: [],
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemExist = state.cart.find(
        (item) =>
          item.currentColor === action.payload.currentColor &&
          item.currentSize === action.payload.currentSize &&
          item.id === action.payload.id
      );

      if (itemExist) {
        state.cart = state.cart.map((item) =>
          item.currentColor === action.payload.currentColor &&
          item.currentSize === action.payload.currentSize &&
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart = [action.payload, ...state.cart];
      }
    },

    removeFromCart: (state, action) => {
      let foundIndex = state.cart.findIndex(
        (item) =>
          item.currentColor === action.payload.currentColor &&
          item.currentSize === action.payload.currentSize &&
          item.id === action.payload.id
      );

      state.cart = state.cart.filter((_, index) => index !== foundIndex);
    },

    clearCart: (state) => {
      state.cart = [];
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item, index) =>
        index === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    decreaseItemQuantity: (state, action) => {
      let foundItem = state.cart.find((_, index) => index === action.payload);

      if (foundItem.quantity > 1) {
        state.cart = state.cart.map((item, index) =>
          index === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },

    toggleWishlist: (state, action) => {
      let exists = state.wishlist.find((item) => item.id === action.payload.id);

      if (exists) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id != action.payload.id
        );
      } else {
        state.wishlist = [action.payload, ...state.wishlist];
      }
    },

    logout: (state) => {
      state.user = null;
    },

    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleWishlist,
  decreaseItemQuantity,
  increaseItemQuantity,
  logout,
  login,
} = counterSlice.actions;

export default counterSlice.reducer;
