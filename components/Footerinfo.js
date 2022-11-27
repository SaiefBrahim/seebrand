import Image from "next/image";
import Link from "next/link";
import Facebook from "../public/social/facebook.webp";
import Instagram from "../public/social/instagram.webp";
import Linkedin from "../public/social/linkedin.webp";
import Twitter from "../public/social/twitter.webp";
import Youtube from "../public/social/youtube.webp";

const Footerinfo = () => {
  return (
    <div className=" flex flex-col justify-center lg:grid lg:grid-cols-6 gap-10 lg:gap-8 mx-10 lg:mx-28 mt-12">
      <div className=" col-span-3 flex flex-col gap-8 lg:gap-12 w-full lg:w-[80%]">
        <h1 className=" text-2xl font-semibold m-0">SEEBRAND</h1>
        <p className=" text-base text-gray-500">
          SEEBRAND designs clothing for the young, the old & everyone in between
          – but most importantly, for the fashionable
        </p>
        <div className=" flex flex-row gap-3 lg:gap-8 items-center">
          <Link
            className="w-12 h-12 flex items-center justify-center"
            href="https://facebook.com/seedevs"
            target="_blank"
          >
            <Image
              className=" scale-[0.7] "
              src={Facebook}
              alt="Facebook Page Seedevs"
            />
          </Link>
          <Link
            className="w-12 h-12 flex items-center justify-center"
            href="https://linkedin.com/seedevs"
            target="_blank"
          >
            <Image
              className=" scale-[0.7]"
              src={Linkedin}
              alt="Linkedin Page Seedevs"
            />
          </Link>
          <Link
            className="w-12 h-12 flex items-center justify-center"
            href="https://instagram.com/seedevs"
            target="_blank"
          >
            <Image
              className=" scale-[0.7]"
              src={Instagram}
              alt="Instagram Page Seedevs"
            />
          </Link>
          <Link
            className="w-12 h-12 flex items-center justify-center"
            href="https://twitter.com/seedevs"
            target="_blank"
          >
            <Image
              className=" scale-[0.7]"
              src={Twitter}
              alt="Twitter Page Seedevs"
            />
          </Link>

          <Link
            className="w-12 h-12 flex items-center justify-center"
            href="https://youtube.com/seedevs"
            target="_blank"
          >
            <Image
              className=" scale-[0.7]"
              src={Youtube}
              alt="Youtube Channel Seedevs"
            />
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-8 text-sm">
        <h1 className=" font-medium">Shopping Online</h1>
        <div className=" flex flex-col gap-3">
          <Link className="link-hover" href="#">
            Order Status
          </Link>
          <Link className="link-hover" href="#">
            Shipping and Delivery
          </Link>
          <Link className="link-hover" href="#">
            Returns
          </Link>
          <Link className="link-hover" href="#">
            Payment Options
          </Link>
          <Link className="link-hover" href="#">
            Contact Us
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-8 text-sm">
        <h1 className=" font-medium">Information</h1>
        <div className=" flex flex-col gap-3">
          <Link className="link-hover" href="#">
            Gift Card
          </Link>
          <Link className="link-hover" href="#">
            Find a Store
          </Link>
          <Link className="link-hover" href="#">
            Newsletter
          </Link>
          <Link className="link-hover" href="#">
            Become a Member
          </Link>
          <Link className="link-hover" href="#">
            Site Feedback
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-8 text-sm">
        <h1 className=" font-medium">Contact</h1>
        <div className=" flex flex-col gap-3">
          <Link className=" text-sm link-hover" href="tel:+21627901909">
            Hotline: (216) 27 901 909
          </Link>
          <Link
            className=" text-sm link-hover"
            href="mailto:seefbrahim@gmail.com"
          >
            seefbrahim@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footerinfo;
