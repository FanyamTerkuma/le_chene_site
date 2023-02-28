import React from "react";
import {Link} from 'react-router-dom'

const RecommendedItem = ({ image, price, id , currency}) => {
  return (
    <div className="min-w-max">
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt={`recommendation ${id + 1}`}
        className="h-40 w-48 object-cover rounded-md shadow-lg"
      />
      </Link>

      <h4 className="pl-2 font-semibold text-gray-900 mt-2">{currency} {price}</h4>
    </div>
  );
};

export default RecommendedItem;
