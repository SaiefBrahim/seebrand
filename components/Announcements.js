import Image from "next/image";
const Announcements = () => {
  return (
    <div className=" hidden lg:flex gap-8 flex-col lg:flex-row ">
      <div className=" relative">
        <Image
          src="/announcements/announcement1.webp"
          alt="New Arrivals"
          width={608}
          height={373}
        />
        <p className=" absolute top-36 left-12 text-3xl text-white font-normal w-44">
          New arrivals are now in!
        </p>
        <button
          aria-label="Show Collection"
          className=" absolute top-60 left-12 w-40 text-xs btn btn-primary rounded-3xl bg-white border-none"
        >
          SHOW COLLECTION
        </button>
      </div>
      <div className=" relative">
        <Image
          src="/announcements/announcement2.webp"
          alt="New Arrivals"
          width={302}
          height={373}
        />
        <p className=" absolute top-36 left-12 text-2xl text-white font-normal w-44">
          Basic t-shirts 29.99 TND
        </p>
        <button
          aria-label="More Details"
          className=" absolute top-60 left-12 px-6 text-xs btn btn-primary rounded-3xl bg-white border-none"
        >
          MORE DETAILS
        </button>
      </div>
      <div className=" relative">
        <Image
          src="/announcements/announcement3.webp"
          alt="New Arrivals"
          width={302}
          height={373}
        />
        <span className="btn btn-disabled min-h-0 h-10 absolute top-20 left-12 rounded-3xl bg-red-600 text-white">
          -50%
        </span>
        <p className=" absolute top-36 left-12 text-2xl text-white font-normal w-44">
          Sale this summer
        </p>
        <button
          aria-label="View All"
          className=" absolute top-60 left-12 px-6 text-xs btn btn-primary rounded-3xl bg-white border-none"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Announcements;
