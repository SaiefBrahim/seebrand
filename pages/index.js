import Head from "next/head";
import Announcements from "../components/home/Announcements";
import Chooseus from "../components/home/Chooseus";
import Newsletter from "../components/home/Newsletter";
import ProductsSlider from "../components/home/ProductsSlider";
import Slider from "../components/home/Slider";
import Todaypicks from "../components/home/Todaypicks";

const Home = () => {
  return (
    <>
      <Head>
        <title>SeeBrand - Get Fashionated</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Slider />
        <div className=" mt-8 lg:mt-14 mx-10 lg:mx-28 flex flex-col gap-10">
          <Announcements />
          <ProductsSlider />
          <Chooseus view="hidden lg:flex" />
          <Todaypicks />
          <Chooseus view="flex lg:hidden" />
        </div>
        <Newsletter />
      </div>
    </>
  );
};
export default Home;
