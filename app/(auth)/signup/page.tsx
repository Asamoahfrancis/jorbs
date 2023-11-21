import Imageside from "@/app/ui/signin/imgeside/imageside";
import Signupform from "@/app/ui/signup/signupform";
import React from "react";

const Signup = () => {
  return (
    <div>
      <section className=" min-h-screen    grid grid-cols-2">
        <div className="border grid place-items-center">
          <Signupform />
        </div>
        <div
          className="relative"
          style={{ backgroundColor: "rgba(22, 98, 71, 0.35)" }}
        >
          <Imageside />
        </div>
      </section>
    </div>
  );
};

export default Signup;
