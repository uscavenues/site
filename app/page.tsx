import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Shapes from "./Shapes";
import Script from "next/script";
import Description from "./Description";
import WhatWeDo from "./WhatWeDo";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Shapes />
        {/* Instagram embed */}
        {/* <Script src="" strategy="lazyOnload" /> */}
        {/* <Image src="/images/shapes/HorLine.svg" fill={true} alt="Seperation line" /> */}
        <Description />
        <WhatWeDo />
      </main>
      <Footer />
    </>
  );
}
