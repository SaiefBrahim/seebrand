import Image from "next/image";
const Announcements = () => {
  return (
    <div className=" mt-8 lg:mt-16 flex gap-8 flex-col lg:flex-row ">
      <div>
        <Image
          src="/announcements/announcement1.webp"
          alt="New Arrivals"
          width={608}
          height={373}
        />
      </div>
      <div>
        <Image
          src="/announcements/announcement2.webp"
          alt="New Arrivals"
          width={302}
          height={373}
        />
      </div>
      <div>
        <Image
          src="/announcements/announcement3.webp"
          alt="New Arrivals"
          width={302}
          height={373}
        />
      </div>
    </div>
  );
};

export default Announcements;
