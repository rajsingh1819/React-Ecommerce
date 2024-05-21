import React from "react";
import CardSwiper from "../Container/CardSwiper";
import { allProductData } from "../assets/Constants/Constant";

function NewMobile() {
    return (
        <>
            {
                <CardSwiper
                    newData={allProductData.filter(
                        (item) => item.productType === "new" && item.category === "mobile"
                    )}
                />
            }
        </>
    );
}

export default NewMobile;
