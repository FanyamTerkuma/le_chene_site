import React from "react";

const AuthButton = ({ title }) => {
  return (
    <button className="w-full max-w-md py-2 text-white bg-[#26867B] rounded-lg text-center">
      {title}
    </button>
  );
};

export default AuthButton;
