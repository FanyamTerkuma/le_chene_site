import React, { useState } from "react";
import CheckoutInput from "./CheckoutInput";
import PaymentSelector from "./PaymentSelector";

const PaymentDetails = () => {
  const [chosenOption, setchosenOption] = useState("cash");
  return (
    <div className="w-full mt-6 space-y-4 max-w-3xl p-4 border border-gray-300 rounded-md mx-auto">
      <h3 className="font-semibold text-lg">Payment Details</h3>

      <PaymentSelector
        chosenOption={chosenOption}
        setchosenOption={setchosenOption}
      />

      <div>
        <CheckoutInput placeholder="**** **** ****" label="Card Number" />
        <div className="w-full flex items-center space-x-5 mt-4">
          <CheckoutInput type="date" label="Expiry Date" />
          <CheckoutInput placeholder="CVV" label="CVV" />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
