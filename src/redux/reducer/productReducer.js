import { createSlice } from "@reduxjs/toolkit";
export const productReducer = createSlice({
  name: "product",
  initialState: {
    loading: true,
    amount: 1,
    product: {},
    products: [],
  },
  reducers: {
    showProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    showProductDetail: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    removeProductDetail: (state) => {
      state.product = {};
    },
    amountIncrement: (state) => {
      state.amount += 1;
    },
    amountDescreament: (state) => {
      if (state.amount > 0) {
        state.amount -= 1;
      }
    },
    amountReset: (state) => {
      state.amount = 1;
    },
  },
});

export const {
  showProducts,
  showProductDetail,
  removeProductDetail,
  amountIncrement,
  amountDescreament,
  amountReset,
} = productReducer.actions;
export default productReducer.reducer;
