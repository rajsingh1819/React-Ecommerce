import React from 'react';
import CardItems from './CardItems';
import { Col, Row } from 'react-bootstrap';
import './styles/featuredList.css';


function FeaturedList({ allProducts }) {
    return (



        <Row className="row-cols-lg-3">
            {allProducts.length > 0 ? (
                allProducts.map((item) => (
                    <Col lg="3" className="mb-4 card-style" key={item.id}>
                        <CardItems item={item} />
                    </Col>
                ))
            ) : (
                <h3>Loading...</h3>
            )}
        </Row>
    );
}

export default FeaturedList;
