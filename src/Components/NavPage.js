import React from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { NavData } from "../assets/Constants/Constant";
import "./styles/navPage.css";

function NavPage() {
  return (
    <nav className="nav_Item">
      <Container>
        <Row style={{ backgroundColor: "#222f3d" }}>
          <ul className="menuItems">
            {NavData.length > 0 ? (
              NavData.map((item, index) => (
                <li className="items_List" key={index}>
                  <NavLink to={`/products/${item.path}/All`}>
                    <img
                      src={item.image}
                      height={40}
                      width={40}
                      alt="nav_img"
                    />
                    <h6> {item.name}</h6>
                  </NavLink>
                </li>
              ))
            ) : (
              <h3>Loading...</h3>
            )}
          </ul>
        </Row>
      </Container>
    </nav>
  );
}

export default NavPage;
