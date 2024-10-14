import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <form className="relative flex items-center min-w-[225px] w-full">
        <input
          type="search"
          className="block outline-none w-full py-2 px-2  text-sm bg-[#F5F5F5] text-gray-900 border border-gray-300 rounded-md "
          placeholder="What are you looking ?"
          required
        />
        <BsSearch className="absolute right-3 " />
      </form>
    </>
  );
};

export default SearchInput;
