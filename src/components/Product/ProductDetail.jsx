import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  amountIncrement,
  amountDescreament,
  removeProductDetail,
  showProductDetail,
  amountReset,
} from "../../redux/reducer/productReducer";
import Loading from "../Loading";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.product.product);
  const amount = useSelector((state) => state.product.amount);
  console.log(productDetail);

  useEffect(() => {
    const apiProduct = async () => {
      const res = await axios
        .get(`https://fakestoreapi.com/products/${params.productId}`)
        .catch((err) => res.send(err));
      console.log(res.data);
      dispatch(showProductDetail(res.data));
      dispatch(amountReset());
    };

    apiProduct();

    return () => {
      dispatch(removeProductDetail());
    };
  }, []);

  const handleBuy = () => {
    alert("Add your cart successfully !");
  };
  const handleIncrease = () => {
    dispatch(amountIncrement());
  };
  const handleDecrease = () => {
    dispatch(amountDescreament());
  };
  return (
    <div className="ui container center segment" style={{ margin: "5rem 0" }}>
      {Object.keys(productDetail).length === 0 ? (
        <div>loading...</div>
      ) : (
        <div className="ui grid ">
          <div className="row">
            <div className="column six wide">
              <img src={`${productDetail.image}`} alt="" />
            </div>

            <div className="column nine wide">
              <div className="content">
                <h2
                  className="header"
                  style={{ fontWeight: "400" }}
                >{`${productDetail.title}`}</h2>
                <h5
                  className="header"
                  style={{ fontWeight: "100" }}
                >{`${productDetail.description}`}</h5>
                <div
                  className="meta"
                  style={{ fontSize: "1.5rem", margin: "1rem 0" }}
                >
                  <span>
                    <i className="dollar sign icon"></i>
                    {`${productDetail.price}`}
                  </span>
                </div>
                <div className="description">
                  <div className="ui icon button" onClick={handleDecrease}>
                    <i className="minus icon"></i>
                  </div>
                  {` ${amount} `}
                  <div className="ui icon button" onClick={handleIncrease}>
                    <i className="add icon"></i>
                  </div>
                </div>
                <div className="ui mini steps">
                  <div className="step">
                    <i className="truck icon"></i>
                    <div className="content">
                      <div className="title">Free ship</div>
                    </div>
                  </div>
                  <div className="active step">
                    <div className="content">
                      <button className="ui red button" onClick={handleBuy}>
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
