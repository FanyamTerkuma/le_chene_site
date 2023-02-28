import React from "react";

const PaymentSelector = ({ chosenOption, setchosenOption }) => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-4">
        <div
          onClick={() => setchosenOption("cash")}
          className={`cursor-pointer w-4 h-4 flex items-center justify-center border ${
            chosenOption === "cash" ? "border-[#3a998e]" : "border-gray-500"
          } rounded-full`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              chosenOption === "cash" ? "bg-[#3a998e]" : "bg-gray-200"
            }`}
          />
        </div>

        <p>Pay on Delivery</p>

        <img
          src="https://www.freeiconspng.com/thumbs/dollar-icon-png/money-flat-money-png-15.png"
          alt="master"
          className="h-8 object-contain"
        />
      </div>

      <div className="flex items-center space-x-3">
        <div
          onClick={() => setchosenOption("card")}
          className={`cursor-pointer w-4 h-4 flex items-center justify-center border ${
            chosenOption === "card" ? "border-[#3a998e]" : "border-gray-500"
          } rounded-full`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              chosenOption === "card" ? "bg-[#3a998e]" : "bg-gray-200"
            }`}
          />
        </div>

        <p>Pay with Card</p>

        <div className="flex items-center space-x-3">
          <img
            src="https://pngimg.com/uploads/mastercard/mastercard_PNG25.png"
            alt="master"
            className="h-10"
          />

          <img
            src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
            alt="visa"
            className="h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSelector;
