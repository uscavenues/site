import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Shapes from "./Shapes";
// import Script from "next/script";
import Description from "./Description";
import WhatWeDo from "./WhatWeDo";
import Hero from "./Hero";
import Clients from "./Clients";

export default function HomePage() {
  return (
    <>
      <Shapes />
      <Navbar />
      <main>
        {/* Instagram embed */}
        {/* <Script src="" strategy="lazyOnload" /> */}
        {/* <Image src="/images/shapes/HorLine.svg" fill={true} alt="Seperation line" /> */}
        {/* <Welcome /> */}
        <Hero />
        <Description />
        <WhatWeDo />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
