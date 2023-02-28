import React from "react";
import PriceInfo from "./PriceInfo";

const OrderSummary = () => {
  return (
    <div className="w-full space-y-4 max-w-3xl p-4 border border-gray-300 rounded-md mx-auto">
      <h3 className="text-lg font-semibold">Your Order</h3>
      <ul className="text-sm text-gray-800 list-decimal list-inside">
        <li>Native Shirt (Xl, blue) x 2</li>
        <li>Full Corprate Suit (Xl, red) x 1</li>
        <li>Native Shirt (Md, green) x 4</li>
      </ul>

      <div className="pt-3 border-t space-y-3">
        <PriceInfo name="Subtotal" price={74000} />
        <PriceInfo name="Discount (%)" percent price={10} />
        <PriceInfo name="Tax" />
        <PriceInfo name="Total" price={74000 - 7400} />
      </div>
    </div>
  );
};

export default OrderSummary;
