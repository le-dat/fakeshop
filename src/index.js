import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductDetail from "./components/Product/ProductDetail";
import ProductList from "./components/Product/ProductList";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ProductList />} />
            <Route path="product/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
