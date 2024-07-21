/* eslint-disable */

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BarChartIcon from '@mui/icons-material/BarChart';
import VideocamIcon from '@mui/icons-material/Videocam';
import './games.css'

import { angelsGames } from './data';

const Games = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
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
  
    <Slider {...settings} className="section__padding">
     {
          angelsGames.map((item) => (
              <div className="card">
                <div className="card-top">
                  <h3>{item.date}</h3>
                </div>
                <div className="card-middle">
                  <div className="teams_content">
                    <div className="logobox">
                      <img src={require('../../assets/angelogo.png').default} alt="al" />
                      
                    </div>
                    <h2>{item.AngelsScore}</h2>
                  </div>
                  <h4>{item.location}</h4>
                  <div className="teams_content">
                  <h2>{item.OpponentScore}</h2>
                  <div className="logobox">
                      <img src={require('../../assets/JKL_Logo.jpg').default} alt="ol" />
                    </div>
                    
                  </div>
                </div>
                <div className="card-bottom">
                  <a href=""><BarChartIcon /> Stats</a>
                  <a href=""><VideocamIcon />Watch</a>
                </div>
              </div>
            ))
     } 
  </Slider>



  );
};

export default Games;

