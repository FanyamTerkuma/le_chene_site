import { pngs } from "../../assets";
import ShopnowButton from "../Button/shopnowbutton/ShopNowButton";

function Hero() {
  return (
    <div className="w-full flex relative">
      <div className="ml-32 flex items-center w-full max-w-4xl space-x-5 mt-10">
        <div className="font-normal md:text-xl w-2/3">
          <h2 className="font-bold md:text-3xl ">
            {/* product title */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, animi!
          </h2>
          <p className="text-base my-5">
            {/* product description */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            cumque placeat recusandae cupiditate libero magnam culpa nobis fuga
            nostrum enim, rerum illo dolores similique quis eius sed harum
            quibusdam quae.
          </p>

          <ShopnowButton width="10vw" />
        </div>

        <img
          className="rounded-l-3xl w-[20vw] h-[60vh] shadow-lg"
          src={pngs.landingImage1}
          alt="hero display"
        />
      </div>

      <aside className="hidden md:block md:absolute z-[-10] w-[25em] h-[140vh] right-4 top-[-90%] bg-[#3FE0D0]">
        {/* set to hidden on smaller screens temporarily */}
        <div className="hidden md:flex flex-col mt-[70vh] w-72 ml-auto mr-5">
          <div className="flex font-bold mb-6 space-x-4">
            <img
              className="object-contain"
              src={pngs.right_arrow}
              alt="a right-facing arrow"
            />

            <h2>01</h2>
          </div>

          <div className="flex flex-wrap text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, necessitatibus facilis autem doloremque molestias
              asperiores maiores. Praesentium animi quos velit distinctio. Et
              quae quos praesentium saepe excepturi pariatur doloribus iste.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Hero;
