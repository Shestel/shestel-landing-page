import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Countdown from "../../components/Countdown/Countdown";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Mailing from "../../components/Mailing/Mailing";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Countdown />
      <Features />
      <About />
      <Mailing />
      <Footer />
    </>
  );
};

export default Home;
