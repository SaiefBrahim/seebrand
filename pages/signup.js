import Head from "next/head";
import Link from "next/link";
const signup = () => {
  return (
    <>
      <Head>
        <title>SeeBrand - Sign up</title>
        <meta name="Sign up SeeBrand" content="Sign up Page" />
      </Head>
      <div className="flex justify-center my-24">
        <div className="card flex w-full justify-center max-w-sm">
          <h1 className=" text-2xl font-medium text-center">Sign up</h1>
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
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered border-gray-400 bg-white rounded-3xl"
                />
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
                Sign up
              </button>
            </div>
            <div className=" flex justify-evenly w-full text-xs mt-2">
              <span>Already member?</span>
              <Link href="/signup" className=" link link-hover">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
