import React from "react";
import "./Banner.css";
// import bottom from "../../assets/images/image7.webp";
// import top from "../../assets/images/image13.webp";
// import long from "../../assets/images/image17.webp";
import Carousel from "../Carousel/Carousel";
import video from "../../assets/videos/intro.mp4";
import videoweb from "../../assets/videos/intro-web.webm";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__content">
        <h1>MANAGE ALL YOUR STREAMING SERVICES USING ONE APP.</h1>
        <p>
          Consolidate Your Streaming Service Providers, Track Your Subscription
          Plan Expenses, Your Favorite Movies, TV shows and Connect With Your
          Friends.
        </p>
        <Carousel />
      </div>
      <div className="banner__media">
        <video autoPlay loop muted playsInline>
          <source src={videoweb} type="video/webm" />
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          Consolidate Your Streaming Service Providers, Track Your Subscription
          Plan Expenses, Your Favorite Movies, TV shows and Connect With Your
          Friends.
        </p>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
