import React from "react";
import { useState } from "react";
import { BsFilterCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "../../data/data";
import Button from "../Button/Button";
import FilterItem from "./FilterItem";

const Filter = () => {
  const [isOpen, setisOpen] = useState(false);
  const [selectedFilter, setselectedFilter] = useState({
    Price: { min: null, max: null },
    Size: [],
    Discount: [],
    Color: [],
  });

  const toggleFilterDisplay = () => {
    setisOpen(!isOpen);
  };

  const handlePriceChange = (e) => {
    setselectedFilter({
      ...selectedFilter,
      Price: {
        ...selectedFilter.Price,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleClose = () => {
    setisOpen(false);
  };

  const handleClear = () => {
    setselectedFilter({
      Price: { min: null, max: null },
      Size: [],
      Discount: null,
      Color: [],
    });
  };

  return (
    <div className="w-full space-y-4 relative">
      <div
        onClick={toggleFilterDisplay}
        className="flex cursor-pointer space-x-2 items-center w-max rounded-lg px-4 py-2 text-[#3a998e] border border-[#3a998e]"
      >
        <h4 className="text-sm">Filter </h4>
        <BsFilterCircle />
      </div>

      {isOpen && (
        <div className="absolute max-w-lg bg-white z-30 shadow-lg rounded-lg p-3 border divide-y">
          <div className="flex items-center justify-between mb-5">
            <Button
              onClick={handleClear}
              title="clear"
              transparent
              width={"w-20"}
            />
            <AiOutlineClose
              onClick={handleClose}
              className="cursor-pointer hover:text-red-500"
            />
          </div>

          <div className="space-y-2 mb-4">
            <h2>Price (₦)</h2>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="min (₦)"
                name="min"
                onChange={handlePriceChange}
                value={selectedFilter.Price.min}
                className="w-40 rounded-md text-sm outline-none p-2 border border-[#3a998e]"
              />

              <p className="text-xl">-</p>

              <input
                type="number"
                value={selectedFilter.Price.max}
                name="max"
                onChange={handlePriceChange}
                placeholder="max (₦)"
                className="w-40 rounded-md text-sm p-2 outline-none border border-[#3a998e]"
              />
            </div>
          </div>

          <FilterItem
            selectedFilter={selectedFilter}
            setselectedFilter={setselectedFilter}
            title={"Size"}
            options={["XXL", "XL", "L", "M", "S"]}
          />
          <FilterItem
            selectedFilter={selectedFilter}
            setselectedFilter={setselectedFilter}
            title={"Discount"}
            options={[50, 30, 20, 10]}
          />
          <FilterItem
            selectedFilter={selectedFilter}
            setselectedFilter={setselectedFilter}
            title={"Color"}
            options={colors}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
