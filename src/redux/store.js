import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import todoReducer from "./reducer/todoReducer";

export default configureStore({
  reducer: {
    product: productReducer,
    todo: todoReducer,
  },
});
