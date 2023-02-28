import React from "react";

const PriceInfo = ({ name, price = 0, percent }) => {
  return (
    <div
      className={`flex items-center w-full max-w-[15rem] justify-between ${
        name !== "Total" ? "text-sm text-gray-600" : "text-lg border-t pt-3"
      }`}
    >
      <p className="">{name}</p>
      <h4 className="font-semibold">
        {percent ? "%" : "₦"} {new Intl.NumberFormat().format(price)}
      </h4>
    </div>
  );
};

export default PriceInfo;
