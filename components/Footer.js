import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" flex flex-col gap-6 mt-6 h-20 justify-center text-center">
      <hr className="h-[1.5px] bg-gray-300" />
      <p className=" text-xs lg:text-sm text-gray-500">
        &copy; 2022{" "}
        <Link className="link" href="https://seedevs.live" target={"_blank"}>
          SEEDEVS
        </Link>{" "}
        BY{" "}
        <Link
          className="link"
          href="https://github.com/saiefbrahim"
          target={"_blank"}
        >
          SAIEF BRAHIM
        </Link>
        , ALL RIGHTS ARE RESERVED.
      </p>
    </footer>
  );
};

export default Footer;
