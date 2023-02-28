import React from "react";
import GoogleLogo from "../../assets/svgs/google.svg";

const GoogleBtn = () => {
  return (
    <button className="shadow-lg flex items-center w-full space-x-2 justify-center py-2">
      <img src={GoogleLogo} alt="google" className="h-7 object-contain" />
      <h4 className="text-sm font-medium">Create Your New Account</h4>
    </button>
  );
};

export default GoogleBtn;
