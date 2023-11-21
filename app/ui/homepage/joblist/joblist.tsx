import React from "react";

const Joblist = () => {
  return (
    <div className=" py-2 px-4 rounded-lg shadow-md">
      <p className="text-sm  font-bold">Front End Developer</p>
      <p className="text-sm text-gray-400 py-2">62 Jobs available</p>
      <div className="flex items-center gap-4">
        <p className="text-green-800 py-4">Explore Jobs</p>
        <p className="h-3 w-3 rounded-full bg-green-800"></p>
      </div>
    </div>
  );
};

export default Joblist;
