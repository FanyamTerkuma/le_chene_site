import React from "react";

const FooterItem = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      {icon && icon}
      <h4 className="text-sm text-slate-800 cursor-pointer hover:underline">
        {name}
      </h4>
    </div>
  );
};

export default FooterItem;
