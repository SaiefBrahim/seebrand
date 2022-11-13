import Head from "next/head";
import Announcements from "../components/Announcements";
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
        <div className=" mx-10 lg:mx-24">
          <Announcements />
        </div>
      </div>
    </div>
  );
};
export default Home;
