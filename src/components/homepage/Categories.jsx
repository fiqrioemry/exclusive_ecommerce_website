import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCategories } from "../../redux/action/categoryAction";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(state);

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-2">
        {/* Section Title */}
        <div className="flex justify-between items-center px-2 mb-6">
          {/* Title */}
          <div className="flex flex-row items-center gap-x-2">
            <div className="h-10 w-4 rounded-md bg-tertiary"></div>
            <h1 className="text-2xl font-medium">Categories</h1>
          </div>
          {/* Button */}
          <div className="flex items-center gap-x-4">
            <button className="p-3 bg-gray-300 rounded-full" onClick={previous}>
              <FaArrowLeft className="text-2xl" />
            </button>
            <button className="p-3 bg-gray-300 rounded-full">
              <FaArrowRight className="text-2xl" onClick={next} />
            </button>
          </div>
        </div>
        <div className="slider-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {[...Array(24)].map((_, index) => {
              return (
                <div className=" px-2" key={index}>
                  <div className="bg-red-500 rounded-md w-full h-[170px] flex items-center justify-center">
                    <div className="text-2xl font-bold text-white">{index}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
