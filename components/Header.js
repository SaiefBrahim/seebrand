import Link from "next/link";
import { useState, useEffect } from "react";
const Header = () => {
  const [navScroll, setNavScroll] = useState("bg-transparent");
  const [toggle1, setToggle1] = useState("invisible opacity-0");
  const [toggle2, setToggle2] = useState("invisible opacity-0");
  const [toggle3, setToggle3] = useState("invisible opacity-0");
  const [connected, setConnected] = useState(false);

  const handleToggle1 = () => {
    toggle1 === "invisible opacity-0"
      ? setToggle1("visible opacity-100")
      : setToggle1("invisible opacity-0");
  };
  const handleToggle2 = () => {
    toggle2 === "invisible opacity-0"
      ? setToggle2("visible opacity-100")
      : setToggle2("invisible opacity-0");
  };
  const handleToggle3 = () => {
    toggle3 === "invisible opacity-0"
      ? setToggle3("visible opacity-100")
      : setToggle3("invisible opacity-0");
  };
  const handleScroll = () => {
    if (window.scrollY) {
      setNavScroll("bg-black");
    } else setNavScroll("bg-transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      {/* desktop view */}
      {/* logo */}
      <div
        className={`hidden lg:flex navbar fixed z-50 transition-colors duration-300 ${navScroll}`}
      >
        <div className="navbar-start">
          <h1 className="btn btn-ghost normal-case text-2xl text-white">
            SeeBrand
          </h1>
        </div>
        {/* mega menu */}
        <div className="navbar-center flex">
          <ul className="flex flex-row p-0 text-white">
            <li
              onMouseEnter={() => {
                handleToggle1();
              }}
              onMouseLeave={() => {
                handleToggle1();
              }}
            >
              <Link className="py-4 px-4" href="#">
                Men
              </Link>

              <ul
                className={` ${toggle1} megamenumen grid transition-all duration-300 ease-in-out bg-gray-50 text-black grid-cols-5 justify-items-center items-center w-screen absolute top-[100%] p-16 megamenu left-0`}
              >
                <ul className=" font-medium flex flex-col gap-6">
                  <li>
                    <Link href="#">Sale</Link>
                  </li>
                  <li>
                    <Link href="#">BestSellers</Link>
                  </li>
                  <li>
                    <Link href="#">Latest Arrivals</Link>
                  </li>
                </ul>
                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    CLOTHING
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Jeans</Link>
                    </li>
                    <li>
                      <Link href="#">Sweetshirts and Hoodies</Link>
                    </li>
                    <li>
                      <Link href="#">Tracksuit</Link>
                    </li>
                    <li>
                      <Link href="#">Jacket and Coats</Link>
                    </li>
                    <li>
                      <Link href="#">T-shirts</Link>
                    </li>
                    <li>
                      <Link href="#">Shorts</Link>
                    </li>
                  </ul>
                </li>
                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    SHOES
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link className="" href="#">
                        Casual
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Freestyle</Link>
                    </li>
                    <li>
                      <Link href="#">Running</Link>
                    </li>
                    <li>
                      <Link href="#">Hiking</Link>
                    </li>
                    <li>
                      <Link href="#">Boots</Link>
                    </li>
                    <li>
                      <Link href="#">Trainers</Link>
                    </li>
                  </ul>
                </li>

                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    ACCESSORIES
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Caps</Link>
                    </li>
                    <li>
                      <Link href="#">Jewellery</Link>
                    </li>
                    <li>
                      <Link href="#">Bags</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Socks</Link>
                    </li>
                  </ul>
                </li>

                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    SALE
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Caps</Link>
                    </li>
                    <li>
                      <Link href="#">Jewellery</Link>
                    </li>
                    <li>
                      <Link href="#">Bags</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Socks</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => {
                handleToggle2();
              }}
              onMouseLeave={() => {
                handleToggle2();
              }}
            >
              <Link className="py-4 px-4" href="#">
                Women
              </Link>

              <ul
                className={` ${toggle2} megamenuwomen grid transition-all duration-300 ease-in-out bg-gray-50 text-black grid-cols-5 justify-items-center items-center w-screen absolute megamenu top-[100%] p-16 left-0  `}
              >
                <ul className=" font-medium flex flex-col gap-6">
                  <li>
                    <Link href="#">Sale</Link>
                  </li>
                  <li>
                    <Link href="#">BestSellers</Link>
                  </li>
                  <li>
                    <Link href="#">Latest Arrivals</Link>
                  </li>
                </ul>
                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    CLOTHING
                  </Link>
                  <ul className="font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Trousers</Link>
                    </li>
                    <li>
                      <Link href="#">Jeans</Link>
                    </li>
                    <li>
                      <Link href="#">Sweetshirts and Hoodies</Link>
                    </li>
                    <li>
                      <Link href="#">Jackets</Link>
                    </li>
                    <li>
                      <Link href="#">Blazers</Link>
                    </li>
                    <li>
                      <Link href="#">Tops & Bodysuits</Link>
                    </li>
                  </ul>
                </li>
                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    SHOES
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Casual</Link>
                    </li>
                    <li>
                      <Link href="#">Freestyle</Link>
                    </li>
                    <li>
                      <Link href="#">Running</Link>
                    </li>
                    <li>
                      <Link href="#">Hiking</Link>
                    </li>
                    <li>
                      <Link href="#">Boots</Link>
                    </li>
                    <li>
                      <Link href="#">Trainers</Link>
                    </li>
                  </ul>
                </li>

                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    ACCESSORIES
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Caps</Link>
                    </li>
                    <li>
                      <Link href="#">Jewellery</Link>
                    </li>
                    <li>
                      <Link href="#">Bags</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Socks</Link>
                    </li>
                  </ul>
                </li>

                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    SALE
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Caps</Link>
                    </li>
                    <li>
                      <Link href="#">Jewellery</Link>
                    </li>
                    <li>
                      <Link href="#">Bags</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Socks</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => {
                handleToggle3();
              }}
              onMouseLeave={() => {
                handleToggle3();
              }}
            >
              <Link className="py-4 px-4" href="#">
                Kid
              </Link>
              <ul
                className={` ${toggle3} megamenukid grid transition-all duration-300 ease-in-out bg-gray-50 text-black grid-cols-5 justify-items-center items-center w-screen absolute megamenu top-[100%] p-16 left-0  `}
              >
                <ul className=" font-medium flex flex-col gap-6">
                  <li>
                    <Link href="#">Sale</Link>
                  </li>
                  <li>
                    <Link href="#">BestSellers</Link>
                  </li>
                  <li>
                    <Link href="#">Latest Arrivals</Link>
                  </li>
                </ul>
                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    CLOTHING
                  </Link>
                  <ul className="font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Trousers</Link>
                    </li>
                    <li>
                      <Link href="#">Jeans</Link>
                    </li>
                    <li>
                      <Link href="#">Sweetshirts and Hoodies</Link>
                    </li>
                    <li>
                      <Link href="#">Jackets</Link>
                    </li>
                    <li>
                      <Link href="#">Blazers</Link>
                    </li>
                    <li>
                      <Link href="#">Tops & Bodysuits</Link>
                    </li>
                  </ul>
                </li>
                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    SHOES
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Casual</Link>
                    </li>
                    <li>
                      <Link href="#">Freestyle</Link>
                    </li>
                    <li>
                      <Link href="#">Running</Link>
                    </li>
                    <li>
                      <Link href="#">Hiking</Link>
                    </li>
                    <li>
                      <Link href="#">Boots</Link>
                    </li>
                    <li>
                      <Link href="#">Trainers</Link>
                    </li>
                  </ul>
                </li>

                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    ACCESSORIES
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Caps</Link>
                    </li>
                    <li>
                      <Link href="#">Jewellery</Link>
                    </li>
                    <li>
                      <Link href="#">Bags</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Socks</Link>
                    </li>
                  </ul>
                </li>

                <li className=" flex flex-col gap-6">
                  <Link className=" font-medium" href="#">
                    SALE
                  </Link>
                  <ul className=" font-medium text-gray-600 flex flex-col gap-2">
                    <li>
                      <Link href="#">Caps</Link>
                    </li>
                    <li>
                      <Link href="#">Jewellery</Link>
                    </li>
                    <li>
                      <Link href="#">Bags</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Socks</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* end mega menu */}
        <div className="navbar-end">
          {/* search bar */}
          <div className="Hotbg hover:btn-ghost">
            <input
              type="text"
              name=""
              className="Hotbg-txt placeholder:text-white placeholder:opacity-75"
              placeholder="Search ..."
            />
            <button className="Hotbg-btn">
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* end search bar */}
          {/* cart */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle text-white"
              >
                <div className="indicator">
                  <svg
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item text-white">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 shadow bg-gray-50"
              >
                <div className="card-body">
                  <span className="font-medium text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button
                      aria-label="View Cart"
                      className="btn btn-primary text-white btn-block"
                    >
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end cart  */}
          {/* account menu */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-5">
                <svg
                  width={20}
                  height={20}
                  id="noun_avatar_2102861_2_"
                  data-name="noun_avatar_2102861 (2)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 19"
                >
                  <path
                    id="noun_avatar_2102861_2_2"
                    data-name="noun_avatar_2102861 (2)"
                    d="M23.144,19.823l-4.2-1.723a.594.594,0,0,1-.375-.548V16.57a.557.557,0,0,1,.119-.349,8.265,8.265,0,0,0,1.721-5.03C20.41,8.086,18.437,6,15.5,6s-4.91,2.086-4.91,5.192a8.266,8.266,0,0,0,1.721,5.03.557.557,0,0,1,.119.348v.981a.594.594,0,0,1-.375.548l-4.2,1.723A2.97,2.97,0,0,0,6,22.575v1.634A.792.792,0,0,0,6.792,25H24.208A.792.792,0,0,0,25,24.208V22.575A2.97,2.97,0,0,0,23.144,19.823Zm.273,3.594H7.583v-.842a1.392,1.392,0,0,1,.874-1.287l4.2-1.723a2.172,2.172,0,0,0,1.357-2.013V16.57a2.145,2.145,0,0,0-.468-1.34,6.729,6.729,0,0,1-1.372-4.038c0-2.66,1.718-3.608,3.327-3.608s3.327.948,3.327,3.608a6.729,6.729,0,0,1-1.372,4.038,2.146,2.146,0,0,0-.468,1.34v.981a2.172,2.172,0,0,0,1.357,2.013l4.2,1.723a1.392,1.392,0,0,1,.874,1.287Z"
                    transform="translate(-6 -6)"
                    fill="#fff"
                  />
                </svg>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-50 rounded-box w-48"
            >
              {connected ? (
                <>
                  <li>
                    <Link href="#">Profile</Link>
                  </li>
                  <li>
                    <Link href="#">Whishlist</Link>
                  </li>
                  <li>
                    <Link href="#">Settings</Link>
                  </li>
                  <li>
                    <Link href="#">Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="#">Whishlist</Link>
                  </li>
                  <li>
                    <Link href="/account/signup">Signup</Link>
                  </li>
                  <li>
                    <Link href="/account/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* end account menu */}
        </div>
      </div>

      {/* mobile header */}

      <div className="lg:hidden fixed top-0 w-full z-50">
        <div className="w-full navbar bg-white">
          <div className=" mx-2 px-2 normal-case font-medium text-xl ">
            SeeBrand
          </div>
          <div className="navbar-end w-full">
            <button aria-label="Search" className="btn btn-ghost btn-circle">
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item text-white">
                      8
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-medium text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button
                        aria-label="View Cart"
                        className="btn btn-primary btn-block"
                      >
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="btn btn-ghost btn-circle">
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
