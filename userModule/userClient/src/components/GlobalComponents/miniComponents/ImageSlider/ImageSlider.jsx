import React, { useState } from "react";
import "./ImageSlider.css";

export const ImageSlider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(images.length);
    }
  };
  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };
  console.log(slideIndex);
  return (
    <div className="imageslidercontainer">
      {Array.from({ length: images.length }).map((item, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "show-image" : "hide-image"}
            key={index}
          >
            <img src={images[index]} />
          </div>
        );
      })}
      <div className="iconContainer">
        <button
          onClick={() => {
            prevSlide();
          }}
        >
          {" "}
          <i class="icon fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={() => {
            nextSlide();
          }}
        >
          {" "}
          <i class="icon fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="dotContainer">
        {Array.from({ length: images.length }).map((item, index) => {
          return (
            <div
              key={index}
              className={index + 1 === slideIndex ? "show-dot" : "dot"}
              onClick={() => setSlideIndex(index + 1)}
            >
              .
            </div>
          );
        })}
      </div>
    </div>
  );
};
