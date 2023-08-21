import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Hero from "./Hero";
import Content from "./Content";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Content />
      </main>
      <Footer />
    </>
  );
}
