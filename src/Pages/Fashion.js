import React from 'react';
import { allProductData } from '../assets/Constants/Constant';
import { useParams } from 'react-router-dom';
import Service from '../Container/Service';

function Fashion() {
    const { id } = useParams();

    return (
        <div>
            {
                allProductData && allProductData.length > 0 ?
                    <Service data={allProductData.filter(item => item.id === id)} />
                    :
                    <h1>Loading...</h1>
            }
        </div>
    )
}

export default Fashion;