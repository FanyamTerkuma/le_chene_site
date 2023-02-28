import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AuthInput = ({ type, style, placeholder = "Enter Email Address" }) => {
  const [isVisible, setisVisible] = useState(false);

  const checkInputType = () => {
    if (type !== "Password") return "text";

    if (isVisible) {
      return "text";
    } else {
      return "password";
    }
  };

  const toggleVisibility = () => {
    return setisVisible(!isVisible);
  };

  return (
    <div
      className={`w-full px-2 max-w-md border-b-2 border-gray-300 flex items-center pb-2 ${style}`}
    >
      <input
        type={checkInputType()}
        placeholder={placeholder}
        className="flex-grow mr-2 outline-none bg-transparent"
      />

      {type == "Password" ? (
        <>
          {isVisible ? (
            <AiFillEye onClick={toggleVisibility} className="text-gray-600" />
          ) : (
            <AiFillEyeInvisible
              onClick={toggleVisibility}
              className="text-gray-600"
            />
          )}
        </>
      ) : (
        <BsFillPersonFill className="text-gray-600" />
      )}
    </div>
  );
};

export default AuthInput;
