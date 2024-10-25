import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/action/categoryAction";
import CategoriesElement from "../../elements/categories/CategoriesCardElement";
import CategoriesCardLoading from "../../features/loading/CategoriesCardLoading";
import CategoriesButtonElement from "../../elements/categories/CategoriesButtonElement";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);

  // 1. Function  previous and next for categories card
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  // 2. Run function first time when page rendered
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center px-2 mb-6">
          {/* 1. Categories Card Title */}
          <div className="flex flex-row items-center gap-x-2">
            <div className="h-10 w-4 rounded-md bg-tertiary"></div>
            <h1 className="text-2xl font-medium">Categories</h1>
          </div>

          {/* 2. Categories Card Button*/}
          <CategoriesButtonElement previous={previous} next={next} />
        </div>

        {/* 3. Categories Card display */}
        {loading || categories.length === 0 ? (
          <CategoriesCardLoading />
        ) : (
          <div className="slider-container">
            <CategoriesElement sliderRef={sliderRef} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
