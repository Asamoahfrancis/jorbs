import Formside from "@/app/ui/signin/formside/formside";
import Imageside from "@/app/ui/signin/imgeside/imageside";
import React from "react";

function Signin() {
  return (
    <div>
      <section className=" min-h-screen    grid grid-cols-2">
        <div
          className="relative"
          style={{ backgroundColor: "rgba(22, 98, 71, 0.35)" }}
        >
          <Imageside />
        </div>
        <div className="border grid place-items-center">
          <Formside />
        </div>
      </section>
    </div>
  );
}

export default Signin;
