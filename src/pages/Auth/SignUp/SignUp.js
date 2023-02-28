import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpLogo from "../../../assets/svgs/Signup.svg";
import AuthButton from "../../../components/Button/AuthButton";
import AuthInput from "../../../components/Input/AuthInput";

const Signup = () => {
  const navigation = useNavigate();

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

        <div className="flex items-center text-sm space-x-2 w-full max-w-md mt-4 justify-end">
          <h4 className="text-slate-600">Already Have an account </h4>
          <p
            onClick={() => navigation("/login")}
            className="font-medium text-[#26867B] cursor-pointer"
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
