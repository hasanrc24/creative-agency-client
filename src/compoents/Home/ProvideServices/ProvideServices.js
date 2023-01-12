import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard/ServiceCard";
import Slider from "react-slick";

const ProvideServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch(`https://creative-agency-server-j90v.onrender.com/allServices`)
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Container id="service" className="mt-5 pt-5 mb-5 pb-5 text-center">
      <h2>
        Provide awesome <span className="brand-text-color">services</span>
      </h2>
      <Row className="d-flex mt-5">
        <Slider {...settings}>
          {allServices.map((serviceData, index) => (
            <ServiceCard serviceData={serviceData} key={index}></ServiceCard>
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default ProvideServices;
