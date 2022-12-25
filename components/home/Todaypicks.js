import Image from "next/image";
import Link from "next/link";
import dummy4 from "../../public/dummydata/dummy4.webp";
import dummy5 from "../../public/dummydata/dummy5.webp";
import dummy7 from "../../public/dummydata/dummy7.webp";
import dummy8 from "../../public/dummydata/dummy8.webp";

const Todaypicks = () => {
  return (
    <div className=" flex flex-col items-center mt-12 gap-16">
      <h1 className=" text-xl lg:text-2xl font-medium">Today Picks</h1>
      <div className=" flex flex-col mx-5 lg:mx-0 lg:flex-row gap-10">
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy4} alt="Classy Blue Shirt" />
          </figure>
          <div className="card-body px-1">
            <p className="">Classy Blue Shirt</p>
            <h2 className="card-title">109 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy5} alt="Casual Uni Black" />
          </figure>
          <div className="card-body px-1">
            <p className="">Casual Uni Black</p>
            <h2 className="card-title">170 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy7} alt="Notche Yellow Top and Pants" />
          </figure>
          <div className="card-body px-1">
            <p className="">Notche Yellow Top and Pants</p>
            <h2 className="card-title">229 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy8} alt="Catte White Pinky Uni" />
          </figure>
          <div className="card-body px-1">
            <p className="">Catte White Pinky Uni</p>
            <h2 className="card-title">149 TND</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Todaypicks;
