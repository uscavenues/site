import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Hero from "./Hero";
import Cards from "./Cards";
import WorkWithUs from "./WorkWithUs";
import Info from "./Info";

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cards />
        {/* <Info /> */}
        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
