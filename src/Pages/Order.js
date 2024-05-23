import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import EmptyCart from "../Container/EmptyCart";
import "./style/order.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Offers } from "../assets/Constants/Constant";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();

  const [status, setStatus] = useState("Placed");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [products, setProducts] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(null);
  const { deliveryCharges, taxCharge } = Offers;

  const notifyDelete = () => {
    toast.success("Your Order has been canceled!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Placed":
        return "green";
      case "Shipped":
        return "orange"; // Changed to orange to distinguish from yellow background
      case "Delivered":
        return "blue";
      default:
        return "black";
    }
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleOpenModal = (parentId, childId) => {
    setOpenModal(true);
    setOrderId({ parentId, childId });
  };

  const handleOrder = () => {
    if (orderId) {
      const updatedProducts = products
        .map((product) => {
          if (product.id === orderId.parentId) {
            return {
              ...product,
              orders: product.orders.filter(
                (order) => order.id !== orderId.childId
              ),
            };
          }
          return product;
        })
        .filter((product) => product.orders.length > 0);
      setProducts(updatedProducts);

      localStorage.setItem("UserOrders", JSON.stringify(updatedProducts));
      setOpenModal(false);
      notifyDelete();
    }
  };

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));
    setIsLoggedIn(login);
    const order = JSON.parse(localStorage.getItem("UserOrders"));
    order ? setProducts(order) : setProducts([]);
  }, []);

  useEffect(() => {
    let totalPrice = 0;

    products
      ?.filter((filter) => filter?.userId === isLoggedIn?.id)
      .forEach((order) => {
        const orderTotal = order.orders.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        totalPrice += orderTotal + order.deliveryCharges + order.taxCharge;
      });

    setTotalAmount(totalPrice);
  }, [products]);

  const userProducts =
    isLoggedIn && products.filter((item) => item.userId === isLoggedIn.id);

  return (
    <Container>
      {userProducts && userProducts?.length && userProducts !== null ? (
        <div className="card-body body-style">
          <div className="total-amount">
            <span className="card-title">Order Tracking</span>

            <span className="totalOrder">Total Amount : $ {totalAmount}</span>
          </div>

          <div className="d-flex justify-content-between align-items-center status-bar">
            {["Placed", "Shipped", "Delivered"].map(
              (itemStatus, index, array) => (
                <React.Fragment key={itemStatus}>
                  <button
                    className={`btn ${
                      status === itemStatus
                        ? itemStatus === "Placed"
                          ? "btn-success"
                          : itemStatus === "Shipped"
                          ? "btn-warning"
                          : "btn-primary"
                        : "btn-light"
                    }`}
                    onClick={() => handleStatusChange(itemStatus)}
                  >
                    {itemStatus}
                  </button>
                  {index < array.length - 1 && <span className="line"></span>}
                </React.Fragment>
              )
            )}
          </div>

          <div className=" mt-3">
            {products
              .filter((filter) => filter.userId === isLoggedIn.id)
              .map((item) => (
                <div key={item.id} className="order-details mb-3">
                  <div className="parentDiv">
                    <p>
                      <span>Date:</span> {item.date}
                    </p>

                    <div className="tex-shipping">
                      <p>
                        <span>Tex: </span> ${taxCharge}
                      </p>

                      <p>
                        <span>Shipping: </span> ${deliveryCharges}
                      </p>
                    </div>
                    <p>
                      <span>Subtotal:</span> $
                      {item.orders.reduce(
                        (acc, order) =>
                          acc + Number(order.price) * Number(order.quantity),
                        0
                      ) +
                        deliveryCharges +
                        taxCharge}
                    </p>
                  </div>
                  {/* <h4>I am parent item</h4> */}
                  <hr className="hr" />
                  <ul className="ul">
                    {item.orders.map((innerItem, index) => (
                      <li key={index}>
                        <div>
                          {index > 0 && <div className="line-2 mt-2"></div>}

                          <div className="child">
                            <div className="image-title">
                              <img
                                src={innerItem.Image}
                                className="img-style"
                                alt="orderimg"
                                onClick={() =>
                                  navigate(
                                    `/product/${innerItem.category}/${innerItem.id}`
                                  )
                                }
                              />
                              <i>{innerItem.title}</i>
                              <i>
                                {" "}
                                <span>Price: </span>$
                                {innerItem.price * innerItem.quantity}
                              </i>
                            </div>

                            <div className="price-qty-status">
                              <i>
                                <span>Quantity:</span> {innerItem.quantity}
                              </i>
                              <div className="status">
                                <span>Status:</span>
                                <div
                                  style={{
                                    backgroundColor: getStatusColor(status),
                                  }}
                                  className="status-review"
                                ></div>
                              </div>
                            </div>
                            <div className="cancel-order">
                              <button
                                onClick={() =>
                                  handleOpenModal(item.id, innerItem.id)
                                }
                              >
                                Cancel Order
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <hr />
                  <div className="payment-type">
                    <p>
                      <span>Payment Type : </span>
                      {item.selectedPaymentMethod}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="note">
            <span>*Note : </span>
            <p className="mx-1">Price = Price * Quantity</p>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      <Modal
        show={openModal}
        // onHide={() => setOpenModal(false)}
        centered
      >
        <Modal.Body>
          <p className="text-center">Do you want to cancel the order?</p>
          <p className="text-center">If yes, press OK!</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button onClick={() => setOpenModal(false)} variant="secondary">
            Back
          </Button>
          <Button onClick={handleOrder} variant="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Order;
