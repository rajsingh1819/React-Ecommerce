import React, { useState } from "react";
import "./style/booking.css";
import { Button, Form, FormGroup, ListGroup } from "react-bootstrap";
import { FaPlus, FaMinus, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { paymentData } from "../assets/Constants/Constant";
import { useLocation, useNavigate } from "react-router-dom";
import BookingStatus from "./BookingStatus";
import { v4 as uuidv4 } from "uuid";

function Booking() {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { data, avgRating, taxCharge, deliveryCharges } = location.state;

  const { price, reviews } = data;
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [countryState, setCountryState] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const increaseQuantity = () => {
    setQuantity(quantity < 5 ? quantity + 1 : quantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const currentDate = new Date();
  const options = {
    timeZone: "Asia/Kolkata", // Set the time zone to Indian Standard Time (IST)
    hour12: true, // Use 12-hour clock format
  };

  const formattedDate = currentDate.toLocaleDateString("en-IN", options);
  const formattedTime = currentDate.toLocaleTimeString("en-IN", options);

  const notify = () => {
    toast.info("Please select a payment method!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const goBack = () => {
    navigate(-1); // Go back one step
  };

  const submitForm = (e) => {
    const user = JSON.parse(localStorage.getItem("login"));

    e.preventDefault();
    if (!selectedPaymentMethod) {
      notify();
      return;
    }

    const order = { ...data, quantity };

    const formData = {
      id: uuidv4(),
      userId: user.id,

      fullName,
      phone,
      email,
      address,
      city,
      zip,
      countryState,
      taxCharge,
      deliveryCharges,
      selectedPaymentMethod,
      date: formattedDate,
      time: formattedTime,
      orders: [order],
    };

    // console.log(formData);
    let storedOrders = JSON.parse(localStorage.getItem("UserOrders")) || [];
    storedOrders.push(formData);
    localStorage.setItem("UserOrders", JSON.stringify(storedOrders));

    setFullName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setCity("");
    setZip("");
    setQuantity(1);
    setSelectedPaymentMethod("");
    setCountryState("");
    setShowModal(true);
  };

  // Calculate total
  const total =
    quantity === ""
      ? price + taxCharge + deliveryCharges
      : quantity === 1
      ? price + taxCharge + deliveryCharges
      : price * quantity + taxCharge + deliveryCharges;

  return (
    <>
      <div className="booking_data">
        <div className="form_data">
          <h5>Fill Your Information</h5>
          <Form className="booking-info-form" onSubmit={submitForm}>
            <div className="list_group_data">
              <ListGroup>
                <div className="card_price_review">
                  <h6>
                    Price : <span>${price}</span>
                  </h6>
                  <div className="review_items">
                    <FaStar className="icon_style" />
                    {avgRating === 0 ? null : avgRating}({reviews?.length})
                  </div>
                </div>
                <div className="list_1">
                  <span className="listPrice">Quantity</span>
                  <span>{quantity === "" ? 1 : quantity} qty</span>
                </div>
                <div className="list_1">
                  <span className="listPrice">Tax Charge</span>
                  <span>${taxCharge}.00</span>
                </div>

                <div className="list_1">
                  <span>Shipping Charges</span>
                  <span>${deliveryCharges}.00</span>
                </div>
                <div className="list_1  total_amount">
                  <h6>Total</h6>
                  <h4>${total}.00</h4>
                </div>
              </ListGroup>
            </div>
            <FormGroup>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <div className="address_child_1">
                <input
                  type="address"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="address_child_2">
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State"
                  required
                  value={countryState}
                  onChange={(e) => setCountryState(e.target.value)}
                />
              </div>
            </FormGroup>
            <FormGroup className="group_Form_4">
              <div className="group_inner_form">
                <input
                  type="number"
                  placeholder="Zip"
                  required
                  value={zip}
                  max={999999}
                  min={99999}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="group_inner_form_4">
                <FaMinus className="minus_icon" onClick={decreaseQuantity} />
                <input
                  type="number"
                  id="quantity"
                  placeholder="Quantity"
                  value={isNaN(quantity) ? "" : quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || "")}
                  min={0}
                  max={5}
                  onKeyDown={(e) => {
                    if (
                      !(
                        (e.key >= "0" && e.key <= "5") ||
                        e.key === "Backspace" ||
                        e.key === "Delete" ||
                        (e.key === "ArrowLeft" &&
                          e.target.selectionStart === e.target.selectionEnd) ||
                        (e.key === "ArrowRight" &&
                          e.target.selectionStart === e.target.selectionEnd)
                      ) ||
                      parseInt(e.target.value + e.key) > 5 ||
                      parseInt(e.target.value + e.key) < 1
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
                <FaPlus className="plus_icon" onClick={increaseQuantity} />
              </div>
            </FormGroup>

            <h5>Payment Methods: </h5>

            <div className="payment-method">
              {paymentData?.map((payment) => (
                <div className="text-center" key={payment.id}>
                  <input
                    type="radio"
                    id={`paymentMethod${payment.id}`}
                    name="paymentMethod"
                    value={payment.name}
                    checked={selectedPaymentMethod === payment.name}
                    onChange={() => setSelectedPaymentMethod(payment.name)}
                  />
                  <label htmlFor={`paymentMethod${payment.id}`}>
                    <img
                      src={payment.image}
                      alt={payment.name}
                      className={`payment-icon ${
                        selectedPaymentMethod === payment.name ? "selected" : ""
                      }`}
                    />
                  </label>
                </div>
              ))}
            </div>

            <div className="btn_style_booking">
              <Button variant="danger" onClick={goBack}>
                Cancel
              </Button>
              <Button type="submit">Book Now</Button>
            </div>
          </Form>
        </div>
      </div>
      <BookingStatus showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default Booking;
