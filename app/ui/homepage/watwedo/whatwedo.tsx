import React from "react";
import { MdOutlineSavings } from "react-icons/md";

const Whatwedo = () => {
  return (
    <section className="p-4 text-gray-400">
      <p className="grid place-items-center py-2 text-green-800">
        <MdOutlineSavings size="2em" />
      </p>
      <p className="font-bold text-black mb-3">Reduce Hiring Bais</p>
      <p className="tracking-wider">
        Structured Digital Interviews Increase The Predictive Validity Of Your
        Hires By 65%.
      </p>
    </section>
  );
};

export default Whatwedo;
