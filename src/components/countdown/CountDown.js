import React from "react";

function CountDown() {
  return (
    <div className="flex gap-3 md:gap-4">
      <div className="flex-all-centered bg-white w-[3em] h-[4em] md:w-[6em] md:h-[6em]">
        <span className="fullwidth-flex-center font-semibold md:text-4xl">
          04
        </span>
        <span className="fullwidth-flex-center">Day</span>
      </div>
      <div className="flex-all-centered bg-white w-[3em] h-[4em] md:w-[6em] md:h-[6em]">
        <span className="fullwidth-flex-center font-semibold md:text-4xl ">
          10
        </span>
        <span className="fullwidth-flex-center">Hour</span>
      </div>
      <div className="flex-all-centered bg-white w-[3em] h-[4em] md:w-[6em] md:h-[6em]">
        <span className="fullwidth-flex-center font-semibold md:text-4xl">
          25
        </span>
        <span className="fullwidth-flex-center">Minute</span>
      </div>
    </div>
  );
}

export default CountDown;
