import React from "react";

const PropertyHeader = ({ title, val, extraCN }) => {
  return (
    <div className={`flex items-center space-x-2 text-slate-600 ${extraCN}`}>
      <h3 className="font-semibold text-gray-900">{title}:</h3>
      <p>{val}</p>
    </div>
  );
};

export default PropertyHeader;
