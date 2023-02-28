import React from "react";

function ShopnowButton(props) {
  return (
    <button
      className="py-3 px-6 text-white font-semibold rounded-lg bg-dark-teal cursor-pointer text-sm"
      style={{ ...props }}
    >
      Shop now
    </button>
  );
}

export default ShopnowButton;
