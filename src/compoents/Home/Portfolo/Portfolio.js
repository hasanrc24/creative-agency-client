import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Portfolio.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import Slider from 'react-slick';


const Portfolio = () => {
    const settings = {
        dots: true,
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
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
      };
    return (
        <Container fluid id="portfolio" className="portfolio-bg text-center text-white">
            <h2>Here are some of <span className="brand-text-color">our works</span></h2>
                <div className="carousel-class">
                  <Slider {...settings}>
                          <div className="caro-item">
                              <Image className="caro-img" src={carousel1} />
                          </div>
                          <div className="caro-item">
                              <Image className="caro-img" src={carousel2} />
                          </div>
                          <div className="caro-item">
                              <Image className="caro-img" src={carousel3} />
                          </div>
                          <div className="caro-item">
                              <Image className="caro-img" src={carousel4} />
                          </div>
                          <div className="caro-item">
                              <Image className="caro-img" src={carousel5} />
                          </div>
                  </Slider>
                </div>
        </Container>
    );
};

export default Portfolio;