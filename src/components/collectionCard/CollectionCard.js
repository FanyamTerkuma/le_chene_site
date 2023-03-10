import React from "react";
import ShopnowButton from "../Button/shopnowbutton/ShopNowButton";

const CollectionCard = ({ image }) => {
  return (
    <div className="w-full">
      <img
        src={image}
        alt="collection"
        className="rounded-lg w-full aspect-square"
      />
      <ShopnowButton width="100%" marginTop={-20} />
    </div>
  );
};

export default CollectionCard;
