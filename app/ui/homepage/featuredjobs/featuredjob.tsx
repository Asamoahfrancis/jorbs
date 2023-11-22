import React from "react";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
const Featuredjob = () => {
  return (
    <div className="flex  shadow-md py-4 px-2 flex-col">
      <div className="border-b-2 py-2 flex justify-between">
        <section className=" flex flex-col items-center">
          <figure className="text-cyan-300 mb-auto">
            <FaReact size={80} />
          </figure>
          <p className="px-6 py-2 bg-gray-100  rounded-full">Fulltime</p>
        </section>
        <section className="">
          <p className="text-green-800">DFK DANCO Company Limited</p>
          <p className="text-xl font-bold">Front End Developer</p>
          <div className="mb-4 flex gap-4 text-xs text-gray-400  ">
            <div className="flex items-center">
              <p className="">
                <GrLocation />
              </p>
              <p>Las Vegas, NV 89107, USA</p>
            </div>
            <div className=" text-xs text-gray-400 gap-2 flex items-center">
              <p className="">
                <SlCalender />
              </p>
              <p>4 days ago.</p>
            </div>
          </div>
          <button className=" px-6 py-2 bg-gray-100  rounded-full">
            Remote
          </button>
        </section>
        <section className="flex  flex-col items-end">
          <div className="mb-auto text-gray-400  rounded-full border p-4">
            <IoMdHeart />
          </div>
          <div className=" text-yellow-400 flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
          </div>
        </section>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuCircleDollarSign />
          <p>
            $500.00 - $700.00/{" "}
            <span className="text-xs text-gray-400">month</span>
          </p>
        </div>
        <div className="text-gray-400 text-sm">
          <p>26 days left to apply</p>
        </div>
      </div>
    </div>
  );
};

export default Featuredjob;
