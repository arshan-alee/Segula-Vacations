import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Home/Hero/Hero";
import Search from "./Search/Search";

const Home = () => {
  return (
    <div className="home__container">
      <div className="hero__section">
        <Navbar />
        <Hero />
        <Search />
      </div>
    </div>
  );
};

export default Home;
