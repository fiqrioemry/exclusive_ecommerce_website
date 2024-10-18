import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/actions/productAction";
import CategoryListsElement from "../elements/CategoryListsElement";
import BannerElement from "../elements/BannerElement";

const Banner = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.allCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <section className="mb-14 bg-red-500">
      {/* categories list option section */}
      <div className="flex flex-col md:flex-row max-h-[750px] md:h-[450px] ">
        <div className="w-full h-[200px] md:w-[300px] md:h-auto flex flex-col overflow-y-auto overflow-x-hidden mb-4 px-3">
          {categoryList.map((category, index) => {
            return <CategoryListsElement category={category} key={index} />;
          })}
        </div>

        {/* banner section */}
        <div className="w-full h-full flex justify-center items-center text-2xl font-bold">
          <BannerElement />
        </div>
      </div>
    </section>
  );
};

export default Banner;
