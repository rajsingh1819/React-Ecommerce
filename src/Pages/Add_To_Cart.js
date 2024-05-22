// AddToCart.js
import React, { useState, useEffect } from "react";
import "./style/add_To_Cart.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import EmptyCart from "../Container/EmptyCart";

import { MdOutlineDelete } from "react-icons/md";
import { useCartContext } from "../Context/Cart_Context";
import { TbShoppingCartCancel } from "react-icons/tb";
import { Offers } from "../assets/Constants/Constant";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddToCart() {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { cart, removeToCart, updateQuantity, RemoveAllCartItem } =
    useCartContext();
  const { deliveryCharges, taxCharge } = Offers;

  const navigate = useNavigate();

  const userNotAvailable = () => {
    toast.info("User is not logged in!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const handleCartBooking = () => {
    const login = localStorage.getItem("login");
    navigate("/cart/booking", {
      state: { deliveryCharges, cart, total, taxCharge },
    });
    !login && userNotAvailable();
  };

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * Number(item.quantity);
    });
    setSubTotal(totalPrice);
    setTotal(totalPrice + deliveryCharges + taxCharge);
  }, [cart]);

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(itemId, newQuantity);
  };

  return !cart?.length > 0 ? (
    <EmptyCart />
  ) : (
    <Container className="booking_style_top">
      <Row>
        <Col lg="8">
          <div className="cartHeader">
            <h1>Your Cart</h1>
            <div className="clearAllCart">
              <p>{cart?.length} Item in the cart </p>
              <TbShoppingCartCancel
                className="clearIcon"
                size={25}
                onClick={() => RemoveAllCartItem()}
              />
            </div>
          </div>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <div className="cartData">
            {cart?.length > 0 && (
              <ul className="under-list">
                {cart.map((item, index) => (
                  <li key={item.id}>
                    {index > 0 && <div className="line-2 mt-2"></div>}
                    <div className="list-items">
                      <div className="listData">
                        <div className="image">
                          <img
                            src={item.Image}
                            className="image-type"
                            alt="imageName"
                            onClick={() =>
                              navigate(`/product/${item.category}/${item.id}`)
                            }
                          />

                          <div className="details-items">
                            <p className="items-desc">{item.title}</p>
                            <p className="items-desc-1">Golden</p>
                          </div>
                        </div>
                      </div>

                      <div className="section-div">
                        <p>Qty: </p>
                        <select
                          className="section"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e)}
                        >
                          {[...Array(5).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="price_data">
                        <p className="price_text"> Price:</p>
                        <p className="price"> ${item.price}.00</p>
                      </div>

                      <button
                        className="iconButton"
                        onClick={() => removeToCart(item.id)}
                      >
                        {" "}
                        <MdOutlineDelete size={25} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Col>
        <Col lg="4">
          <div className="order-summary">
            <div className="summary-item">
              <p>Subtotal</p>
              {/* <p>${total}</p> */}
              <p>${subTotal}.00</p>
            </div>
            <hr />
            <div className="summary-item">
              <p>Tax</p>
              <p>${taxCharge}.00</p>
            </div>
            <hr />
            <div className="summary-item">
              <p>Shipping</p>
              <p>${deliveryCharges}.00</p>
            </div>
            <hr />
            <div className="summary-item">
              <p className="total">Total</p>
              <p>${total}.00</p>
            </div>
            <button className="confirm-button" onClick={handleCartBooking}>
              Confirm Payment
            </button>
            <button
              className="continue-button"
              onClick={() => navigate("/home")}
            >
              Continue Shopping
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddToCart;
