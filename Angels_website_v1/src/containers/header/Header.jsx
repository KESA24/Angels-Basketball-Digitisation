/* eslint-disable */

import React from 'react';
import './header.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import angelsImages  from './imports'


const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
      <Slider {...settings}>
        {angelsImages.map((item) => (
            <div className="angels__header section__padding " id="home">
            <div className="angels__header-content">
              <img src={item.location} alt="" />
              {/* <h1 className="gradient__text">We <br />Beyond <br /> The Game</h1> */}
            </div>
          </div>
        ))

        }
      </Slider>
  )

  
};

export default Header;
