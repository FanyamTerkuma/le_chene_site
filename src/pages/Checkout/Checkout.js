import React from "react";
import { useState } from "react";
import { CheckBox } from "../../components";
import CheckoutInput from "../../components/Checkout/CheckoutInput";
import OrderSummary from "../../components/Checkout/OrderSummary";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Checkout = () => {
  const [checkoutInfo, setcheckoutInfo] = useState({
    firstname: "",
    lastname: "",
    address: "",
    apartmentDetail: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
  });
  const [phoneNumber, setphoneNumber] = useState("");

  // const handleChange = (e, name) => {
  //   setcheckoutInfo({
  //     ...checkoutInfo,
  //     [name]: e.target.value,
  //   });
  // };

  return (
    <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto my-8">
      <div className="w-full max-w-2xl p-4">
        <h3 className="text-lg font-semibold">Delivery Information</h3>

        <form className="mt-5 space-y-4">
          <div className="flex items-center space-x-4">
            <CheckoutInput label="FirstName" />
            <CheckoutInput label="Lastname" />
          </div>

          <div className="phoneInput">
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setphoneNumber}
            />
          </div>

          <CheckoutInput label="Address" />
          <CheckoutInput label="Apartment, Suite, etc" />
          <CheckoutInput label="City" />

          <div className="flex items-center space-x-4">
            <CheckoutInput label="Country" />
            <CheckoutInput label="State" />
            <CheckoutInput label="Zip Code" />
          </div>
        </form>

        <div className="w-full max-w-xl text-xs mt-8">
          <CheckBox
            label={
              "Information supplied would be used to process your order, support your experience throughout this website and for other purposes in accordance with our privacy policies"
            }
          />
        </div>
      </div>

      <div>
        <OrderSummary />
        <button className="px-3 py-1 text-sm bg-[#3a998e] text-white mt-10">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
