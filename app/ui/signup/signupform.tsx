import React from "react";
import Image from "next/image";
import Link from "next/link";
const Signupform = () => {
  return (
    <div className=" w-[300px]">
      <section>
        <div className="grid place-items-center">
          <Link href={"/"} className="text-center  text-3xl font-bold py-3">
            Jorbs
          </Link>
        </div>
        <h4 className="text-center text-2xl py-3 tracking-widest font-[500]">
          Welcome Back!
        </h4>
      </section>
      <form action="" className="text-black ">
        <div className=" my-3 ">
          <input
            type="text"
            name=""
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-gray-400 text-md border-b-2 w-full "
            placeholder="First Name "
          />
        </div>

        <div className=" my-3 ">
          <input
            type="text"
            name=""
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-gray-400 text-md border-b-2 w-full "
            placeholder="Last Name "
          />
        </div>
        <div className=" my-3 ">
          <input
            type="text"
            name=""
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-gray-400 text-md border-b-2 w-full "
            placeholder="Phone Number"
          />
        </div>

        <div className=" my-4">
          <input
            type="text"
            name=""
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-gray-400 text-md border-b-2 w-full "
            placeholder="Email "
          />
        </div>
        <div className=" my-3 ">
          <input
            type="text"
            name=""
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-gray-400 text-md border-b-2 w-full "
            placeholder="Password "
          />
        </div>
        <div className=" my-3 ">
          <input
            type="text"
            name=""
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-gray-400 text-md border-b-2 w-full "
            placeholder="Comfirm Password"
          />
        </div>

        <div className="grid place-items-center">
          <button className="py-3 w-40 rounded-full h-10 flex items-center justify-center bg-green-700 text-white">
            Sign Up
          </button>
        </div>
      </form>
      <section className=" flex items-center py-3 text-sm gap-4">
        <p className="h-[1px] bg-gray-300 flex-auto"></p>
        <p className="text-gray-400">or</p>
        <p className="h-[1px] bg-gray-300 flex-auto"></p>
      </section>
      <section className="grid place-items-center ">
        <div className="flex items-center gap-2 text-sm ">
          <div className="relative">
            <Image
              src="/g.png"
              width={35}
              height={35}
              alt="Picture of the author"
            />
          </div>
          <p className="text-gray-400">Continue with Google</p>
        </div>
      </section>
      <section>
        <div className="grid place-items-center">
          <div className=" py-4 text-gray-400 text-sm flex gap-2 items-center">
            <p>Alredy have an Account? </p>
            <Link href={"/signin"} className="underline">
              Signin
            </Link>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signupform;
