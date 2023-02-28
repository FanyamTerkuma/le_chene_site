import React, { useState } from "react";
import { AppPath, Filter } from "../../components";
import { categories, products } from "../../data/data";
import Slider from "react-slick";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

function SamplePrevArrow({ onClick }) {
  return (
    <BsFillArrowLeftCircleFill
      className="absolute top-[40%] left-[-5%] cursor-pointer text-[#3a998e] text-2xl"
      onClick={onClick}
    />
  );
}

function SampleNextArrow({ onClick }) {
  return (
    <BsFillArrowRightCircleFill
      className="absolute top-[40%] right-[-5%] text-[#3a998e] text-2xl cursor-pointer"
      onClick={onClick}
    />
  );
}

const Fashion = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const navigate = useNavigate();
  const { name } = useParams();

  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setslideIndex(next),
    centerMode: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const handleCategorySelect = (type) => {
    return navigate(`/category/${name}/${type}`);
  };

  return (
    <div>
      <div className="w-full space-y-4 max-w-4xl mx-auto">
        <AppPath />
        <Filter />
      </div>

      <div className="mx-auto max-w-4xl mt-5 mb-10">
        <Slider {...settings}>
          {categories[name.toLowerCase()]?.map((collection, index) => (
            <div
              key={index}
              onClick={() => handleCategorySelect(collection)}
              className={`bg-white shadow-lg p-4 border transition-all duration-500 ease-out cursor-pointer  rounded-md ${
                slideIndex === index
                  ? "scale-95 border-[#3a998e]"
                  : "blur-sm scale-75 border-gray-300"
              }`}
            >
              <img src={products[0].image} className="h-[18rem] w-full" />
              <h4 className="mt-4 font-semibold">{collection}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Fashion;
