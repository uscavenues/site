import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Hero from "@/app/our-team/Hero";
import TeamList from "@/app/our-team/TeamList";

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
