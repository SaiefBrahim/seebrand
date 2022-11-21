import Image from "next/image";
const Todaypicks = () => {
  return (
    <div className=" flex flex-col items-center mt-12 gap-16">
      <h1 className=" text-xl">Today Picks</h1>
      <div className=" flex flex-col mx-5 lg:mx-0 lg:flex-row gap-10">
        <div className="card card-compact border border-gray-300 lg:border-none rounded-none">
          <figure>
            <Image
              src="/announcements/announcement2.webp"
              alt="New Arrivals"
              width={608}
              height={373}
            />
          </figure>
          <div className="card-body px-1">
            <p className="">Pull Summer 2022</p>
            <h2 className="card-title">89 TND</h2>
          </div>
        </div>
        <div className="card card-compact border border-gray-300 lg:border-none rounded-none">
          <figure>
            <Image
              src="/announcements/announcement2.webp"
              alt="New Arrivals"
              width={608}
              height={373}
            />
          </figure>
          <div className="card-body px-1">
            <p className="">Pull Summer 2022</p>
            <h2 className="card-title">89 TND</h2>
          </div>
        </div>
        <div className="card card-compact border border-gray-300 lg:border-none rounded-none">
          <figure>
            <Image
              src="/announcements/announcement2.webp"
              alt="New Arrivals"
              width={608}
              height={373}
            />
          </figure>
          <div className="card-body px-1">
            <p className="">Pull Summer 2022</p>
            <h2 className="card-title">89 TND</h2>
          </div>
        </div>
        <div className="card card-compact border border-gray-300 lg:border-none rounded-none">
          <figure>
            <Image
              src="/announcements/announcement2.webp"
              alt="New Arrivals"
              width={608}
              height={373}
            />
          </figure>
          <div className="card-body px-1">
            <p className="">Pull Summer 2022</p>
            <h2 className="card-title">89 TND</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todaypicks;
