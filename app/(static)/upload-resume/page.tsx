import React from "react";
import Uploadresume from "@/app/ui/homepage/upload-resume/uploadresume";
const Resume = () => {
  return (
    <div className="">
      <section className="grid grid-cols-10  ">
        <div className=" border border-red-400 col-span-2 sticky top-0">
          <Uploadresume />
        </div>
        <div className=" col-span-8 bg-gray-200">
          <section className="w-[80%] mt-8 border mx-auto">
            <p>Resumes</p>
            <div className="bg-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo
              nam odio excepturi amet. Possimus tempora vel eveniet magnam optio
              quo numquam maiores, sunt soluta quod ratione nam nisi nobis!
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Resume;
