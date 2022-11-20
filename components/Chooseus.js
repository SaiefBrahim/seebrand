import Image from "next/image";

const Chooseus = () => {
  return (
    <div className=" flex flex-col items-center gap-12">
      <h1 text-xs1>Why should you choose us?</h1>
      <div className=" flex flex-col lg:flex-row gap-8">
        <div className=" flex flex-col items-center gap-4 text-center text-xs">
          <Image
            className=" scale-75"
            src="/chooseus/shipping.webp"
            width={80}
            height={52.25}
            alt="Free Shipping"
          />
          <h2 className=" text-base">Free Shipping</h2>
          <p>
            All purchases over $99 are eligible for free shipping via USPS First
            Class Mail.
          </p>
        </div>
        <div className=" flex flex-col items-center gap-4 text-center text-xs">
          <Image
            className=" scale-75"
            src="/chooseus/payments.webp"
            width={59}
            height={59}
            alt="Easy Payments"
          />
          <h2 className=" text-base">Easy Payments</h2>
          <p>
            All payments are processed instantly over a secure payment protocol.
          </p>
        </div>
        <div className=" flex flex-col items-center gap-4 text-center text-xs">
          <Image
            className=" scale-75"
            src="/chooseus/warranty.webp"
            width={49.26}
            height={52}
            alt="Money-Back Guarantee"
          />
          <h2 className=" text-base">Money-Back Guarantee</h2>
          <p>
            If an item arrived damaged or you&apos;ve changed your mind, you can
            send it back for a full refund.
          </p>
        </div>
        <div className=" flex flex-col items-center gap-4 text-center text-xs">
          <Image
            className=" scale-75"
            src="/chooseus/materials.webp"
            width={57.33}
            height={58}
            alt="Finest Quality"
          />
          <h2 className=" text-base">Finest Quality</h2>
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
