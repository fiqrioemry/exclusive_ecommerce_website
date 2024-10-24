import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/action/categoryAction";
import CategoriesElement from "../../elements/categories/CategoriesElement";
import CategoriesLoading from "../../features/loading/CategoriesLoading";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-2 ">
        {/* section title */}
        <div className="flex justify-between items-center px-2 mb-6">
          {/* title */}
          <div className="flex flex-row items-center gap-x-2">
            <div className="h-10 w-4 rounded-md bg-tertiary"></div>
            <h1 className="text-2xl font-medium">Categories</h1>
          </div>
          {/* button */}
          <button className="py-4 px-8 bg-tertiary text-white rounded-md">
            Selengkapnya
          </button>
        </div>

        {/* section details */}
        {!loading ? (
          <CategoriesLoading />
        ) : (
          <CategoriesElement categories={categories} />
        )}
      </div>
    </section>
  );
};

export default Categories;
