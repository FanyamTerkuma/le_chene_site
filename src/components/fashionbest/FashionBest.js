import React from "react";
import { pngs } from "../../assets";

function FashionBest() {
  return (
    <div className="flex items-center justify-around space-x-4 w-full max-w-5xl mx-auto mb-36">
      <div className="max-w-[30rem] space-y-4">
        <h1 className=" text-bold font-bold text-2xl md:text-3xl">
          Fashion Best Since 2017
        </h1>
        <p className="text-base md:text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ea corporis, debitis at laborum dolores reprehenderit iusto repellat
          placeat autem provident quaerat soluta unde. Dicta nisi praesentium
          beatae esse quaerat.
        </p>
      </div>

      <img
        className="h-[20rem] rounded-r-3xl shadow-lg"
        src={pngs.landingImage2}
        alt="dp"
      />
    </div>
  );
}

export default FashionBest;
