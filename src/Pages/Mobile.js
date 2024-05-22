import React from "react";

import { allProductData } from "../assets/Constants/Constant";
import { useParams } from "react-router-dom";
import ProductPage from "../Container/ProductPage";

function Mobile() {
  const { id } = useParams();

  return (
    <div>
      {allProductData && allProductData.length > 0 ? (
        <ProductPage data={allProductData.filter((item) => item.id === id)} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Mobile;
