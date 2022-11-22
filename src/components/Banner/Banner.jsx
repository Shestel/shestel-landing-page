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
    <>
      <div className="banner__container">
        <div className="banner__content">
          <h1>EXPLORE MORE CONTENT, SAVE TIME DISCOVERING YOUR PREFERENCES THROUGH COMMUNITY.</h1>
          <p>
            Don't be overwhelmed searching for your movies, TV Shows and Sports Schedules.
            <br />
            Stay in control over where your movies, TV shows are, expand your horizon and engage with new and old friends to share your love for a good entertainment.
          </p>
          {/* <Carousel /> */}
        </div>
        <div className="banner__media">
          <video autoPlay loop muted playsInline>
            <source src={videoweb} type="video/webm" />
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            Don't be overwhelmed searching for your movies, TV Shows and Sports Schedules.
            <br />
            Stay in control over where your movies, TV shows are, expand your horizon and engage with new and old friends to share your love for a good entertainment.
          </p>
          {/* <Carousel /> */}
        </div>
      </div>

      <section>
        <Carousel />
      </section>
    </>
  );
};

export default Banner;
