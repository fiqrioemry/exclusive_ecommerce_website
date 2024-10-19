import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterBoxElement from "../elements/FilterBoxElement";
import { getProductBySearch } from "../redux/actions/productAction";
import { ProductsCardElement } from "../elements/ProductsCardElement";
import ProductsCardLoading from "../features/ProductsCardLoading";

const SearchResultPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { searchResults, loading } = useSelector(
    (state) => state.searchResults
  );

  useEffect(() => {
    dispatch(getProductBySearch(query));
  }, [dispatch, query]);

  return (
    <section className="py-12 ">
      <div className="container mx-auto flex flex-wrap">
        {/* Filter section */}
        <div className="flex w-full max-h-[475px] lg:w-[25%]">
          <FilterBoxElement searchParams={query} />
        </div>

        {/* Product section */}
        <div className="flex w-full lg:w-[75%]">
          {loading ? (
            <ProductsCardLoading />
          ) : searchResults.length === 0 ? (
            <div>tidak ada hasil</div>
          ) : (
            <ProductsCardElement products={searchResults} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResultPage;
