import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCategories } from "../../redux/action/categoryAction";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);

  const categories = [
    {
      name: "beauty",
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      name: "fragrances",
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    },
    {
      name: "furniture",
      image:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    },
    {
      name: "groceries",
      image:
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    },
    {
      name: "home-decoration",
      image:
        "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png",
    },
    {
      name: "kitchen-accessories",
      image:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png",
    },
    {
      name: "laptops",
      image:
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
    },
    {
      name: "mens-shirts",
      image:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png",
    },
    {
      name: "mens-shoes",
      image:
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
    },
    {
      name: "mens-watches",
      image:
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
    },
    {
      name: "mobile-accessories",
      image:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
    },
    {
      name: "motorcycle",
      image:
        "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png",
    },
    {
      name: "skin-care",
      image:
        "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/thumbnail.png",
    },
    {
      name: "smartphones",
      image:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png",
    },
    {
      name: "sports-accessories",
      image: "",
    },
    {
      name: "sunglasses",
      image: "",
    },
    {
      name: "tablets",
      image: "",
    },
    {
      name: "tops",
      image: "",
    },
    {
      name: "vehicle",
      image: "",
    },
    {
      name: "womens-bags",
      image: "",
    },
    {
      name: "womens-dresses",
      image: "",
    },
    {
      name: "womens-jewellery",
      image: "",
    },
    {
      name: "womens-shoes",
      image: "",
    },
    {
      name: "womens-watches",
      image: "",
    },
  ];

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
