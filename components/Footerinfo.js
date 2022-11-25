import Image from "next/image";
import Link from "next/link";

const Footerinfo = () => {
  return (
    <div className=" flex flex-col justify-center lg:grid lg:grid-cols-6 gap-10 lg:gap-8 mx-10 lg:mx-28 mt-12">
      <div className=" col-span-3 flex flex-col gap-8 lg:gap-12 w-[80%]">
        <h1 className=" text-2xl font-semibold m-0">SEEBRAND</h1>
        <p className=" text-sm text-gray-400">
          SEEBRAND designs clothing for the young, the old & everyone in between
          – but most importantly, for the fashionable
        </p>
        <div className=" flex flex-row gap-10">
          <Link href="https://facebook.com/seedevs" target="_blank">
            <Image
              src="/social/facebook.webp"
              alt="Facebook Page Seedevs"
              width={10}
              height={18}
            />
          </Link>
          <Link href="https://twitter.com/seedevs" target="_blank">
            <Image
              src="/social/twitter.webp"
              alt="Twitter Page Seedevs"
              width={18.5}
              height={15}
            />
          </Link>
          <Link href="https://linkedin.com/seedevs" target="_blank">
            <Image
              src="/social/linkedin.webp"
              alt="Linkedin Page Seedevs"
              width={15.6}
              height={15}
            />
          </Link>
          <Link href="https://instagram.com/seedevs" target="_blank">
            <Image
              src="/social/instagram.webp"
              alt="Facebook Page Seedevs"
              width={17.5}
              height={17.5}
            />
          </Link>
          <Link href="https://youtube.com/seedevs" target="_blank">
            <Image
              src="/social/youtube.webp"
              alt="Facebook Page Seedevs"
              width={19.5}
              height={13.4}
            />
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-8 text-xs">
        <h1 className=" font-medium">Shopping Online</h1>
        <div className=" flex flex-col gap-3">
          <Link href="#">Order Status</Link>
          <Link href="#">Shipping and Delivery</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Payment Options</Link>
          <Link href="#">Contact Us</Link>
        </div>
      </div>
      <div className=" flex flex-col gap-8 text-xs">
        <h1 className=" font-medium">Information</h1>
        <div className=" flex flex-col gap-3">
          <Link href="#">Gift Card</Link>
          <Link href="#">Find a Store</Link>
          <Link href="#">Newsletter</Link>
          <Link href="#">Become a Member</Link>
          <Link href="#">Site Feedback</Link>
        </div>
      </div>
      <div className=" flex flex-col gap-8 text-xs">
        <h1 className=" font-medium">Contact</h1>
        <div className=" flex flex-col gap-3">
          <p>seefbrahim@gmail.com</p>
          <p>Hotline: (+216) 27 901 909</p>
        </div>
      </div>
    </div>
  );
};

export default Footerinfo;
