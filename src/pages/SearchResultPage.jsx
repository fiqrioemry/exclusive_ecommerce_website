import React, { useEffect } from "react";
import FilterBoxElement from "../elements/FilterBoxElement";
import { ProductsElement } from "../elements/ProductsElement";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchProducts } from "../redux/actions/productAction";
import { ProductsCardElement } from "../elements/ProductsCardElement";

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
        <div className="flex w-full lg:w-[25%]">
          <FilterBoxElement />
        </div>

        {/* Product section */}
        <div className="flex w-full  lg:w-[75%]">
          <div className="flex flex-wrap">
            {searchResult.map((result, index) => {
              return <ProductsCardElement product={result} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultPage;
