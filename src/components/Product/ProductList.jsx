import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { showProducts } from "../../redux/reducer/productReducer";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    const apiProducts = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.log(err));
      dispatch(showProducts(res.data));
    };
    apiProducts();
  }, []);

  return (
    <div className="ui grid container">
      <div className="ui link cards stackable four wide">
        {products.map((product) => (
          <div className="ui card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={`${product.image}`}
                alt={`${product.title}`}
                style={{
                  width: "100%",
                  backgroundSize: "cover",
                  height: "20rem",
                }}
              />
            </Link>
            <div className="content">
              <Link
                to={`/product/${product.id}`}
                className="header"
                style={{
                  fontSize: "1.5rem",
                  height: "40px",
                  lineHeight: "20px",
                  overflow: "hidden",
                  display: "-webkit-box",
                }}
              >
                {product.title}
              </Link>
              <div className="meta" style={{ margin: "1rem 0" }}>
                <Link to={`/product/${product.id}`}>{product.category}</Link>
              </div>
              <div className="meta">
                <Link to={`/product/${product.id}`}>
                  <i className="dollar sign icon"></i>
                  {product.price}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
