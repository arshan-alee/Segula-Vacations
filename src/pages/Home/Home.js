import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Home/Hero/Hero";
import Search from "./Search/Search";
import Message from "../../components/Home/Message/Message";
import VideoGallery from "./VideoGallery/VideoGallery";
import Blogs from "../../components/Blogs/Blogs";
import Rental from "../../components/Rental/Rental";

const Home = () => {
  return (
    <div className="home__container">
      {/* Hero Section */}
      <div className="hero__section">
        <Navbar />
        <Hero />

        <Search />
      </div>
      <VideoGallery />
      {/* <Rental /> */}
      {/* <Blogs /> */}
      {/* <Message /> */}
    </div>
  );
};

export default Home;
