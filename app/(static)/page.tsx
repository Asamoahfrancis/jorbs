import Discoverpage from "../ui/homepage/discoverpage/discoverpage";
import Dataondicover from "../ui/homepage/dataondiscover/dataondicover";
import Joblist from "../ui/homepage/joblist/joblist";
import Image from "next/image";
import Featuredjob from "../ui/homepage/featuredjobs/featuredjob";
import { MdArrowRightAlt } from "react-icons/md";

import Whatwedo from "../ui/homepage/watwedo/whatwedo";
import Testimonies from "../ui/homepage/testimonies/testimonies";
import Emailpath from "../ui/homepage/emailpath/emailpath";
import Onemail from "../ui/homepage/emailpath/onemail/onemail";
export default function Home() {
  return (
    <>
      <section
        className="relative  h-screen grid place-items-center "
        style={{
          backgroundColor: "rgba(22, 98, 71, 0.35)",
        }}
      >
        <Discoverpage />
        <Dataondicover />
      </section>
      <section className=" flex justify-between my-4 mx-4 p-10">
        <div className="">
          <p className="text-3xl font-[400]">Browse by category</p>
          <p className="text-sm text-gray-400 py-3">
            Recruitment Made Easy in 100 seconds
          </p>
        </div>
        <div className=" flex justify-center items-center gap-4">
          <p>All Categories</p>
          <p className="h-3 w-3 rounded-full bg-green-800"></p>
        </div>
      </section>
      <section className="mx-4 grid p-10 gap-6 grid-cols-5">
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
      </section>

      <section className="mx-4  p-10 gap-6  grid place-items-center ">
        <div className="w-[50%]">
          <h1 className="text-center text-2xl font-bold p-2">How it works?</h1>
          <p className="text-center text-sm text-gray-400">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
      </section>

      <section className=" p-2 flex justify-center items-center text-center  ">
        <div className=" grid w-[55%] grid-cols-3 gap-8 mt-6">
          <div className="">
            <div className="relative grid place-items-center py-2">
              <Image
                src="/2.png"
                width={84}
                height={84}
                alt="Picture of the author"
                style={{ backgroundColor: "rgba(22, 98, 71, 0.35)" }}
                className="rounded-md"
              />
            </div>
            <p className="font-bold py-4">Create Account</p>
            <p className="text-sm text-gray-400">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-green-800 py-4">Explore Jobs</p>
              <p className="h-3 w-3 rounded-full bg-green-800"></p>
            </div>
          </div>
          <div className="">
            <div className="relative grid place-items-center py-2">
              <Image
                src="/3.png"
                width={84}
                height={84}
                alt="Picture of the author"
                style={{ backgroundColor: "rgba(22, 98, 71, 0.35)" }}
                className="rounded-md"
              />
            </div>
            <p className="font-bold py-4">Create Account</p>
            <p className="text-sm text-gray-400">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-green-800 py-4">Explore Jobs</p>
              <p className="h-3 w-3 rounded-full bg-green-800"></p>
            </div>
          </div>
          <div className="">
            <div className="relative grid place-items-center py-2">
              <Image
                src="/1.png"
                width={84}
                height={84}
                alt="Picture of the author"
                style={{ backgroundColor: "rgba(22, 98, 71, 0.35)" }}
                className="rounded-md"
              />
            </div>
            <p className="font-bold py-4">Create Account</p>
            <p className="text-sm text-gray-400">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-green-800 py-4">Explore Jobs</p>
              <p className="h-3 w-3 rounded-full bg-green-800"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-8 ">
          <p className="text-center text-3xl pt-6 font-bold">Featured Jobs</p>
          <p className="text-center text-sm text-gray-400">
            Find a job thats perfect for you. about 800+ new jobs everyday
          </p>
        </div>
      </section>
      <section className=" w-[90%] mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <Featuredjob />
          <Featuredjob />
          <Featuredjob />
          <Featuredjob />
          <Featuredjob />
          <Featuredjob />
        </div>
      </section>

      <section className="grid place-items-center my-10">
        <div className="p-10">
          <button className="px-10 py-2 border  border-green-800 text-green-800 rounded-md flex items-center gap-4">
            See More Jobs <MdArrowRightAlt size="2em" />
          </button>
        </div>
      </section>

      <section className=" bg-gray-100 mx-auto px-4 py-8">
        <p className="text-center text-2xl font-bold">
          What can I do with Jhely?
        </p>
        <p className="text-center text-sm text-gray-100">
          Streamline your hiring process with strategic channels to reach
          qualified candidates
        </p>
        <div className=" grid grid-cols-4  text-sm text-center">
          <Whatwedo />
          <Whatwedo />
          <Whatwedo />
          <Whatwedo />
        </div>
      </section>
      <section className="py-20">
        <p className="text-3xl text-center font-bold">
          Testimonials From Our Customers
        </p>
        <p className="text-center text-sm py-4">Feedback from our clients</p>
      </section>

      <section className="flex   overflow-x-auto gap-6 p-3">
        <Testimonies />
        <Testimonies />
        <Testimonies />
        <Testimonies />
        <Testimonies />
      </section>
      <section className="grid place-items-center p-8">
        <div className=" gap-2 flex">
          <p className="h-[6px] w-[6px] rounded-full bg-green-700/40"></p>
          <p className="h-[6px] w-[60px] rounded-lg bg-green-700"></p>
          <p className="h-[6px] w-[6px] rounded-full bg-green-700/40"></p>
        </div>
      </section>

      <section className="relative  w-[80%] mx-auto my-24  bg-gray-100/50 ">
        <Onemail />
        <Emailpath />
      </section>
    </>
  );
}
