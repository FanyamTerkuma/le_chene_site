import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginLogo from "../../../assets/svgs/Login.svg";
import AuthButton from "../../../components/Button/AuthButton";
import GoogleBtn from "../../../components/Button/GoogleBtn";
import AuthInput from "../../../components/Input/AuthInput";
import CheckBox from "../../../components/Input/CheckBox";
import { login } from "../../../reduxKit/reducer";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: "Ebireni david" }));
    navigation("/");
  };

  return (
    <div className="AuthContentContainer">
      <img src={LoginLogo} alt="login" className="h-5/6 object-contain" />

      <div className="w-full max-w-xl h-5/6 space-y-4">
        <h2 className="AuthPageTitle">Login</h2>
        <p className="AuthPageDesc">
          Login to your account using registered credentials
        </p>

        <AuthInput type="Email" />
        <AuthInput type="Password" placeholder="Enter Password" />

        <div className="flex items-center justify-between max-w-md">
          <CheckBox label="Remember Me" />

          <div className="flex items-ccenter space-x-2 text-sm">
            <h4 className="text-slate-600">Forgot Password</h4>
            <p
              onClick={() => navigation("/resetpassword")}
              className="font-medium text-[#26867B] cursor-pointer"
            >
              Click here
            </p>
          </div>
        </div>

        <AuthButton title={"Login"} onClick={handleLogin} />

        <div className="w-full max-w-md mt-10 space-y-4">
          <div className="flex items-center text-sm space-x-2 mx-auto w-max">
            <h4 className="text-slate-600">Dont Have an account yet </h4>
            <p
              onClick={() => navigation("/signup")}
              className="font-medium text-[#26867B] cursor-pointer"
            >
              Signup
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="divider" />
            <p>Or continue with</p>
            <div className="divider" />
          </div>

          <GoogleBtn />
        </div>
      </div>
    </div>
  );
};

export default Login;
