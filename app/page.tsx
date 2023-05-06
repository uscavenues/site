import Navbar from "./Navbar";
import Footer from "./Footer";
import Shapes from "./Shapes";
import Description from "./Description";
import WhatWeDo from "./WhatWeDo";
import Hero from "./Hero";
import Timeline from "./Timeline";
import Community from "./Community";

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
        <Community />
      </main>
      <Timeline />
      <Footer />
    </>
  );
}
