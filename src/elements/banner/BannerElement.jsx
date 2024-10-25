/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";

const BannerElement = () => {
  const banners = [
    {
      url: banner1,
      title: "banner1",
    },
    {
      url: banner2,
      title: "banner2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // styles
  const arrowStyle =
    "absolute top-[50%] rounded-full bg-white w-8 h-8 md:w-12 md:h-12 -translate-y-[50%] font-bold text-lg shadow-lg opacity-0  group-hover:opacity-100 ease-in duration-200";

  // slider logic
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  // automatic slide animation
  let autoslide = true;
  let slideInterval;
  let intervalTime = 3000;

  const auto = () => {
    slideInterval = setInterval(goToNext, intervalTime);
  };

  useEffect(() => {
    if (autoslide) {
      auto();
    }
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex, auto, autoslide, slideInterval]);

  return (
    <div className="flex justify-center items-center relative z-0 group">
      <div className="container mx-auto ">
        <img
          src={banners[currentIndex].url}
          alt="banner"
          className="animate-fadeIn w-full h-full md:max-w-[900px] md:max-h-[430px]"
        />
      </div>
      <div className="absolute flex justify-center bottom-2">
        {banners.map((item, index) => {
          return (
            <div
              className={`cursor-pointer h-2 w-2 md:h-4 md:w-4 mx-1 bg-white rounded-full inline-block shadow-lg ${
                index !== currentIndex && "bg-opacity-50"
              }`}
              key={index}
              onClick={() => goToSlide(index)}
            ></div>
          );
        })}
      </div>

      {/* banner button */}
      <button
        className={`${arrowStyle} left-0 group-hover:-left-5`}
        id="prev"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className={`${arrowStyle} right-0 group-hover:-right-5`}
        id="next"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default BannerElement;
