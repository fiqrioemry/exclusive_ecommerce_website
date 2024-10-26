import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../redux/action/productAction";
import ProductsCardElement from "../elements/ProductsCardElement";
import ProductsCardLoading from "../features/loading/ProductsCardLoading";
import ProductNotFound from "../components/product_search/ProductNotFound";
import ProductPaginationElement from "../elements/ProductPaginationElement";
import FilterBoxProducts from "../components/product_search/FilterBoxProducts";

const ProductSearchPage = () => {
  const { params } = useParams();
  const dispatch = useDispatch();
  const { searchResults, loading } = useSelector(
    (state) => state.searchResults
  );
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * 8;
  const indexOfFirstProduct = indexOfLastProduct - 8;
  const currentProducts = searchResults.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(searchResults.length / 8);

  const handlePaginate = (value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(getSearchResults(params));
  }, [dispatch, params]);

  return (
    <section>
      <div className="container mx-auto">
        {/* 1. navigation path info */}
        <div className="py-6 lg:py-10 px-2 text-sm ">
          <div>Home / product / search / {params}</div>
        </div>
        <div className="flex flex-wrap">
          {/* 2. Filter box area */}
          <div className="flex w-full max-h-[475px] lg:w-[25%] px-4 md:px-0">
            <FilterBoxProducts searchParams={params} />
          </div>

          {/* 3. Product display area */}
          <div className="flex w-full lg:w-[75%] px-2 md:px-0">
            <div>
              {" "}
              {loading ? (
                <ProductsCardLoading />
              ) : searchResults.length === 0 ? (
                <ProductNotFound />
              ) : (
                <ProductsCardElement products={currentProducts} />
              )}
              <ProductPaginationElement
                currentPage={currentPage}
                totalPages={totalPages}
                handlePaginate={handlePaginate}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSearchPage;
