import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Home/Hero/Hero";
import Search from "./Search/Search";
import Message from "../../components/Home/Message/Message";
import Blogs from "../../components/Blogs/Blogs";

const Home = () => {
  return (
    <div className="home__container">
      <div className="hero__section">
        <Navbar />
        <Hero />
        <Search />
      </div>
      <Blogs />
        <Message />
    </div>
  );
};

export default Home;
