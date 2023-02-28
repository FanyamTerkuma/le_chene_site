import React, { useState } from "react";
import ProductCard from "../Products/ProductCard";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function TabNav({ tabs, parent }) {
  const [activeTab, setActiveTab] = useState(0);

  const navigation = useNavigate();

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleViewMore = () => {
    if (parent === "Our category")
      return navigation(`/category/${tabs[activeTab].header}`);

    return navigation(`/products/${tabs[activeTab].header}`);
  };

  return (
    <div className="w-full mx-auto max-w-6xl px-4">
      <div className="flex space-x-4 items-center justify-center font-semibold md:text-2xl">
        {tabs.map((tab, tabIndex) => (
          <button
            key={tabIndex}
            onClick={() => changeTab(tabIndex)}
            className={`text-base font-semibold capitalize ${
              activeTab === tabIndex
                ? "selected-tab"
                : "border-b-2 border-white"
            }`}
          >
            {tab.header}
          </button>
        ))}
      </div>

      <div className="invisible-scroll flex w-full mt-6 space-x-4 mx-auto overflow-x-scroll  scroll-smooth ">
        {tabs[activeTab].component.map((item) => (
          <ProductCard productInfo={item} key={item.id} />
        ))}
      </div>

      <div
        onClick={handleViewMore}
        className="cursor-pointer text-sm text-gray-500 hover:text-green-500 w-max flex items-center ml-auto mt-5 hover:underline"
      >
        <h4>See more</h4>
        <MdArrowForwardIos />
      </div>
    </div>
  );
}

export default TabNav;
