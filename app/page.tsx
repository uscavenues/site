import Footer from "@/app/Footer";
import Hero from "./Hero";
import Clients from "./Clients";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Quotes from "./Quotes";
import MeetOurTeam from "./MeetOurTeam";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <MeetOurTeam />
      <Quotes />
      <Clients />
      <Footer />
    </>
  );
}
