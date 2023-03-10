import React from "react";
import SignUpLogo from "../../../assets/svgs/Signup.svg";
import AuthButton from "../../../components/Button/AuthButton";
import AuthInput from "../../../components/Input/AuthInput";

const Signup = () => {
  return (
    <div className="AuthContentContainer">
      <img
        src={SignUpLogo}
        alt="reset password"
        className="h-5/6 object-contain"
      />

      <div className="w-full max-w-xl h-5/6">
        <div className="w-full space-y-4">
          <h2 className="AuthPageTitle">Signup</h2>
          <p className="AuthPageDesc">
            Fill the Information to register the credentials
          </p>
        </div>

        <div className="pt-6 pb-10 space-y-8">
          <AuthInput type="Email" />
          <AuthInput type="Password" placeholder="Enter Password" />
          <AuthInput type="Password" placeholder="Confirm Password" />
        </div>

        <AuthButton title="Signup" />
      </div>
    </div>
  );
};

export default Signup;
