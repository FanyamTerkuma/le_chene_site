import React from "react";
import RecommendedItem from "./RecommendedItem";

const Recommendations = ({ recommendations }) => {
  return (
    <div className="w-full px-4 my-10">
      <h3 className="max-w-5xl mx-auto mb-6 font-semibold text-lg">
        Recommended For Me
      </h3>

      <div className="flex items-center space-x-5 max-w-full overflow-x-scroll hidden-scrollbar">
        {recommendations?.map((item) => (
          <RecommendedItem
            image={item?.image}
            id={item?.id}
            price={item?.price}
            currency={item?.currency}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
