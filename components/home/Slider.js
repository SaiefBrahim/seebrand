import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [bgImage, setBgImage] = useState("coverpic.webp");
  const bgImageHandler = () => {
    bgImage === "coverpic.webp"
      ? setBgImage("coverpic2.webp")
      : setBgImage("coverpic.webp");
  };
  return (
    <>
      <div
        className="hidden lg:block bg-no-repeat lg:h-screen relative"
        style={{
          backgroundImage: `url(${`/${bgImage}`})`,
          backgroundSize: "100%",
          transition: "background-image 0.3s linear",
          WebkitTransition: "background-image 0.3s linear",
        }}
      >
        <div className="h-32 lg:h-fit flex flex-col ml-[21%] gap-4 lg:mt-0 lg:gap-8 ">
          <p className=" cursor-default text-white mt-[2%] lg:mt-[12%] w-56 text-lg lg:w-72 lg:leading-snug md:text-2xl lg:text-[3.5rem] font-bold">
            Sale of the summer collection
          </p>
          <button
            aria-label="Shop Now"
            className=" flex items-center gap-3 cursor-pointer w-fit"
          >
            <Image
              className=" w-6 lg:w-10"
              src="/shopnowbutton.webp"
              width={156}
              height={156}
              alt="Shop Now"
            />
            <p className=" text-white font-medium text-base">SHOP NOW</p>
          </button>
        </div>
        <div className=" lg:flex justify-end top-36 right-10 static mt-32 mr-24">
          <button
            aria-label="Previous Slider"
            className=" w-9 lg:w-12 btn btn-primary p-3 bg-gray-700 border-none bg-opacity-20 rounded-none"
            onClick={() => {
              bgImageHandler();
            }}
          >
            <Image
              src="/leftarrow.webp"
              width={100}
              height={87}
              alt="Back button"
            />
          </button>
          <button
            aria-label="Next Slider"
            className=" w-9 lg:w-12 btn btn-primary p-3 bg-white border-none rounded-none"
            onClick={() => {
              bgImageHandler();
            }}
          >
            <Image
              src="/rightarrow.webp"
              width={100}
              height={87}
              alt="Next button"
            />
          </button>
        </div>
        <div className=" hidden lg:flex mt-6 py-6 lg:py-0 lg:mt-0 lg:justify-around lg:w-[70%] lg:rounded-tr-full lg:h-[18%] lg:absolute lg:top-[82vh] bg-white">
          <div className=" flex flex-col gap-6 lg:flex-row items-center w-full">
            <div className=" lg:ml-12 flex gap-4">
              <Image
                className=" w-12 h-12"
                src="/freeshipping.webp"
                alt="Free Shipping"
                width={156}
                height={156}
              />
              <div>
                <h1 className=" font-medium text-sm">Free Shipping</h1>
                <p className=" w-52 text-gray-700 text-xs">
                  On purchases over 199 TND
                </p>
              </div>
            </div>
            <div className=" flex gap-4">
              <Image
                className=" w-12 h-12"
                src="/satisfiedcustomers.webp"
                alt="99% Satisfied Customers"
                width={156}
                height={156}
              />
              <div>
                <h1 className=" font-medium text-sm">Originality Guaranteed</h1>
                <p className=" w-52 text-gray-700 text-xs">
                  Our clients&apos; opinions speak for themselves
                </p>
              </div>
            </div>
            <div className=" lg:mr-12 flex gap-4">
              <Image
                className=" w-12 h-12"
                src="/moneybackwarranty.webp"
                alt="Money Back Warranty"
                width={156}
                height={156}
              />
              <div>
                <h1 className=" font-medium text-sm">
                  99% Satisfied Customers
                </h1>
                <p className=" w-52 text-gray-700 text-xs">
                  30 days warranty for each product from our store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden">
        <div
          className="h-[500px] bg-no-repeat"
          style={{
            backgroundImage: `url(${`/mobilecover.webp`})`,
            backgroundSize: "100%",
            transition: "background-image 0.3s linear",
            WebkitTransition: "background-image 0.3s linear",
          }}
        >
          <div className="flex flex-col pt-[65%] ml-[10%] gap-9 lg:hidden ">
            <p className=" cursor-default text-white w-56 text-4xl font-bold">
              Sale of the summer collection
            </p>
            <button
              aria-label="Shop Now"
              className=" flex items-center gap-3 cursor-pointer w-fit"
            >
              <Image
                className=" w-9"
                src="/shopnowbutton.webp"
                width={156}
                height={156}
                alt="Shop Now"
              />
              <p className=" text-white font-medium">SHOP NOW</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
