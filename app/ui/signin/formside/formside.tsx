import React from "react";
import Image from "next/image";
import Link from "next/link";
const Formside = () => {
  return (
    <div className=" w-[300px]">
      <section>
        <div className="grid place-items-center">
          <Link href={"/"} className="text-center  text-3xl font-bold py-3">
            Jorbs
          </Link>
        </div>
        <h4 className="text-center text-2xl py-10 tracking-widest font-[500]">
          Welcome Back!
        </h4>
      </section>
      <form action="" className="text-black ">
        <div className="py-4 mb-4">
          <label htmlFor="" className="block py-2 text-sm text-gray-400">
            User name or Email
          </label>
          <input
            type="text"
            name=""
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-black text-xl border-b-2 w-full "
            placeholder="David Matter "
          />
        </div>
        <div>
          <label htmlFor="" className="block py-2 text-sm text-gray-400">
            Password
          </label>
          <input
            type="text"
            name=""
            placeholder="*********"
            id=""
            className=" text-black block h-[40px] focus:outline-none placeholder:text-black text-xl border-b-2 w-full "
          />
        </div>
        <p className="text-right underline pb-6 mt-2 text-sm text-gray-400">
          forgot password?
        </p>
        <div className="grid place-items-center">
          <button className="py-3 w-40 rounded-full h-12 bg-green-700 text-white">
            Sign in
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
          <p className="text-gray-400">Sign in with Google</p>
        </div>
      </section>
      <section>
        <div className="grid place-items-center">
          <div className=" py-4 text-gray-400 text-sm flex gap-2 items-center">
            <p>Not a member? </p>
            <Link href={"/signup"} className="underline">
              Create account
            </Link>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formside;
