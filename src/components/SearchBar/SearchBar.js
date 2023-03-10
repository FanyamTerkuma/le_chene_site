import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="bg-gray-50 border border-[#3a998e] rounded-lg flex items-center w-[200px] sm:w-[400px] lg:w-[500px]">
      <input
        className="bg-transparent px-3 py-1 flex-grow focus:outline-none text-[#3A998E]"
        type="text"
        placeholder="Search for..."
      />
      <button className="rounded-r-md bg-[#3A998E] py-2 text-white w-16 flex justify-center">
        <AiOutlineSearch />
      </button>
    </div>
  );
};
export default SearchBar;
