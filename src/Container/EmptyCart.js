import React from "react";

import "./styles/emptyCart.css";
import cartLogo from "../../src/assets/images/empty-cart.webp";
import orderLogo from "../../src/assets/images/emptyOrder.png";
import { useLocation, useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="emptyCart">
            <div className="emptyCart-carT-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img
                  src={location.pathname === "/cart" ? cartLogo : orderLogo}
                  width="200"
                  height="200"
                  className="img-fluid mb-4 mr-3"
                  alt="Empty Cart"
                  loading="lazy"
                />
                {location.pathname === "/cart" ? (
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                ) : (
                  <h3>
                    <strong>Don't have any order</strong>
                  </h3>
                )}
                <h4>Add something to make me happy :)</h4>
                <span
                  onClick={() => navigate("/home")}
                  className="btn btn-primary cart-btn-transform m-3"
                  data-abc="true"
                >
                  continue shopping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
