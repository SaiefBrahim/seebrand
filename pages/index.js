import Head from "next/head";
import Announcements from "../components/Announcements";
import Chooseus from "../components/Chooseus";
import ProductsSlider from "../components/ProductsSlider";
import Slider from "../components/Slider";
import Todaypicks from "../components/Todaypicks";

const Home = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};
export default Home;
