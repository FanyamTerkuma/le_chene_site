import React from "react";
import "./FormHeader.css";

const FormHeader = (props) => {
  return (
    <div className="header_container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default FormHeader;
