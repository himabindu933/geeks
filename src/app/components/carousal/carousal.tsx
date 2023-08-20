"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousal: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onChange = (index: number) => {
    setCurrentSlide(index);
  };

  const onClickItem = () => {
    // Handle click on item if needed
  };

  const onClickThumb = () => {
    // Handle click on thumbnail if needed
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        selectedItem={currentSlide}
        showStatus={false}
      >
        <div>
          <img src="slide1.jpeg" alt="Slide 1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="slide2.jpeg" alt="Slide 2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="slide3.jpeg" alt="Slide 3" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
