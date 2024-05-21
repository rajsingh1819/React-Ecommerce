import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MdCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function BookingStatus({ showModal, setShowModal }) {
  const navigation = useNavigate();
  return (
    <Modal
      show={showModal}
      // onHide={() => setShowModal(false)}
      centered
    >
      <Modal.Body className="text-start text-black p-3">
        <div className="d-flex flex-column align-items-center">
          <MdCheckCircle
            size={70}
            style={{ color: "green" }}
            className="text-green-600 mb-4"
          />
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-1 text-center">
            Thank you for completing your secure online payment.
          </p>
          <p>Have a great day!</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center border-top-0 py-1">
        <Button
          size="lg"
          style={{ backgroundColor: "#35558a" }}
          className="mb-1"
          onClick={() => {
            setShowModal(false);
            navigation("/order");
          }}
        >
          Track your order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingStatus;
