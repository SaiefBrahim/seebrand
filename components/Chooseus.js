import Image from "next/image";
import { useState } from "react";

const Chooseus = ({ view }) => {
  const [onChoose1, setOnChoose1] = useState("bg-gray-200");
  const [onChoose2, setOnChoose2] = useState(false);
  const [onChoose3, setOnChoose3] = useState(false);
  const [onChoose4, setOnChoose4] = useState(false);

  return (
    <div className={`${view} flex-col items-center gap-16 mt-8`}>
      <h1>Why should you choose us?</h1>
      <div className=" flex flex-col lg:flex-row gap-8">
        <div
          className=" flex flex-col items-center gap-4 text-center text-xs text-gray-600"
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
              className=" scale-75 w-auto h-auto"
              src="/chooseus/shipping.webp"
              width={80}
              height={52.25}
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
          className=" flex flex-col items-center gap-4 text-center text-xs text-gray-600"
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
              className=" scale-75 w-auto h-auto"
              src="/chooseus/payments.webp"
              width={59}
              height={59}
              alt="Easy Payments"
            />
          </div>
          <h2 className=" text-base text-black">Easy Payments</h2>
          <p>
            All payments are processed instantly over a secure payment protocol.
          </p>
        </div>
        <div
          className=" flex flex-col items-center gap-4 text-center text-xs text-gray-600"
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
              className=" scale-75 w-auto h-auto"
              src="/chooseus/warranty.webp"
              width={49.26}
              height={52}
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
          className=" flex flex-col items-center gap-4 text-center text-xs text-gray-600"
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
              className=" scale-75 w-auto h-auto"
              src="/chooseus/materials.webp"
              width={57.33}
              height={58}
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
