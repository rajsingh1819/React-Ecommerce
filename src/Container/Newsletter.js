import React, { useState } from "react";
import "./styles/newsletter.css";
import { Container, Row, Col } from "react-bootstrap";
import maleTourist from "../../src/assets/male-tourist.png";
import toast from "react-hot-toast";
function Newsletter() {
  const [userEmail, setUserEmail] = useState("");

  const emailInfo = (message) => {
    toast(message, {
      icon: <span className="hot-toast-icon">ⓘ</span>,
      duration: 2000,
      className: "hot-toast",
    });
  };
  const emailSuccess = (message) => {
    toast.success(message, {
      duration: 2000,
      className: "hot-toast",
    });
  };

  const handleInputEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    !userEmail
      ? emailInfo("Please enter your email first!")
      : (() => {
          emailSuccess("Email was submitted!");
          // console.log(userEmail);
          setUserEmail("");
        })();
  };

  return (
    <section className="newsLetter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newletter_content">
              <h6>Subscribe Now to get Useful Informtion.</h6>

              <form onSubmit={handleSubmitEmail}>
                <div className="newletter_input">
                  <input
                    type="email"
                    placeholder="enter your email..."
                    name="email"
                    autoComplete="given-name"
                    value={userEmail}
                    onChange={handleInputEmail}
                  />
                  <button className="newletter_btn" type="submit">
                    Subscribe!
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <img src={maleTourist} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
