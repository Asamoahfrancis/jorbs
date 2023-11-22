import React from "react";

const Onemail = () => {
  return (
    <div className="absolute left-0 top-[30%] p-6  w-full flex items-center justify-between">
      <section className="mr-auto ">
        <p className="text-2xl font-bold">Explore a job now!</p>
        <p className="text-sm">
          Search all the open positions on the web. Get your own personalized
          salary estimate. <br /> Read reviews on over 30000+ companies
          worldwide.
        </p>
      </section>
      <section className="flex gap-4">
        <button className="bg-green-800 text-white rounded-md px-6 py-2">
          Apply Now
        </button>
        <button className=" text-green-800 rounded-md bg-gray-200 px-6 py-2">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default Onemail;
