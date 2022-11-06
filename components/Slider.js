import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";

const Slider = () => {
  const [bgImage, setBgImage] = useState("coverpic.webp");
  return (
    <div
      className=" h-screen bg-no-repeat lg:h-screen lg:bg-no-repeat"
      style={{
        backgroundImage: `url(${`/${bgImage}`})`,
        backgroundSize: "100%",
        transition: "background-image 0.3s linear",
        WebkitTransition: "background-image 0.3s linear",
      }}
    >
      <Header />
      <div className=" flex flex-col mt-[2%] ml-[21%] gap-4 lg:mt-[6%] lg:gap-8 ">
        <p className=" cursor-default text-white w-56 text-lg lg:w-72 lg:leading-snug md:text-2xl lg:text-[3.5rem] font-bold">
          Sale of the summer collection
        </p>
        <button
          className="flex items-center gap-2 lg:gap-3 cursor-pointer w-fit"
          onClick={() => {
            bgImage === "coverpic.webp"
              ? setBgImage("coverpic2.webp")
              : setBgImage("coverpic.webp");
          }}
        >
          <Image
            className=" w-6 lg:w-10"
            src="/shopnowbutton.webp"
            width={156}
            height={156}
            alt="Shop Now"
          />
          <p className=" text-white font-medium text-xs lg:text-base">
            SHOP NOW
          </p>
        </button>
      </div>
    </div>
  );
};

export default Slider;
