import React, { useState } from "react";
import { ListGroup, Form, FormGroup, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { paymentData } from "../assets/Constants/Constant";
import BookingStatus from "./BookingStatus";
import { v4 as uuidv4 } from "uuid";

function CartBooking(props) {
  const [showModal, setShowModal] = useState(false);

  const { deliveryCharges, cart, total, taxCharge, setShowBooking } =
    props || {};

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [countryState, setCountryState] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const notify = () => {
    toast("Please select a payment method!", {
      icon: <span className="hot-toast-icon">ⓘ</span>,
      duration: 2000,
      className: "hot-toast",
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("login"));

    if (!selectedPaymentMethod) {
      notify();
      return;
    }

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
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN"),

      orders: cart,
    };

    let storedOrders = JSON.parse(localStorage.getItem("UserOrders")) || [];
    storedOrders.push(formData);
    localStorage.setItem("UserOrders", JSON.stringify(storedOrders));

    // Clear form fields after submission
    setFullName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setCity("");
    setZip("");
    setCountryState("");
    setSelectedPaymentMethod("");

    setShowModal(true);
  };

  const goBack = () => {
    setShowBooking(false);
  };

  return (
    <>
      <div className="booking_data">
        <div className="form_data">
          <Form className="booking-info-form" onSubmit={submitForm}>
            <h5>Fill Your Information</h5>
            <div className="list_group_data">
              <ListGroup>
                <div className="list_1">
                  <span>Service Charges:</span>
                </div>
                <div className="list_1">
                  <span>Items</span>
                  <span>{cart.length} item</span>
                </div>

                <div className="list_1">
                  <span>Tax</span>
                  <span>${taxCharge}.00</span>
                </div>
                <div className="list_1">
                  <span>Shipping</span>
                  <span>${deliveryCharges}.00</span>
                </div>
                <div className="list_1 total_amount">
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
            <FormGroup className="group_Form_4 mb-3">
              <div className="group_inner_form">
                <input
                  type="number"
                  placeholder="Zip"
                  required
                  value={zip}
                  max={999999}
                  min={99999}
                  onChange={(e) => {
                    e.target.value.length <= 8 && setZip(e.target.value);
                  }}
                />
              </div>

              <h5 style={{ marginRight: 15 }}>Payment Types : </h5>
            </FormGroup>

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
              <Button type="submit" variant="success">
                Pay
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <BookingStatus
        showModal={showModal}
        setShowModal={setShowModal}
        setShowBooking={setShowBooking}
      />
    </>
  );
}

export default CartBooking;
