import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import coverPic1 from "../../public/coverpic1.webp";
import coverPic2 from "../../public/coverpic2.webp";
import coverPic3 from "../../public/coverpic3.webp";
import mobileSlide1 from "../../public/mobileslide1.webp";
import mobileSlide2 from "../../public/mobileslide2.webp";
import mobileSlide3 from "../../public/mobileslide3.webp";
import shopNowButton from "../../public/shopnowbutton.webp";
import rightArrow from "../../public/rightarrow.webp";
import leftArrow from "../../public/leftarrow.webp";

const Slider = () => {
  const [bgImage, setBgImage] = useState(0);
  const [bgMobile, setBgMobile] = useState(0);

  const slides = [coverPic1, coverPic2, coverPic3];
  const mobileSlides = [mobileSlide1, mobileSlide2, mobileSlide3];
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
    const sliderHandler = setInterval(() => {
      nextSlideHandler();
      nextMobileSlideHandle();
    }, 4000);
    return () => clearInterval(sliderHandler);
  }, [bgImage, bgMobile]);

  return (
    <>
      <div className="hidden lg:block relative">
        <Image
          className=" transition-all duration-300 ease-linear pointer-events-none"
          src={slides[bgImage]}
          alt="Slide Show Images"
          loading="eager"
        />
        <div className="absolute top-[20%] left-[16%] flex flex-col gap-8">
          <p className=" cursor-default text-white w-60 leading-snug text-5xl font-bold">
            Sale of the summer collection
          </p>
          <Link href="#">
            <button
              aria-label="Shop Now"
              className="flex items-center gap-3 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-linear delay-75"
            >
              <Image
                className=" w-10 h-10 pointer-events-none"
                src={shopNowButton}
                alt="Shop Now"
              />
              <p className="text-white font-medium">SHOP NOW</p>
            </button>
          </Link>
        </div>
        <div className="absolute flex justify-end right-20 bottom-10">
          <button
            aria-label="Previous Slider"
            className=" w-12 btn btn-primary p-3 bg-gray-700 border-none bg-opacity-20 rounded-none"
            onClick={() => {
              prevSlideHandler();
            }}
          >
            <Image src={leftArrow} alt="Back button" />
          </button>
          <button
            aria-label="Next Slider"
            className=" w-9 lg:w-12 btn btn-primary p-3 bg-white border-none rounded-none"
            onClick={() => {
              nextSlideHandler();
            }}
          >
            <Image src={rightArrow} alt="Next button" />
          </button>
        </div>
        <div className="flex justify-around w-[70%] rounded-tr-full absolute bottom-0 left-0 p-7 bg-white">
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
        <div className="h-[500px] relative">
          <Image
            className=" transition-all ease-linear duration-1000 pointer-events-none"
            src={mobileSlides[bgMobile]}
            alt="Slide Show Images"
            loading="eager"
          />
          <div className="absolute bottom-14 left-8 flex flex-col gap-6">
            <p className=" cursor-default text-white w-56 text-4xl font-bold">
              Sale of the summer collection
            </p>
            <Link href="#">
              <button
                aria-label="Shop Now"
                className=" flex items-center gap-3 pointer-events-none"
              >
                <Image className=" w-9" src={shopNowButton} alt="Shop Now" />
                <p className=" text-white font-medium">SHOP NOW</p>
              </button>
            </Link>
          </div>
          <div className=" absolute bottom-14 right-10">
            <button
              aria-label="Previous Slider"
              className=" w-9 lg:w-12 btn btn-primary p-3 bg-gray-700 border-none bg-opacity-20 rounded-none"
              onClick={() => {
                prevMobileSlideHandle();
              }}
            >
              <Image src={leftArrow} alt="Back button" />
            </button>
            <button
              aria-label="Next Slider"
              className=" w-9 lg:w-12 btn btn-primary p-3 bg-white border-none rounded-none"
              onClick={() => {
                nextMobileSlideHandle();
              }}
            >
              <Image src={rightArrow} alt="Next button" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
