import React, { useEffect } from "react";
import FilterBoxElement from "../elements/FilterBoxElement";
import { ProductsElement } from "../elements/ProductsElement";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchProducts } from "../redux/actions/productAction";

const SearchResultPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { searchResult } = useSelector((state) => state.searchResult);

  useEffect(() => {
    console.log("search params", query);
    dispatch(searchProducts(query));
  }, [dispatch, query]);

  return (
    <section className="py-12 ">
      <div className="container mx-auto flex flex-wrap">
        {/* Filter section */}
        <div className="flex w-full md:w-[20%] lg:w-[25%]">
          <FilterBoxElement />
        </div>

        {/* Product section */}
        <div className="flex w-full md:w-[80%] lg:w-[75%]">
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-x-3 md:gap-x-5 lg:gap-x-7 gap-y-[60px] mb-[60px]">
            {searchResult.map((result, index) => {
              return <ProductsElement product={result} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultPage;
