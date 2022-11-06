import Head from "next/head";
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
      </div>
    </div>
  );
};
export default Home;
