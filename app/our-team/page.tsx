import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Hero from "./Hero";
import TeamList from "./TeamList";

export default function OurTeam() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TeamList />
      </main>
      <Footer />
    </>
  );
}
