import Image from "next/image";
import { useState, useEffect } from "react";

const Slider = () => {
  const [bgImage, setBgImage] = useState(0);
  const [bgMobile, setBgMobile] = useState(0);

  const slides = ["coverpic1.webp", "coverpic2.webp", "coverpic3.webp"];
  const mobileSlides = [
    "mobileslide1.webp",
    "mobileslide2.webp",
    "mobileslide3.webp",
  ];
  const nextSlideHandler = () => {
    bgImage >= slides.length - 1 ? setBgImage(0) : setBgImage(bgImage + 1);
  };
  const prevSlideHandler = () => {
    bgImage <= 0 ? setBgImage(slides.length - 1) : setBgImage(bgImage - 1);
  };

  const nextMobileSlideHandle = () => {
    bgMobile >= mobileSlides.length - 1
      ? setBgMobile(0)
      : setBgMobile(bgMobile + 1);
  };
  const prevMobileSlideHandle = () => {
    bgMobile <= 0
      ? setBgMobile(mobileSlides.length - 1)
      : setBgMobile(bgMobile - 1);
  };
  useEffect(() => {
    var i = 0;
    const sliderHandler = setInterval(() => {
      nextSlideHandler();
      nextMobileSlideHandle();
    }, 4000);
    return () => clearInterval(sliderHandler);
  }, [bgImage, bgMobile]);

  return (
    <>
      <div
        className="hidden lg:block bg-no-repeat h-[800px] relative"
        style={{
          backgroundImage: `url(${`/${slides[bgImage]}`})`,
          backgroundSize: "100%",
          transition: "background-image 0.3s linear",
          WebkitTransition: "background-image 0.3s linear",
        }}
      >
        <div className="absolute flex flex-col left-[14%] top-[20%] gap-8 ">
          <p className=" cursor-default text-white w-60 leading-snug text-5xl font-bold">
            Sale of the summer collection
          </p>
          <button
            aria-label="Shop Now"
            className=" flex items-center gap-3 cursor-pointer w-fit"
          >
            <Image
              className=" w-10"
              src="/shopnowbutton.webp"
              width={156}
              height={156}
              alt="Shop Now"
            />
            <p className=" text-white font-medium text-base">SHOP NOW</p>
          </button>
        </div>
        <div className=" absolute flex justify-end right-20 bottom-14">
          <button
            aria-label="Previous Slider"
            className=" w-12 btn btn-primary p-3 bg-gray-700 border-none bg-opacity-20 rounded-none"
            onClick={() => {
              prevSlideHandler();
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
              nextSlideHandler();
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
        <div className="flex justify-around w-[70%] rounded-tr-full h-[18%] absolute bottom-0 bg-white">
          <div className=" flex gap-6 items-center justify-center w-full">
            <div className="flex gap-4">
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
            <div className="flex gap-4">
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

      {/* mobile slider */}

      <div className=" lg:hidden">
        <div
          className="h-[500px] bg-no-repeat relative"
          style={{
            backgroundImage: `url(${`/${mobileSlides[bgMobile]}`})`,
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
          <div className=" absolute bottom-14 right-10">
            <button
              aria-label="Previous Slider"
              className=" w-9 lg:w-12 btn btn-primary p-3 bg-gray-700 border-none bg-opacity-20 rounded-none"
              onClick={() => {
                prevMobileSlideHandle();
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
                nextMobileSlideHandle();
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
        </div>
      </div>
    </>
  );
};

export default Slider;
