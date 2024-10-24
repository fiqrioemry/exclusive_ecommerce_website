import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../redux/action/productAction";
import ProductsCardElement from "../elements/ProductsCardElement";
import ProductsCardLoading from "../features/loading/ProductsCardLoading";
import FilterBoxProducts from "../components/product_search/FilterBoxProducts";
import ProductNotFound from "../assets/product_not_found.png";

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
        {/* Filter section */}
        <div className="flex w-full max-h-[475px] lg:w-[25%] px-4 md:px-0">
          <FilterBoxProducts searchParams={params} />
        </div>

        {/* Product section */}
        <div className="flex w-full lg:w-[75%] px-2 md:px-0">
          {loading ? (
            <ProductsCardLoading />
          ) : searchResults.length === 0 ? (
            <div className="px-4 w-full">
              <div className="flex space-x-6 rounded-md py-4 px-4 bg-white shadow-xl">
                <div className="flex items-center justify-center">
                  <img src={ProductNotFound} alt="" />
                </div>
                <div className="space-y-4 flex flex-col  items-center">
                  <div className="text-2xl font-semibold">
                    Oops, Product Nggak ditemukan
                  </div>
                  <div className="text-md font-light">
                    Coba ubah keyword pencarian atau kurangi filter anda
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ProductsCardElement products={searchResults} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSearchPage;
