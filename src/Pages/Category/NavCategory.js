// NavCategory.js
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./styles/navCategory.css";
import { NavLink, useParams } from "react-router-dom";

function NavCategory({ items, onSelectCategory, category }) {
    const { filter } = useParams();

    useEffect(() => {
        onSelectCategory(filter || "All");
    }, [filter, onSelectCategory]);

    const categories = [
        ...new Set(
            items
                .filter((value) => value.category === category)
                .map((item) => item.type)
        ),
    ];
    categories.unshift("All");

    return (
        <nav>
            <Row>
                <Col lg="12" className="nav_style">
                    {categories.map((filterOption, index) => (
                        <NavLink to={`/products/${category}/${filterOption}`} key={index}>
                            {filterOption}
                        </NavLink>
                    ))}
                </Col>
            </Row>
        </nav>
    );
}

export default NavCategory;
