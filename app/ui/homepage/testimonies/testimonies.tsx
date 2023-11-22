import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Image from "next/image";
const Testimonies = () => {
  return (
    <div className="p-4  rounded-md shrink-0 grow-0 w-[30%] shadow-md bg-gray-100">
      <section className="text-green-800 flex justify-between font-bold">
        <p>Great Quality</p>
        <p>
          <RiDoubleQuotesR />
        </p>
      </section>
      <section>
        <p className="py-4 text-sm">
          Without Jhely i&apos;d be homeless, they found me a job and get sorted
          out quickly with everything! Can&apos;t quite... The entire team works
          really hard ans ensure high level of quality.
        </p>
      </section>
      <section className="flex items-center gap-4">
        <figure className="">
          <Image
            src="/photo.png"
            width={103}
            height={103}
            alt="Picture of the author"
            className="rounded-full"
          />
        </figure>
        <div className="text-sm">
          <p>Anthony Graham</p>
          <p>Web Designer</p>
        </div>
      </section>
    </div>
  );
};

export default Testimonies;
