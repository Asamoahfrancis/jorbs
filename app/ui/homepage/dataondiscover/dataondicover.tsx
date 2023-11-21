import React from "react";

const Dataondicover = () => {
  return (
    <div className=" text-white w-[700px]">
      <h1 className="text-5xl text-center font-bold py-6">
        Discover remote jobs now
      </h1>
      <section>
        <div className="grid place-items-center ">
          <section className="relative w-[70%] ">
            <p></p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Jobs title or keyword"
              className=" px-8 py-4 w-full rounded-xl"
            />
            <button className=" absolute  right-4 top-2 px-4 py-2 rounded-md bg-green-900">
              Apply now
            </button>
          </section>
        </div>
        <p className="text-center py-4">Popular search</p>
        <div className="flex flex-wrap justify-center [&>button]:text-xs [&>button]:text-green-900 [&>button]:bg-[#D9D9D9]  [&>button]:px-3 [&>button]:py-2 [&>button]:rounded-full gap-4">
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
          <button>Web Developer</button>
        </div>
      </section>
    </div>
  );
};

export default Dataondicover;
