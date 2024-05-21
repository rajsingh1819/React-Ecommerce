import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style/page_Not_Found.css";

function PAGE_NOT_FOUND() {
  const navigate = useNavigate();
  return (
    <Container>
      <section>
        <div className="col-sm-12 page_404">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>

            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>
              <button
                className="page_404_color"
                onClick={() => navigate("/home")}
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default PAGE_NOT_FOUND;
