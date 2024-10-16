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
    <section className="mb-14">
      <div className="flex flex-row container mx-auto">
        {/* categories list option section */}
        <div className="h-[450px] flex w-full">
          <div className="max-w-[200px] w-full h-full flex flex-col overflow-y-auto overflow-x-hidden">
            {categoryList.map((category, index) => {
              return <CategoryListsElement category={category} key={index} />;
            })}
          </div>
          {/* banner section */}
          <div className="w-full h-full flex justify-center items-center  text-2xl font-bold">
            <BannerElement />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Banner;
