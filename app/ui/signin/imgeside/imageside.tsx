import React from "react";
import Image from "next/image";
const Imageside = () => {
  return (
    <Image
      alt="Mountains"
      src="/devimage.png"
      // placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: "-100",
      }}
    />
  );
};

export default Imageside;
