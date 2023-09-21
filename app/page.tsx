import Footer from "@/app/Footer";
import Hero from "./Hero";
import Clients from "./Clients";
import Navbar from "./Navbar";
import Cards from "./Cards";
import MeetOurTeam from "./MeetOurTeam";
import Info from "./Info";
import NewHero from "./NewHero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* <Hero /> */}
        <NewHero />
        <Cards />
        <MeetOurTeam />
        <Info />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
