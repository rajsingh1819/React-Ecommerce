// Category.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { allProductData } from "../../assets/Constants/Constant";
import NavCategory from "./NavCategory";
import CardItems from "../../Container/CardItems";

function Category() {

    const { category, filter } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(filter || "All");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = allProductData.filter((item) => {
            if (item.category === category) {
                if (selectedCategory === "All") return true; // Return all products when filter is "All"
                return item.type.toLowerCase() === selectedCategory.toLowerCase();
            }
        });
        setFilteredProducts(filtered);
    }, [category, selectedCategory]);

    return (
        <div style={{ marginBottom: "8%" }}>
            <section>
                <Container>
                    <NavCategory
                        items={allProductData}
                        category={category}
                        onSelectCategory={setSelectedCategory}
                    />
                </Container>
            </section>

            <section style={{ marginTop: "5%" }}>
                <Container>
                    <Row>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <Col lg="3" className="mb-4" key={item.id}>
                                    <CardItems item={item} />
                                </Col>
                            ))
                        ) : (
                            // Render all products if no products are filtered
                            <h1>Loading....</h1>
                        )}
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Category;
