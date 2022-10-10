import React, { useEffect } from "react";
import "./About.css";
// import imageabout from "../../assets/images/image-about.webp";
// import image16 from "../../assets/images/image16.webp";
import check from "../../assets/images/check-mark.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="about__container">
      <div className="about__content">
        <h2>STREAMING MANAGEMENT APP</h2>
        <p>
          Shestel is a streaming management application to help online streaming
          users consolidate their streaming services to track their streaming
          subscription plan expenses, favorite movies, tvshows and connect with
          friends with a personalized profile powered by A.I. for tailored
          content recommendations.
        </p>

        <div className="about__features--content"  data-aos="fade-up"
              data-aos-offset="250"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease">
          <h2>Product Features</h2>
          <div className="about__reasons">
            <div
              className="about__reasons--child"
             
            >
              <img src={check} alt="icon" />
              <p>Personalized User Profile</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Cross-Platform Content Recommendations</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Search and Find Where to Watch Content</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Summarize and Track Subscription Expenses</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Social Community Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;