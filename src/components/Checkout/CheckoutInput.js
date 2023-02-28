import React from "react";

const CheckoutInput = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="w-full">
      <p className="text-xs font-medium">{label}</p>
      <input
        placeholder={placeholder}
        type={type}
        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-green-600"
      />
    </div>
  );
};

export default CheckoutInput;
