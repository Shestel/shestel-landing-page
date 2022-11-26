import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import image from '../../assets/images/company0.webp'
import image1 from "../../assets/images/company1.webp"
import image2 from "../../assets/images/company2.webp"
import image3 from "../../assets/images/company3.webp"
import image4 from "../../assets/images/company4.webp"
import image5 from "../../assets/images/company5.webp"
import image6 from "../../assets/images/company6.webp"


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
          <img src={image} alt="About-Shestel" />
        </div>
        <div className="carousel--content">
          <img src={image1} alt="About-Shestel" />
        </div>
        <div className="carousel--content">
          <img src={image2} alt="About-Shestel" />
        </div>
        <div className="carousel--content">
          <img src={image3} alt="About-Shestel" />
        </div>
        <div className="carousel--content">
          <img src={image4} alt="About-Shestel" />
        </div>
        <div className="carousel--content">
          <img src={image5} alt="About-Shestel" />
        </div>
        <div className="carousel--content">
          <img src={image6} alt="About-Shestel" />
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

      </Slider>
    </div>
  );
};

export default Carousel;
