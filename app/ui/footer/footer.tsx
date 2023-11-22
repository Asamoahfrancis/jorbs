import React from "react";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white text-xs  ">
      <section className="  flex justify-between p-6">
        <div className=" flex justify-center items-center">
          <p className="text-3xl">Jorbs</p>
        </div>
        <ul className=" flex gap-4">
          <li className="px-4  py-2">Home</li>
          <li className="px-4  py-2">Jobs</li>
          <li className="px-4  py-2">Partners</li>
          <li className="px-4  py-2">About Us</li>
          <li className="px-4  py-2">Contact Us</li>
        </ul>
      </section>
      <section className="h-[2px] bg-gray-300/40"></section>
      <section className="grid grid-cols-3 p-6">
        <div className=" flex flex-col">
          <section className="flex mb-auto gap-2">
            <p className=" flex justify-center items-center bg-gray-400/40 rounded-md px-2 py-1">
              {" "}
              <TfiYoutube size="1.5em" />
            </p>
            <p className=" flex justify-center items-center bg-gray-400/40 rounded-md px-2">
              {" "}
              <FaLinkedin />
            </p>
            <p className=" flex justify-center items-center bg-gray-400/40 rounded-md px-2">
              <RiTwitterXFill />
            </p>
            <p className=" flex justify-center items-center bg-gray-400/40 rounded-md px-2">
              <FaInstagramSquare />
            </p>
          </section>
          <section>
            <p>© 2023 JHELY. Design with by M.</p>
          </section>
        </div>
        <div className=" flex justify-center items-end">
          <p>Terms & Condition</p>
        </div>
        <div className=" text-sm text-end">
          <p>+233 12 345 6789</p>
          <p>info@jhely.com</p>
          <p>123 Spintex community 18,</p>
          <p>Tema Ghana.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
