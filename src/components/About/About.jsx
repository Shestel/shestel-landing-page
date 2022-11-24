import React from "react";
import "./About.css";
// import imageabout from "../../assets/images/image-about.webp";
// import image16 from "../../assets/images/image16.webp";
import check from "../../assets/images/check-mark.png";
const About = () => {
  return (
    <section className="about__container">
      <div className="about__content">
        <h2>WHO ARE WE?</h2>
        <p>
          Shestel is a content community platform dedicated to bring online video on-demand consumers, movies and TV lovers a place where they can explore efficiently the content the like, organize their services, track their streaming habits and most of all regain the joy of connecting, sharing and engaging with like minded friends to help us better understand ourselves and spend more entertaining time.
        </p>

        <h2>WHY WE DO IT?</h2>
        <p>
          We are social creatures and we crave connection to share our unique values. With Shestel, you can keep the market promise of streaming services of experiencing personalize content offering but we help you enjoy and share the emotions transcending from the art of discovery.
        </p>

        <h2>WHY YOU SHOULD ADOPT US?</h2>
        <p>
          Shestel takes pride in offering you as users a community platform to help you reignite to communal and sharing experience during your moment entertainment either from a movie, TV shows, Sports.
        </p>

        <div className="about__features--content">
          <h2>A Quick Overview of Our Features:</h2>
          <div className="about__reasons">
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Cross providers personalized recommendations</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Record and tracking of behavioral activities</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Personalized service providers organization and expenses</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Social feed  group engagement </p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Community platform to share and interact with users</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Personalized watchlist to save time retrieving favorite content</p>
            </div>
            <div className="about__reasons--child">
              <img src={check} alt="icon" />
              <p>Notification to stay connected and informed on original and exclusive content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
