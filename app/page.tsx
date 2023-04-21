// import Script from "next/script";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Shapes from "./Shapes";
// import Welcome from "./Welcome";
import Hero from "./Hero";
import Description from "./Description";
import WhatWeDo from "./WhatWeDo";
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
