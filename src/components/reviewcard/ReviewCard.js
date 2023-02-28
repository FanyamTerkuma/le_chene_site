import React from "react";
import { Rating } from "@mui/material";

//dummy data

function ReviewCard({ review }) {
  return (
    <div className="flex flex-col items-center justify-evenly gap-3 md:min-w-[22vw] w-[100vw] h-[35vh] md:w-[21vw] md:h-[56vh] rounded-xl bg-white shadow-custom-shadow p-8 md:p-3 ">
      <div
        className="w-[3em] h-[4em]  md:w-[6vw] md:h-[14vh] rounded-full bg-gray-400 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${review.displayPhoto})`,
          objectFit: "contain",
        }}
      ></div>
      <div className="w-full h-3/5 md:text-lg font-normal text-center overflow-scroll invisible-scroll">
        <p>{review.review}</p>
      </div>
      <div className="h-1/5 flex flex-col gap-2 items-center justify-center w-full">
        <div className="font-semibold text-sm md:text-base text-center w-full">
          username
        </div>
        <span className="flex gap-1 items-center">
          {review.ratingScore}
          <Rating value={review.ratingScore} precision={0.5} readOnly></Rating>
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
