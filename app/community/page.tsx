import Footer from "../Footer";
import Navbar from "../Navbar";
import Content from "./Content";
import Hero from "./Hero";

export default function Community() {
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
