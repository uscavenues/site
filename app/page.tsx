import Footer from "@/app/Footer";
import Hero from "./Hero";
import Clients from "./Clients";
import Navbar from "./Navbar";
import Cards from "./Cards";
import MeetOurTeam from "./MeetOurTeam";
import Info from "./Info";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cards />
        <MeetOurTeam />
        <Info />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
