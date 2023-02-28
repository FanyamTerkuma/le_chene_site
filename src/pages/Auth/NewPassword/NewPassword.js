import React from "react";
import NewPasswordLogo from "../../../assets/svgs/NewPassword.svg";
import AuthButton from "../../../components/Button/AuthButton";
import AuthInput from "../../../components/Input/AuthInput";

const NewPassword = () => {
  return (
    <div className="AuthContentContainer">
      <img
        src={NewPasswordLogo}
        alt="reset password"
        className="h-5/6 object-contain"
      />

      <div className="w-full max-w-xl h-5/6 space-y-4">
        <h2 className="AuthPageTitle">Create New Password</h2>
        <p className="AuthPageDesc">
          Login to your account using registered credentials
        </p>

        <div className="py-6 space-y-10">
          <AuthInput type="Email" />
          <AuthInput type="Password" />
        </div>

        <AuthButton title="Create" />
      </div>
    </div>
  );
};

export default NewPassword;
