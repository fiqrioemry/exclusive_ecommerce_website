import debounce from "lodash/debounce";
import { BsSearch } from "react-icons/bs";
import Spinner from "../features/Spinner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInputResult } from "../redux/actions/productAction";
import React, { useCallback, useEffect, useState } from "react";

const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [closeInput, setCloseInput] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const { inputResults, loading } = useSelector((state) => state.inputResults);

  const handleInput = (event) => {
    setCloseInput(true);
    setSearchParams(event.target.value);
  };

  const handleSearchClick = (searchParams) => {
    setCloseInput(false);
    navigate(`/product/search/${searchParams}`);
  };

  const debounceSearch = useCallback(
    debounce((searchParams) => {
      dispatch(getInputResult(searchParams));
    }, 500),
    []
  );

  const handleSearchEnter = () => {
    navigate(`/product/search/${searchParams}`);
  };

  // run effect
  useEffect(() => {
    setResults(inputResults);
  }, [inputResults]);

  useEffect(() => {
    if (searchParams) {
      setResults([]);
      debounceSearch(searchParams);
    }
  }, [searchParams, debounceSearch]);

  return (
    <div className="relative min-w-[350px]">
      <form onSubmit={handleSearchEnter} className="flex items-center">
        <input
          type="search"
          className="block outline-none w-full py-2 px-2 md:px-5 text-sm text-gray-900 border border-gray-300 rounded-lg "
          placeholder="Cari produk yang kamu inginkan"
          value={searchParams}
          onChange={handleInput}
          required
        />
        <BsSearch className="absolute right-3 cursor-pointer" />
      </form>
      <div
        className={`${
          searchParams && closeInput ? "h-auto" : "h-0"
        } absolute md:max-h-[300px] rounded-md top-12 bg-white shadow-xl transition-all duration-300 w-full overflow-y-auto `}
      >
        <div className="flex flex-col gap-y-4 py-4 px-4">
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <Spinner />
            </div>
          ) : (
            results.map((result, index) => {
              return (
                <button
                  onClick={() => handleSearchClick(result.title)}
                  className="flex items-center"
                  key={index}
                >
                  {result.title.slice(0, 30) + "..."}
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
