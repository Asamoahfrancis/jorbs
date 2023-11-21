import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" py-4 mx-4 ">
      <ul className="flex justify-between items-center ">
        <li className=" py-3    text-3xl">
          <Link href={"/"}>Jorbs</Link>
        </li>
        <div className=" flex gap-2">
          <li className="py-3 px-6 rounded-md  hover:bg-green-700 hover:text-white">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="py-3 px-6 rounded-md  hover:bg-green-700 hover:text-white">
            <Link href={"/"}>Jobs</Link>
          </li>
          <li className="py-3 px-6 rounded-md  hover:bg-green-700 hover:text-white">
            <Link href={"/"}>Partners</Link>
          </li>
          <li className="py-3 px-6 rounded-md  hover:bg-green-700 hover:text-white">
            <Link href={"/"}>About Us</Link>
          </li>
          <li className="py-3 px-6   hover:bg-green-700 hover:text-white rounded-md ">
            <Link href={"/"}>Contact Us</Link>
          </li>
        </div>
        <div className="flex gap-4 items-center ">
          <li className="py-3 px-6  hover:bg-green-700 hover:text-white rounded-md ">
            <Link href={"/signin"}>Login</Link>
          </li>
          <li className="py-2 px-4 bg-green-700 text-white  rounded-full">
            <Link href={"/"}>Upload Resume</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
