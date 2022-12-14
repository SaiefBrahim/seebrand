import Image from "next/image";
import { useState } from "react";
import Shipping from "../../public/chooseus/shipping.webp";
import Payments from "../../public/chooseus/payments.webp";
import Warranty from "../../public/chooseus/warranty.webp";
import Materials from "../../public/chooseus/materials.webp";

const Chooseus = ({ view }) => {
  const [onChoose1, setOnChoose1] = useState("bg-gray-200");
  const [onChoose2, setOnChoose2] = useState(false);
  const [onChoose3, setOnChoose3] = useState(false);
  const [onChoose4, setOnChoose4] = useState(false);

  return (
    <div className={`${view} flex-col items-center gap-16 mt-12`}>
      <h1 className=" text-xl lg:text-2xl font-medium">
        Why should you choose us?
      </h1>
      <div className=" flex flex-col lg:flex-row gap-8">
        <div
          className=" flex flex-col items-center gap-4 text-center text-sm text-gray-500"
          onMouseEnter={(e) => {
            setOnChoose1("bg-primary");
          }}
          onMouseLeave={() => {
            setOnChoose1("bg-gray-200");
          }}
        >
          <div className=" relative">
            <span
              className={`${onChoose1} rounded-full w-12 h-12 bg-gray-200 absolute -top-3 -right-5`}
            ></span>
            <Image
              className=" h-12 w-full relative"
              src={Shipping}
              alt="Free Shipping"
            />
          </div>
          <h2 className=" text-base text-black">Free Shipping</h2>
          <p>
            All purchases over $99 are eligible for free shipping via USPS First
            Class Mail.
          </p>
        </div>
        <div
          className=" flex flex-col items-center gap-4 text-center text-sm text-gray-500"
          onMouseEnter={(e) => {
            setOnChoose2("bg-primary");
          }}
          onMouseLeave={() => {
            setOnChoose2("bg-gray-200");
          }}
        >
          <div className=" relative">
            <span
              className={`${onChoose2} rounded-full w-12 h-12 bg-gray-200 flex absolute -top-3 -right-5`}
            ></span>
            <Image
              className=" h-12 w-full relative"
              src={Payments}
              alt="Easy Payments"
            />
          </div>
          <h2 className=" text-base text-black">Easy Payments</h2>
          <p>
            All payments are processed instantly over a secure payment protocol.
          </p>
        </div>
        <div
          className=" flex flex-col items-center gap-4 text-center text-sm text-gray-500"
          onMouseEnter={(e) => {
            setOnChoose3("bg-primary");
          }}
          onMouseLeave={() => {
            setOnChoose3("bg-gray-200");
          }}
        >
          <div className=" relative">
            <span
              className={`${onChoose3} rounded-full w-12 h-12 bg-gray-200  flex absolute -top-3 -right-5`}
            ></span>
            <Image
              className=" h-12 w-full relative"
              src={Warranty}
              alt="Money-Back Guarantee"
            />
          </div>
          <h2 className=" text-base text-black">Money-Back Guarantee</h2>
          <p>
            If an item arrived damaged or you&apos;ve changed your mind, you can
            send it back for a full refund.
          </p>
        </div>
        <div
          className=" flex flex-col items-center gap-4 text-center text-sm text-gray-500"
          onMouseEnter={(e) => {
            setOnChoose4("bg-primary");
          }}
          onMouseLeave={() => {
            setOnChoose4("bg-gray-200");
          }}
        >
          <div className=" relative">
            <span
              className={`${onChoose4} rounded-full w-12 h-12 flex bg-gray-200 absolute -top-3 -right-5`}
            ></span>
            <Image
              className=" h-12 w-full relative"
              src={Materials}
              alt="Finest Quality"
            />
          </div>
          <h2 className=" text-base text-black">Finest Quality</h2>
          <p>
            Designed to last, each of our products has been crafted with the
            finest materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
