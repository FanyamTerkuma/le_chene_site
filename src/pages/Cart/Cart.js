import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, CartItem, CheckBox, Recommendations } from "../../components";
import { products } from "../../data/data";

const Cart = () => {
  const [selectedItems, setselectedItems] = useState([]);

  const { cart } = useSelector((state) => state.app);

  const checkSelectedItem = () => {
    if (cart.length === 0) return false;

    if (selectedItems.length === cart.length) return true;
    return false;
  };

  const toggleSelectAll = () => {
    if (checkSelectedItem()) {
      setselectedItems([]);
    } else {
      setselectedItems(cart);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full min-h-[70vh] px-4 max-w-5xl mx-auto">
      <h3 className="text-lg font-semibold mb-8">Cart</h3>

      <div className="w-full rounded-lg border-[#3a998e] border py-3">
        <h4 className="font-semibold p-3">Shopping Cart ({cart.length})</h4>

        <div className="p-3 border-gray-400 border-t">
          <CheckBox
            label="Select All Items"
            value={checkSelectedItem()}
            onChange={toggleSelectAll}
          />
        </div>
      </div>

      <div className="mt-10">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            selectedItems={selectedItems}
            setselectedItems={setselectedItems}
          />
        ))}
      </div>

      <div className="w-full space-y-3 max-w-md ml-auto border-[#3a998e] border p-3 rounded-lg">
        <h3 className="text-sm font-medium">Summary</h3>

        <div className="flex font-medium text-sm items-center justify-between">
          <h4>Total Amount</h4>
          <p className="text-gray-600">N 6,500</p>
        </div>

        <div className="w-max ml-auto">
          <Button title="Checkout" />
        </div>
      </div>

      <Recommendations recommendations={products} />
    </div>
  );
};

export default Cart;
