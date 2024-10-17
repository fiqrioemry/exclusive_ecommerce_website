import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";

const Categories = () => {
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts(8));
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const products = [
    {
      image: "https://placehold.co/200x300",
      title: "Sedap Minyak Goreng 1000ml",
      price: "Rp20.200",
      originalPrice: "Rp26.700",
      discount: "24%",
      status: "Segera Habis",
    },
    {
      image: "https://placehold.co/200x300",
      title: "Prove DK2",
      price: "Rp75.000",
      originalPrice: "Rp115.000",
      discount: "35%",
      status: "Segera Habis",
    },
    {
      image: "https://placehold.co/200x300",
      title: "Starry New York 900ml x3",
      price: "Rp28.712",
      originalPrice: "Rp39.600",
      discount: "27%",
      status: "Lagi Diminati",
    },
    {
      image: "https://placehold.co/200x300",
      title: "Nescafe Classic 90gr x2",
      price: "Rp63.180",
      originalPrice: "Rp81.800",
      discount: "23%",
      status: "Lagi Diminati",
    },
    {
      image: "https://placehold.co/200x300",
      title: "Realfood Stay Fit 6-Day Trial Program",
      price: "Rp296.910",
      originalPrice: "Rp400.000",
      discount: "26%",
      status: "Lagi Diminati",
    },
    {
      image: "https://placehold.co/200x300",
      title: "Anlene Susu Dewasa 2x850g",
      price: "Rp228.060",
      originalPrice: "Rp287.400",
      discount: "21%",
      status: "Lagi Diminati",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* title */}
        <div>
          <div className="flex flex-row items-center gap-4 text-tertiary font-semibold mb-5">
            <div className="w-5 h-10 rounded-md bg-tertiary"></div>
            <h4>This Month</h4>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h1>Browse By Category</h1>
            <div className="flex gap-x-4">
              <div className="p-3 rounded-full bg-secondary/20 cursor-pointer">
                <FaArrowLeft className="text-xl block" />
              </div>
              <div className="p-3 rounded-full  bg-secondary/20 cursor-pointer">
                <FaArrowRight className="text-xl block" />
              </div>
            </div>
          </div>
        </div>

        {/* card */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4"></div> */}
        <div className="p-4">
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex overflow-hidden">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`transition-transform duration-500 ease-in-out transform ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-md p-4 m-2 w-60">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                    <div className="text-red-500 font-bold text-xl mb-1">
                      {product.price}
                    </div>
                    <div className="text-gray-500 line-through mb-1">
                      {product.originalPrice}
                    </div>
                    <div className="text-red-500 font-bold mb-2">
                      {product.discount}
                    </div>
                    <div className="text-gray-500 mb-2">{product.status}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div
                        className="bg-red-500 h-2.5 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
