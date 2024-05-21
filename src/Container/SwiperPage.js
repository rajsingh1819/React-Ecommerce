import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/swiperPage.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SwiperPage({ data }) {
  return (
    <Container className="Swiper_top">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.Image}
                className="imgSlider"
                alt="swiper data"
                loading={index === 0 ? "eager" : "lazy"} // Eager for the first image, lazy for the rest
              />
            </SwiperSlide>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Swiper>
    </Container>
  );
}

export default SwiperPage;
