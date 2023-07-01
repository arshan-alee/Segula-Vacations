import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Home/Hero/Hero";
import Search from "./Search/Search";
import Message from "../../components/Home/Message/Message";
<<<<<<< HEAD
import VideoGallery from "./VideoGallery/VideoGallery";
=======
import Blogs from "../../components/Blogs/Blogs";
import Rental from "../../components/Rental/Rental";
>>>>>>> b2bfe2faba6d134afe91dbd34b293a49486d6290

const Home = () => {
  return (
    <div className="home__container">
      {/* Hero Section */}
      <div className="hero__section">
        <Navbar />
        <Hero />
        
        <Search />
      </div>
<<<<<<< HEAD
      <VideoGallery />
=======
        <Rental />
      <Blogs />
>>>>>>> b2bfe2faba6d134afe91dbd34b293a49486d6290
      <Message />
    </div>
  );
};

export default Home;
