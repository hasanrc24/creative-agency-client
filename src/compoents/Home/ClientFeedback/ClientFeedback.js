import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import Slider from "react-slick";

const ClientFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetch(`https://creative-agency-server-j90v.onrender.com/clientFeedback`)
      .then((res) => res.json())
      .then((data) => setFeedback(data));
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
    <Container id="feedback">
      <h2 className="text-center mt-5 pt-5 mb-5 pb-5">
        Clients <span className="brand-text-color">Feedback</span>
      </h2>

      <Row className="d-flex justify-content-center mb-5 pb-5">
        <Slider {...settings}>
          {feedback.map((feedbackData, index) => (
            <FeedbackCard
              feedbackData={feedbackData}
              key={index}
            ></FeedbackCard>
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default ClientFeedback;
