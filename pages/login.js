import Head from "next/head";
const login = () => {
  return (
    <>
      <Head>
        <title>SeeBrand - Login</title>
        <meta name="Login SeeBrand" content="Login Page" />
      </Head>
      <div className="flex justify-center my-12">
        <div className="card flex w-full justify-center max-w-sm">
          <h1 className=" text-xl font-medium text-center">Login</h1>
          <div className="card-body">
            <div className="form-control mb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered bg-white rounded-3xl"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered bg-white rounded-3xl"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-3xl">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
