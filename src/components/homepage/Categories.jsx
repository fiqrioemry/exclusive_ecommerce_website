import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCategories } from "../../redux/action/categoryAction";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Beauty from "../../assets/categories/beauty.png";
import Fragrances from "../../assets/categories/fragrances.png";
import Furniture from "../../assets/categories/furnitures.png";
import Groceries from "../../assets/categories/groceries.png";
import HomeDecoration from "../../assets/categories/home-decoration.png";
import KitchenAccessories from "../../assets/categories/kitchen-accessories.png";
import Laptops from "../../assets/categories/laptops.png";
import MensShirts from "../../assets/categories/mens-shirts.png";
import MensShoes from "../../assets/categories/mens-shoes.png";
import MensWatches from "../../assets/categories/mens-watches.png";
import MobileAccessories from "../../assets/categories/mobile-accessories.png";
import Motorcycle from "../../assets/categories/motorcycle.png";
import SkinCare from "../../assets/categories/skin-care.png";
import Smartphones from "../../assets/categories/smartphones.png";
import SportsAccessories from "../../assets/categories/sports-accessories.png";
import Sunglasses from "../../assets/categories/sunglasses.png";
import Tablets from "../../assets/categories/tablets.png";
import Tops from "../../assets/categories/tops.png";
import Vehicle from "../../assets/categories/vehicle.png";
import WomensBags from "../../assets/categories/womens-bags.png";
import WomensDresses from "../../assets/categories/womens-dresses.png";
import WomensJewellery from "../../assets/categories/womens-jewellery.png";
import WomensShoes from "../../assets/categories/womens-shoes.png";
import WomensWatches from "../../assets/categories/womens-watches.png";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);

  const categoriesCard = [
    { name: "beauty", image: Beauty },
    { name: "fragrances", image: Fragrances },
    { name: "furniture", image: Furniture },
    { name: "groceries", image: Groceries },
    { name: "home-decoration", image: HomeDecoration },
    { name: "kitchen-accessories", image: KitchenAccessories },
    { name: "laptops", image: Laptops },
    { name: "mens-shirts", image: MensShirts },
    { name: "mens-shoes", image: MensShoes },
    { name: "mens-watches", image: MensWatches },
    { name: "mobile-accessories", image: MobileAccessories },
    { name: "motorcycle", image: Motorcycle },
    { name: "skin-care", image: SkinCare },
    { name: "smartphones", image: Smartphones },
    { name: "sports-accessories", image: SportsAccessories },
    { name: "sunglasses", image: Sunglasses },
    { name: "tablets", image: Tablets },
    { name: "tops", image: Tops },
    { name: "vehicle", image: Vehicle },
    { name: "womens-bags", image: WomensBags },
    { name: "womens-dresses", image: WomensDresses },
    { name: "womens-jewellery", image: WomensJewellery },
    { name: "womens-shoes", image: WomensShoes },
    { name: "womens-watches", image: WomensWatches },
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
            <button className="p-3 bg-tertiary rounded-full" onClick={previous}>
              <FaArrowLeft className="text-2xl text-white" />
            </button>
            <button className="p-3 bg-tertiary rounded-full">
              <FaArrowRight className="text-2xl text-white" onClick={next} />
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
            {categoriesCard.map((item, index) => {
              return (
                <div className=" px-2" key={index}>
                  <div className="bg-white border-[3px] h-full border-tertiary rounded-md w-full">
                    <div className="flex items-center justify-center">
                      <img
                        className="h-[125px] bg-contain"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="py-2 text-center text-[10px] md:text-sm uppercase">
                      {item.name}
                    </div>
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
