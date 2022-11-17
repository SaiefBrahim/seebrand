import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ProductsSlider = () => {
  const NArrow = ({ onClick }) => {
    return (
      <button
        className=" w-9 lg:w-12 btn btn-primary bg-white p-3 border-none bg-opacity-20 rounded-none absolute top-[50%] block min-h-0 min-w-0 cursor-pointer -right-12"
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
        className=" w-9 lg:w-12 btn btn-primary bg-white p-3 border-none bg-opacity-20 rounded-none absolute top-[50%] block min-h-0 min-w-0 cursor-pointer -left-12"
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <div className="mt-16">
      <Slider className=" mx-[-15px]" {...settings}>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/announcements/announcement3.webp"
            alt="New Arrivals"
            width={608}
            height={373}
            priority={true}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProductsSlider;
