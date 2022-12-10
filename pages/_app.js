import "../styles/globals.css";
import Header from "../components/Header";
import Footerinfo from "../components/Footerinfo";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Header
        bgColor={router.pathname !== "/" ? "bg-black" : null}
        pos={router.pathname !== "/" ? "relative" : "fixed"}
      />
      <Component {...pageProps} />
      <Footerinfo />
      <Footer />
    </>
  );
}

export default MyApp;
