import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ProductsSlider = () => {
  const NArrow = ({ onClick }) => {
    return (
      <button
        className=" w-10 btn btn-primary p-3 border-none bg-transparent bg-opacity-20 h-10  rounded-none absolute top-[50%] min-h-0 min-w-0 cursor-pointer -right-[50px] lg:-right-16"
        onClick={onClick}
      >
        <Image
          src="/rightarrow.webp"
          width={100}
          height={87}
          alt="Next button"
        />
      </button>
    );
  };

  const PArrow = ({ onClick }) => {
    return (
      <button
        className=" w-10 btn btn-primary bg-transparent h-10 bg-opacity-20 rounded-none p-3 border-none absolute top-[50%] min-h-0 min-w-0 cursor-pointer -left-[50px] lg:-left-16"
        onClick={onClick}
      >
        <Image
          src="/leftarrow2.webp"
          width={100}
          height={87}
          alt="Back button"
        />
      </button>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 250,
    nextArrow: <NArrow />,
    prevArrow: <PArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
    speed: 300,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" flex justify-between items-center mb-9 lg:mb-12">
        <h1 className=" text-lg w-28 lg:w-full">Selected just for you</h1>
        <button className=" btn btn-primary bg-transparent rounded-3xl border-gray-800 min-h-0 h-10 font-medium">
          Show more
        </button>
      </div>
      <Slider className=" mx-5 lg:-mx-5" {...settings}>
        <div className="card card-compact border border-gray-300 lg:border-none rounded-none">
          <figure>
            <Image
              src="/announcements/announcement3.webp"
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
              src="/announcements/announcement3.webp"
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
              src="/announcements/announcement3.webp"
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
              src="/announcements/announcement3.webp"
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
              src="/announcements/announcement3.webp"
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
              src="/announcements/announcement3.webp"
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
              src="/announcements/announcement3.webp"
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
      </Slider>
    </div>
  );
};

export default ProductsSlider;
