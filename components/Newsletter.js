import Image from "next/image";
const Newsletter = () => {
  return (
    <div
      className=" flex flex-col lg:flex-row bg-no-repeat h-60 justify-center bg-right-bottom bg-cover items-center gap-6 mt-12"
      style={{ backgroundImage: `url("/newsletterbg.webp")` }}
    >
      <div className=" lg:w-[50%] flex justify-center text-center lg:text-left">
        <h1 className=" text-white text-xl lg:text-2xl font-medium lg:w-[80%]">
          Subscribe to our newsletter and receive exclusive offers every week
        </h1>
      </div>
      <div className=" flex flex-col lg:flex-row gap-6 lg:gap-6 lg:w-[50%] items-center justify-center">
        <input
          className=" w-80 lg:w-[60%] rounded-3xl px-5 input input-bordered bg-white"
          placeholder="Your Email"
          type="email"
        />
        <button className=" btn btn-primary rounded-3xl min-h-0 h-12 px-5">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
