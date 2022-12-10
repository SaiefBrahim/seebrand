import Head from "next/head";
const login = () => {
  return (
    <>
      <Head>
        <title>SeeBrand - Login</title>
        <meta name="Login SeeBrand" content="Login Page" />
      </Head>
      <div className="flex justify-center">
        <div className="card flex w-full justify-center max-w-sm">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
