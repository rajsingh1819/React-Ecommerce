import React from "react";
import { allProductData } from "../assets/Constants/Constant";
import FeaturedList from "../Container/FeaturedList";

function AllProductMobile() {
    return (
        <>
            <FeaturedList
                allProducts={allProductData.filter(
                    (item) => item.productType === "old" && item.category === "mobile"
                )}
            />
        </>
    );
}

export default AllProductMobile;
