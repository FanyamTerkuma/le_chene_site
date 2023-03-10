import React from "react";
import ProductReview from "./ProductReview";

const ProductReviews = ({ reviews }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h3 className="font-semibold text-lg">
        Customer Reviews({reviews.length})
      </h3>

      <div className="mt-6 px-5 border divide-y divide-gray-300 border-[#26867B] rounded-md">
        {reviews.map((review) => (
          <ProductReview reviewData={review} />
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
