import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Home/Hero/Hero";

const Home = () => {
  return (
    <div className="home__container">
      <div className="hero__section">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
