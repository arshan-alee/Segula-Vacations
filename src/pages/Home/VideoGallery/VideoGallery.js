import React from "react";
import "./VideoGallery.css";
import { BsFillPlayFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

const VideoGallery = () => {
  return (
    <div className="gallery__container">
      {/* Gallery Wrapper */}
      <div className="gallery__wrapper">
        {/* Content Container */}
        <div className="content">
          <h1>Video Gallery</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        {/* Gallery Items Container */}
        <div className="gallery__items">
          <div className="gallery__item">
            <img src="/assets/Home/gallery__img.png" alt="home" />
          </div>
          <div className="gallery__item">
            <div className="play">
              <BsFillPlayFill />
            </div>
            <div className="chevron-right">
              <FiChevronRight />
            </div>
            <img src="/assets/Home/gallery__middle__img.png" alt="home" />
          </div>
          <div className="gallery__item">
            <img src="/assets/Home/gallery__img.png" alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
