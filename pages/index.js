import Head from "next/head";
import Announcements from "../components/Announcements";
import ProductsSlider from "../components/ProductsSlider";
import Slider from "../components/Slider";

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
        <div className=" mx-10 lg:mx-28">
          <Announcements />
          <ProductsSlider />
        </div>
      </div>
    </div>
  );
};
export default Home;
