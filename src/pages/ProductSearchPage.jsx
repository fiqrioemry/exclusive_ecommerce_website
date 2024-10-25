import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../redux/action/productAction";
import ProductsCardElement from "../elements/ProductsCardElement";
import ProductsCardLoading from "../features/loading/ProductsCardLoading";
import FilterBoxProducts from "../components/product_search/FilterBoxProducts";
import ProductNotFound from "../components/product_search/ProductNotFound";

const ProductSearchPage = () => {
  const { params } = useParams();
  const dispatch = useDispatch();
  const { searchResults, loading } = useSelector(
    (state) => state.searchResults
  );

  useEffect(() => {
    dispatch(getSearchResults(params));
  }, [dispatch, params]);

  return (
    <section className="py-12 ">
      <div className="container mx-auto flex flex-wrap">
        {/* 1. Filter box area */}
        <div className="flex w-full max-h-[475px] lg:w-[25%] px-4 md:px-0">
          <FilterBoxProducts searchParams={params} />
        </div>

        {/* 2. Product display area */}
        <div className="flex w-full lg:w-[75%] px-2 md:px-0">
          {loading ? (
            <ProductsCardLoading />
          ) : searchResults.length === 0 ? (
            <ProductNotFound />
          ) : (
            <ProductsCardElement products={searchResults} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSearchPage;
