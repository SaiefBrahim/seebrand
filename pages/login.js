import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
const login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <>
      <Head>
        <title>SeeBrand - Login</title>
        <meta name="Login SeeBrand" content="Login Page" />
      </Head>
      <div className="flex justify-center my-24">
        <div className="card flex w-full justify-center max-w-sm">
          <h1 className=" text-2xl font-medium text-center">Login</h1>
          <div className="card-body">
            <div className=" flex flex-col gap-4">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered border-gray-400 bg-white rounded-3xl"
                />
              </div>
              <div className="form-control">
                <label className=" flex justify-between relative">
                  <input
                    type={!passwordVisibility ? "password" : "text"}
                    placeholder="Password"
                    className="input input-bordered border-gray-400 bg-white rounded-3xl w-full"
                  />
                  <span
                    className="absolute right-[1%] cursor-pointer p-2 top-[10%]"
                    onClick={() => {
                      setPasswordVisibility(!passwordVisibility);
                    }}
                  >
                    {!passwordVisibility ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </span>
                </label>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox w-5 h-5 checkbox-primary mr-2"
                  />
                  <span className="label-text text-xs">Keep me signed in</span>
                </label>
              </div>
              <label className="label">
                <Link
                  href="/account/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className=" flex justify-between gap-4 w-full">
              <button
                aria-label="Sign in with Facebook"
                className=" btn rounded-3xl flex justify-evenly bg-[#3b5998] text-white w-[48%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.494"
                  height="17.559"
                  viewBox="0 0 9.494 17.559"
                >
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M31.213,0,28.936,0a4,4,0,0,0-4.211,4.321V6.314H22.435a.358.358,0,0,0-.358.358V9.559a.358.358,0,0,0,.358.358h2.289V17.2a.358.358,0,0,0,.358.358H28.07a.358.358,0,0,0,.358-.358V9.917H31.1a.358.358,0,0,0,.358-.358V6.672a.358.358,0,0,0-.358-.358H28.428V4.625c0-.812.193-1.224,1.251-1.224h1.534a.358.358,0,0,0,.358-.358V.362A.358.358,0,0,0,31.213,0Z"
                    transform="translate(-22.077)"
                    fill="#fff"
                  />
                </svg>
                <span>Facebook</span>
              </button>
              <button
                aria-label="Sign in with Gmail"
                className="btn rounded-3xl flex justify-evenly bg-white border-[#F1584D] text-black w-[48%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.253"
                  height="14.667"
                  viewBox="0 0 19.253 14.667"
                >
                  <g id="gmail" transform="translate(0 -60.983)">
                    <g
                      id="Group_11"
                      data-name="Group 11"
                      transform="translate(1.255 60.983)"
                    >
                      <path
                        id="Path_11"
                        data-name="Path 11"
                        d="M50.36,122.808,49.131,135.15H34.369l-.99-12.1,8.371,4.687Z"
                        transform="translate(-33.379 -120.483)"
                        fill="#f2f2f2"
                      />
                      <path
                        id="Path_12"
                        data-name="Path 12"
                        d="M54.5,60.983l-8.193,7.7-8.193-7.7H54.5Z"
                        transform="translate(-37.936 -60.983)"
                        fill="#f2f2f2"
                      />
                    </g>
                    <path
                      id="Path_13"
                      data-name="Path 13"
                      d="M2.245,113.6v11.113H.908A.908.908,0,0,1,0,123.809V111.967l1.467.04Z"
                      transform="translate(0 -49.067)"
                      fill="#f14336"
                    />
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M454.533,109.081v11.842a.908.908,0,0,1-.908.908h-1.337V110.717l.74-1.749Z"
                      transform="translate(-435.28 -46.181)"
                      fill="#d32e2a"
                    />
                    <path
                      id="Path_15"
                      data-name="Path 15"
                      d="M19.253,61.891V62.9l-2.245,1.637-7.381,5.38-7.381-5.38L0,62.9V61.891a.908.908,0,0,1,.908-.908h.526l8.193,5.972,8.193-5.972h.525A.908.908,0,0,1,19.253,61.891Z"
                      fill="#f14336"
                    />
                    <path
                      id="Path_16"
                      data-name="Path 16"
                      d="M2.245,113.6,0,113.256v-1.289Z"
                      transform="translate(0 -49.067)"
                      fill="#d32e2a"
                    />
                  </g>
                </svg>
                <span>Google</span>
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                aria-label="Sign in"
                className="btn btn-primary rounded-3xl"
              >
                Sign in
              </button>
            </div>
            <div className=" flex justify-evenly w-full text-xs mt-2">
              <span>Not a member yet?</span>
              <Link href="/signup" className=" link link-hover">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
