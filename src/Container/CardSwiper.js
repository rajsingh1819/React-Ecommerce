import React, { useRef } from 'react';
// import { newProduct } from '../assets/Constants/Constant';

import CardItems from './CardItems';
import { Col } from 'react-bootstrap';
import './styles/cardSwiper.css';

function CardSwiper({ newData }) {
    // console.log("new data od card ===>", newData);
    const boxRef = useRef(null);

    const clickPrev = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
            // console.log("width ==>", width);
        }
    };

    const clickNext = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
            // console.log("width ==>", width);
        }
    };

    return (
        <div className='product-carousel'>
            <button className='pre-btn' onClick={clickPrev}><p>&lt;</p></button>
            <button className='next-btn' onClick={clickNext}><p>&gt;</p></button>

            <div className="row-cols-lg-3 product-container" ref={boxRef}>
                {newData.length > 0 ? (
                    newData.map((item) => (
                        <Col lg="3" className="mb-4 card_style" key={item.id}>
                            <CardItems item={item} />
                        </Col>
                    ))
                ) : (
                    <h3>Loading...</h3>
                )}
            </div>
        </div>
    );
}

export default CardSwiper;
