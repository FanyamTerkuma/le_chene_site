import React from "react";
import { pngs } from "../../assets";
import ShopnowButton from "../Button/shopnowbutton/ShopNowButton";
import CountDown from "../countdown/CountDown";

import SectionLabel from "../sectionlabel/SectionLabel";

function DealOfTheDay() {
  return (
    <div className="bg-[#3FE0D0] flex py-8 items-center justify-center mb-36">
      <div className="w-full max-w-5xl flex items-center justify-around">
        <img
          src={pngs.landingImage3}
          className="object-contain  h-[30rem] shadow-lg rounded-t-full"
          alt=" deals of the day listd products"
        />

        <div className="space-y-8">
          <SectionLabel
            title="Deal of The day"
            uncenter
            description="desc lorem ipsum again"
          />

          <CountDown />

          <ShopnowButton width="100%" />
        </div>
      </div>
    </div>
  );
}

export default DealOfTheDay;
