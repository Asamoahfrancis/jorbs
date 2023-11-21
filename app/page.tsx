import Navbar from "./ui/navbar/navbar";
import Discoverpage from "./ui/homepage/discoverpage/discoverpage";
import Dataondicover from "./ui/homepage/dataondiscover/dataondicover";
import Joblist from "./ui/homepage/joblist/joblist";
import Image from "next/image";
export default function Home() {
  return (
    <main className=" max-w-[1444px] mx-auto">
      <div className="sticky z-[50] top-0 h-[100p]  bg-white  shadow-lg ">
        <Navbar />
      </div>
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
    </main>
  );
}
