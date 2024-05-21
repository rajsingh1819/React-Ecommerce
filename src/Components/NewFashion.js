import React from 'react'
import CardSwiper from '../Container/CardSwiper'
import { allProductData } from '../assets/Constants/Constant'

function NewFashion() {
    return (
        <>
            <CardSwiper newData={allProductData.filter(item => (item.productType === "new") && (item.category === "fashion"))} />
        </>
    )
}

export default NewFashion