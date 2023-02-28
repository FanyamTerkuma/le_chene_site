import React from "react";
import ResetPasswordLogo from "../../../assets/svgs/ForgotPassword.svg";
import AuthButton from "../../../components/Button/AuthButton";
import AuthInput from "../../../components/Input/AuthInput";

const ResetPassword = () => {
  return (
    <div className="AuthContentContainer">
      <img
        src={ResetPasswordLogo}
        alt="reset password"
        className="h-5/6 object-contain"
      />

      <div className="w-full max-w-xl h-5/6">
        <div className="w-full space-y-4">
          <h2 className="AuthPageTitle text-yellow-800">Forgot Password</h2>
          <p className="AuthPageDesc">
            Login to your account using registered credentials
          </p>
        </div>

        <AuthInput type="Email" style={"mt-8 mb-16"} />

        <AuthButton title="Send" />
      </div>
    </div>
  );
};

export default ResetPassword;
