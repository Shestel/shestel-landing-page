import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";
import image7 from "../../assets/images/7.jpg";
import image8 from "../../assets/images/8.jpg";
import image9 from "../../assets/images/9.jpg";
import image10 from "../../assets/images/10.jpg";
import image11 from "../../assets/images/11.jpg";
import image12 from "../../assets/images/12.jpg";

// import jigsaw from "../../assets/images/jigsaw.png";
// import money from "../../assets/images/money.png";
// import chat from "../../assets/images/chat.png";
// import netflix from '../../assets/images/netflix.webp'
// import apple from '../../assets/images/apple.webp'
// import peacock from '../../assets/images/peacock.webp'
// import amazon from '../../assets/images/prime.webp'
// import youtube from '../../assets/images/youtube.webp'
// import hbo from '../../assets/images/hbo.webp'
// import hulu from '../../assets/images/hulu.webp'
// import tubi from '../../assets/images/tubi.webp'
// import paramount from '../../assets/images/paramount.webp'
// import disney from '../../assets/images/disney.webp'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: false,
      //     },
      //   },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 2,
      //       initialSlide: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 2,
      //     },
      //   },
    ]
  };
  return (
    <div className="carousel__container">
      <Slider {...settings}>

        <div className="carousel--content">
          <img src={image1} alt="" />
        </div>
        <div className="carousel--content">
          <img src={image2} alt="" />
        </div>
        <div className="carousel--content">
          <img src={image3} alt="" />
        </div>

        {/* <div className="carousel--content">
          <h2>CONSOLIDATE</h2>
        </div>

        <div className="carousel--content">
          <h2>TRACK</h2>
        </div>

        <div className="carousel--content">
          <h2>CONNECT</h2>
        </div> */}

        {/* <img src={netflix} alt="Client Logo" />

        <img src={apple} alt="Client Logo" />

        <img src={hulu} alt="Client Logo" />

        <img src={amazon} alt="Client Logo" className="carousel-big"/>

        <img src={youtube} alt="Client Logo" className="carousel-big"/>

        <img src={hbo} alt="Client Logo" />

        <img src={disney} alt="Client Logo" />

        <img src={tubi} alt="Client Logo" />

        <img src={paramount} alt="Client Logo" />

        <img src={peacock} alt="Client Logo" /> */}
      </Slider>
    </div>
  );
};

export default Carousel;
