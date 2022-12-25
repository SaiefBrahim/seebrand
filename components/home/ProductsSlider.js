import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import dummy1 from "../../public/dummydata/dummy1.webp";
import dummy2 from "../../public/dummydata/dummy2.webp";
import dummy9 from "../../public/dummydata/dummy9.webp";
import dummy10 from "../../public/dummydata/dummy10.webp";
import dummy3 from "../../public/dummydata/dummy3.webp";
import dummy6 from "../../public/dummydata/dummy6.webp";
import Link from "next/link";

const ProductsSlider = () => {
  const NArrow = ({ onClick }) => {
    return (
      <button
        aria-label="Next Item"
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
        aria-label="Previous Button"
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
        <h1 className=" text-xl lg:text-2xl font-medium w-28 lg:w-full">
          Selected just for you
        </h1>
        <button
          aria-label="Show More"
          className=" btn btn-primary bg-transparent rounded-3xl border-gray-800 min-h-0 h-11"
        >
          Show more
        </button>
      </div>
      <Slider className=" mx-5 lg:-mx-5" {...settings}>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy1} alt="Fancy Blazzers" />
          </figure>
          <div className="card-body px-1">
            <p>Fancy Blazzers</p>
            <h2 className="card-title">99 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy2} alt="Stripped Jean Jacket" />
          </figure>
          <div className="card-body px-1">
            <p>Stripped Jean Jacket</p>
            <h2 className="card-title">229 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy9} alt="Pink Crossed Jacket" />
          </figure>
          <div className="card-body px-1">
            <p>Pink Crossed Jacket</p>
            <h2 className="card-title">240 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy10} alt="Class B Pants" />
          </figure>
          <div className="card-body px-1">
            <p>Class B Pants</p>
            <h2 className="card-title">109 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy3} alt="Casual White Shirt" />
          </figure>
          <div className="card-body px-1">
            <p>Casual White Shirt</p>
            <h2 className="card-title">79 TND</h2>
          </div>
        </Link>
        <Link
          href="#"
          className="card card-compact border border-gray-300 lg:border-none rounded-none"
        >
          <figure>
            <Image src={dummy6} alt="Pinky SweatShirt" />
          </figure>
          <div className="card-body px-1">
            <p>Pinky SweatShirt</p>
            <h2 className="card-title">102 TND</h2>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default ProductsSlider;
