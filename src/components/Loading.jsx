import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const loading = useSelector((state) => state.product.loading);

  return (
    <div>
      {loading && (
        <div className="ui">
          <div className="ui active inverted dimmer">
            <div className="ui medium text loader">Loading</div>
          </div>
          <p></p>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default Loading;
