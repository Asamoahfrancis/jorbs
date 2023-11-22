import React from "react";
import Image from "next/image";
const Emailpath = () => {
  return (
    <div className="">
      <section className="flex justify-between">
        <figure className="">
          <Image
            src="/pensil.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-md"
          />
        </figure>
        <figure className="">
          <Image
            src="/email.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-md"
          />
        </figure>
      </section>
    </div>
  );
};

export default Emailpath;
