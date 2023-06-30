import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Home/Hero/Hero";
import Message from "../../components/Home/Message/Message";

const Home = () => {
  return (
    <div className="home__container">
      <div className="hero__section">
        <Navbar />
        <Hero />
      </div>
        <Message />
    </div>
  );
};

export default Home;
