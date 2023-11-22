import Footer from "../ui/footer/footer";
import Navbar from "../ui/navbar/navbar";

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" max-w-[1444px] mx-auto">
      <div className="sticky z-[50] top-0 h-[100p]  bg-white  shadow-lg ">
        <Navbar />
      </div>
      {children}
      <Footer />
    </main>
  );
}
