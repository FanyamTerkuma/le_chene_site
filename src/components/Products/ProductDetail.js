import React, { useEffect } from "react";
import { useState } from "react";
import { products, reviews } from "../../data/data";
import ProductProperties from "./ProductProperties";
import PropertyHeader from "./PropertyHeader";
import { safeTransactionLogo } from "../../assets";
import Button from "../Button/Button";
import { MdOutlineLocationOn } from "react-icons/md";
import { Rating } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";
import ProductReviews from "../Reviews/ProductReviews";
import Recommendations from "../Recommend/Recommendations";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  toggleWishlist,
} from "../../reduxKit/reducer";

const productColors = ["blue", "brown", "orange", "green"];
const sizes = ["xl", "lg", "m", "xxl", "s"];
const product = products[0];

const ProductDetail = () => {
  const [selectedProduct, setselectedProduct] = useState({
    ...products[0],
    quantity: 1,
    colors: productColors,
    sizes,
    currentColor: productColors[0],
    currentSize: sizes[0],
  });

  const dispatch = useDispatch();
  const { wishlist, cart } = useSelector((state) => state.app);

  const checkWishList = () => {
    let exists = wishlist.find((item) => item.id == selectedProduct.id);

    if (exists) return true;
    return false;
  };

  const handleAddToWishList = () => {
    dispatch(toggleWishlist(selectedProduct));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(selectedProduct));
  };

  const checkCart = () => {
    let exists = cart.find((item) => item.id == selectedProduct.id);

    if (exists) return true;
    return false;
  };

  return (
    <div className="w-full bg-white mt-5">
      <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
        <img
          src={product.image}
          alt="product"
          className="w-[90%] h-[35rem] rounded-md shadow-lg"
        />

        <div className="space-y-4">
          <div className="space-y-3 p-3 border border-[#26867B] rounded-md">
            <PropertyHeader title="Order" val="02213" />

            <h3 className="text-sm font-medium text-gray-800">
              {product.description}
            </h3>

            <h4 className="font-bold text-gray-800">
              {product.currency} {product.price}
            </h4>

            <div className="flex items-center">
              <p className="text-gray-500 text-sm">4.5</p>
              <Rating readOnly value={3.5} size="small" />
              <p className="text-gray-500 text-xs ml-2">&bull; 30 sold</p>
            </div>
          </div>

          <ProductProperties
            selectedProduct={selectedProduct}
            setselectedProduct={setselectedProduct}
          />

          <div className="border border-[#26867B] rounded-md p-3 space-y-3">
            <div className="flex items-center space-x-1 text-xs text-gray-800">
              <h4 className="font-bold text-gray-900">Shipping to: </h4>
              <MdOutlineLocationOn />
              <p>
                No 2 Lateef Agbaje street, Ago Palace Way, Lagos State, Nigeria.
              </p>
            </div>

            <PropertyHeader
              title={"Estimated Delivery"}
              val={"02 Aug 2022"}
              extraCN="text-xs"
            />
          </div>

          <div className="p-3 space-x-2 flex items-center border border-[#26867B] text-[#26867B] rounded-md">
            <img
              src={safeTransactionLogo}
              alt="safe transaction"
              className="h-6 object-contain"
            />
            <p className="text-sm text-gray-700">
              75-Day Buyer Protection Money back guarantee
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              onClick={handleAddToCart}
              title="Add to cart"
              width="w-32"
            />

            <Button title="Buy Now" width="w-32" />

            {checkWishList() ? (
              <button
                onClick={handleAddToWishList}
                className="text-[#26867B] w-max rounded-lg hover:bg-green-200 text-sm px-3 py-2"
              >
                Remove from wishlist
              </button>
            ) : (
              <Button
                transparent
                onClick={handleAddToWishList}
                title="Wishlist"
                width="w-32"
                icon={<AiOutlineHeart />}
              />
            )}
          </div>
        </div>
      </div>

      <ProductReviews reviews={reviews} />
      <Recommendations recommendations={products} />
    </div>
  );
};
export default ProductDetail;
