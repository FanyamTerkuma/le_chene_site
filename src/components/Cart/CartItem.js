import React from "react";
import { useState } from "react";
import CheckBox from "../Input/CheckBox";
import { RiHeartAddLine } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "../../reduxKit/reducer";

const CartItem = ({ product, selectedItems, setselectedItems }) => {
  const dispatch = useDispatch();

  const checkForItem = () => {
    let exists = selectedItems.find((item) => item.id === product.id);

    if (exists) return true;

    return false;
  };

  const toggleCheck = () => {
    if (checkForItem()) {
      setselectedItems(selectedItems.filter((item) => item.id !== product.id));
    } else {
      setselectedItems([...selectedItems, product]);
    }
  };

  return (
    <div className="flex space-x-4 mb-6 p-4 border-[#3a998e] border rounded-lg">
      <CheckBox value={checkForItem()} onChange={toggleCheck} />

      <div className="flex-grow flex items-center space-x-5">
        <img
          src={product?.image}
          alt="image"
          className="h-20 w-20 object-cover rounded-lg shadow-md"
        />

        <div className="space-y-3">
          <h3 className="text-slate-700">{product?.product_name}</h3>

          <button className="bg-[#3a998e] py-1 text-white font-medium text-sm px-4 w-max rounded-lg">
            white
          </button>

          <h4 className="font-medium">N{product?.price}</h4>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <div className="flex items-center space-x-3 text-xl text-gray-800">
          <RiHeartAddLine className="cursor-pointer" />
          <FiTrash2
            onClick={() => dispatch(removeFromCart(product?.id))}
            className="cursor-pointer hover:text-red-500"
          />
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <div
            onClick={() => dispatch(decreaseItemQuantity(product.id))}
            className="rounded-full p-1 border text-gray-500 border-gray-500 cursor-pointer"
          >
            <AiOutlineMinus />
          </div>

          <p>{product?.quantity}</p>

          <div
            onClick={() => dispatch(increaseItemQuantity(product.id))}
            className="rounded-full p-1 border text-gray-500 border-gray-500 cursor-pointer"
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
