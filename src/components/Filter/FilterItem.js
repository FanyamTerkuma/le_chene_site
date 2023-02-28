import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterItem = ({ title, options, selectedFilter, setselectedFilter }) => {
  const [isOpen, setisOpen] = useState(false);

  const handleFilterSelect = (pickedOpt) => {
    if (title === "Discount") {
      return setselectedFilter({
        ...selectedFilter,
        [title]: pickedOpt,
      });
    }

    if (selectedFilter[title].includes(pickedOpt)) {
      setselectedFilter({
        ...selectedFilter,
        [title]: selectedFilter[title].filter((item) => item !== pickedOpt),
      });
    } else {
      setselectedFilter({
        ...selectedFilter,
        [title]: [...selectedFilter[title], pickedOpt],
      });
    }
  };

  const checkStyle = (opt) => {
    if (title === "Discount")
      return selectedFilter[title] === opt
        ? "border-2 border-[#3a998e] bg-[#3a998e] text-white"
        : "border border-gray-400";

    return selectedFilter[title]?.includes(opt)
      ? "border-2 border-[#3a998e] bg-[#3a998e] text-white"
      : "border border-gray-400";
  };

  return (
    <div className="w-full mb-4 space-y-3 pt-1">
      <div className="font-[600] text-slate-800 flex items-center justify-between">
        <h4 className="text-sm">{title}</h4>
        {!isOpen ? (
          <MdKeyboardArrowDown
            className="cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          />
        ) : (
          <MdKeyboardArrowUp
            className="cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          />
        )}
      </div>

      {isOpen && (
        <div className="w-full flex gap-4 flex-wrap">
          {options.map((opt) => (
            <div
              className={`flex items-center text-xl cursor-pointer px-4 py-2 ${checkStyle(
                opt
              )}`}
              onClick={() => handleFilterSelect(opt)}
            >
              <p className={`text-xs font-medium`}>
                {opt}
                {title === "Discount" && "% and more"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterItem;
