import React from "react";
import NavPage from "./NavPage";
import SwiperPage from "../Container/SwiperPage";
import { sliderData } from "../assets/Constants/Constant";
import { Container, Row, Col } from "react-bootstrap";
import Subtitle from "../Container/Subtitle";
import AllProductFashion from "./AllProductFashion";
import AllProductMobile from "./AllProductMobile";
import NewFashion from "./NewFashion";
import NewMobile from "./NewMobile";
import MobileBanner from "../Container/MobileBanner";
import Services from "../Pages/Services";
import Newsletter from "../Container/Newsletter";

function Home() {
  return (
    <>
      <div className="homeStyle">
        <section>
          <NavPage />
        </section>
        <section>
          <SwiperPage data={sliderData} />
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4">
                <Subtitle subtitle={"Top Mobiles Deals "} />
              </Col>
              <AllProductMobile />
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col>
                <Subtitle subtitle={"Services"} />
              </Col>
              <Services />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4">
                <Subtitle subtitle={"New Mobile Brand"} />
              </Col>
              <NewMobile />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <MobileBanner />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4">
                <Subtitle subtitle={"Top Fashion Deals "} />
              </Col>

              <AllProductFashion />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4">
                <Subtitle subtitle={"New Fashion Brand"} />
              </Col>
              <NewFashion />
            </Row>
          </Container>
        </section>

        <Newsletter />
      </div>
    </>
  );
}

export default Home;
