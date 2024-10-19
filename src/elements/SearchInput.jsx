import React, { useCallback, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../features/Spinner";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../redux/actions/productAction";

const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchProduct, loading } = useSelector((state) => state.search);
  const [searchParams, setSearchParams] = useState("");

  const debounceSearch = useCallback(
    debounce((searchParams) => {
      dispatch(searchProducts(searchParams));
    }, 500),
    []
  );

  const handleInput = (event) => {
    setSearchParams(event.target.value);
  };

  const handleSearchClick = (query) => {
    // console.log("hasil click");
    // navigate(`/product/search/${query}`);
  };

  const handleSearchEnter = () => {
    navigate(`/product/search/${searchParams}`);
  };

  useEffect(() => {
    if (searchParams) {
      debounceSearch(searchParams);
    }
  }, [searchParams, debounceSearch]);

  console.log(searchProduct);

  return (
    <div className="relative min-w-[350px]">
      <form onSubmit={handleSearchEnter} className="flex items-center">
        <input
          type="search"
          className="block outline-none w-full py-2 px-2 md:px-5 text-sm text-gray-900 border border-gray-300 rounded-lg "
          placeholder="Cari Produk/Nama toko"
          value={searchParams}
          onChange={handleInput}
          required
        />
        <BsSearch className="absolute right-3 cursor-pointer" />
      </form>
      <div
        className={`${
          searchParams ? "h-auto" : "h-0"
        } absolute md:max-h-[300px] rounded-md top-12 bg-white shadow-xl transition-all duration-300 w-full overflow-y-auto `}
      >
        <div className="flex flex-col gap-y-4 py-4 px-4">
          {loading ? (
            <div className="flex  items-center justify-center py-4">
              <Spinner />
            </div>
          ) : (
            searchProduct.map((result, index) => {
              return (
                <button
                  onClick={() => handleSearchClick(result.title)}
                  className="flex items-center"
                  key={index}
                >
                  {result.title}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
