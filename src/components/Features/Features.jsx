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
        <h2>Organize and control your content providers</h2>
        <p>Save time searching your content across platform.</p>
        <p>Manage your recurring subscription expenses.</p>
        <p>Making informed decision on the services you like.</p>
      </div>
      {/* <div className="features__child">
        <img src={work} alt="Content access" />
        <h2>Content and Subscription Plan Tracking</h2>
        <p>
          Track your favorite movies, TV shows and your subscription plan from
          your streaming services providers.
        </p>
      </div> */}
      <div className="features__child">
        <img src={insight} alt="Social networking" />
        <h2>Content Community platform </h2>
        <p>Find and connect with friends to share your taste in movies, TV shows and more.</p>
        <p>Engage in conversation to help you understand your entertainment preferences better.</p>
      </div>
    </section>
  );
};

export default Features;
