import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home = ({ data }) => {
  return (
    <div>
      <Head>
        <title>SeeBrand - Get Fashionated</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className=" h-screen bg-no-repeat lg:h-screen lg:bg-no-repeat w-screen"
        style={{
          backgroundImage: `url("/coverpic.png")`,
          backgroundSize: "100%",
        }}
      >
        <Header />
        <div className=" flex flex-col mt-[7%] ml-[25%] gap-8">
          <p className=" cursor-default w-72 lg:leading-snug text-white text-2xl md:text-3xl lg:text-[3.5rem] font-bold">
            Sale of the summer collection
          </p>
          <div className="flex items-center gap-4 cursor-pointer w-fit">
            <svg
              className=" w-6 lg:w-10"
              id="Component_36_1"
              data-name="Component 36 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
            >
              <g
                id="Ellipse_48"
                data-name="Ellipse 48"
                fill="#fbb03b"
                stroke="#fbb03b"
                strokeWidth="1.5"
              >
                <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                <circle cx="19.5" cy="19.5" r="18.75" fill="none" />
              </g>
              <path
                id="noun_Arrow_Left_2682937"
                data-name="noun_Arrow Left_2682937"
                d="M6.663,13.329,1.107,7.768,0,6.661,1.107,5.553,6.663,0,7.77,1.1,3,5.878H15.336V7.443H3L7.77,12.219Z"
                transform="translate(27 26.65) rotate(180)"
                fill="#fff"
              />
            </svg>
            <p className=" text-white font-medium text-xs lg:text-base">
              SHOP NOW
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
