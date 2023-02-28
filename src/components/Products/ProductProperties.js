import React, { useState } from "react";
import PropertyHeader from "./PropertyHeader";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductProperties = ({ selectedProduct, setselectedProduct }) => {
  const incrementQuantity = () => {
    setselectedProduct({
      ...selectedProduct,
      quantity: selectedProduct.quantity + 1,
    });
  };

  const decrementQuantity = () => {
    if (selectedProduct.quantity <= 0) return;

    setselectedProduct({
      ...selectedProduct,
      quantity: selectedProduct.quantity - 1,
    });
  };

  const changeSize = (size) => {
    setselectedProduct({
      ...selectedProduct,
      currentSize: size,
    });
  };

  const changeColor = (color) => {
    setselectedProduct({
      ...selectedProduct,
      currentColor: color,
    });
  };

  return (
    <div className="w-full p-3 rounded-md border border-[#26867B] space-y-3">
      <div>
        <PropertyHeader
          title="Colors available"
          val={selectedProduct?.currentColor}
        />
        <div className="flex flex-wrap">
          {selectedProduct?.colors.map((color) => {
            let style = `h-12 w-12 rounded-lg m-2 cursor-pointer border border-gray-400`;
            return (
              <div
                onClick={() => changeColor(color)}
                className={style}
                style={{ background: color }}
              />
            );
          })}
        </div>
      </div>

      <div>
        <PropertyHeader title="Size" val={selectedProduct?.currentSize} />

        <div className="flex flex-wrap">
          {selectedProduct?.sizes.map((size) => (
            <h3
              onClick={() => changeSize(size)}
              className={`px-4 py-2 cursor-pointer w-max font-semibold text-xs border m-1 rounded-md ${
                size === selectedProduct.currentSize
                  ? "text-[#26867B] border-[#26867B] bg-green-200"
                  : "border-gray-400 text-gray-500"
              }`}
            >
              {size}
            </h3>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <PropertyHeader title="Quantity" />

        <div className="flex items-center space-x-2 text-sm">
          <div
            onClick={decrementQuantity}
            className="rounded-full p-1 border text-[#26867B] border-[#26867B] cursor-pointer"
          >
            <AiOutlineMinus />
          </div>

          <p>{selectedProduct?.quantity}</p>

          <div
            onClick={incrementQuantity}
            className="rounded-full p-1 border text-[#26867B] border-[#26867B] cursor-pointer"
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProperties;
