import Navbar from "./ui/navbar/navbar";
import Discoverpage from "./ui/discoverpage/discoverpage";
import Dataondicover from "./ui/dataondiscover/dataondicover";
export default function Home() {
  return (
    <main className="border max-w-[1444px] mx-auto">
      <div className="sticky z-[50] top-0 h-[100p] border bg-white   ">
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
    </main>
  );
}
