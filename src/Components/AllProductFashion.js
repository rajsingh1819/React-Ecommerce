import React from 'react'
import { allProductData } from '../assets/Constants/Constant'
import FeaturedList from '../Container/FeaturedList'

function AllProductFashion() {
    return (
        <>
            <FeaturedList allProducts={allProductData.filter(item => ((item.productType === "old") && (item.category === "fashion")))} />
        </>
    )
}

export default AllProductFashion