import React from "react";
import "./Features.css";
import mindmap from "../../assets/images/mind-map.png";
import work from "../../assets/images/work.png";
import insight from "../../assets/images/insight.png";

const Features = () => {
  return (
    <section className="features__container">
      <div className="features__child">
        <img src={mindmap} alt="Live Streaming" />
        <h2>Streaming Services Consolidation</h2>
        <p>Bring your Streaming Services all in one place.</p>
      </div>
      <div className="features__child">
        <img src={work} alt="Content access" />
        <h2>Content and Subscription Plan Tracking</h2>
        <p>
          Track your favorite movies, TV shows and your subscription plan from
          your streaming services providers.
        </p>
      </div>
      <div className="features__child">
        <img src={insight} alt="Social networking" />
        <h2>Social Community Platform</h2>
        <p>
          Connect with friends to discover and explore more movies, TV shows to
          watch and have fun conversations.
        </p>
      </div>
    </section>
  );
};

export default Features;
