import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Shapes from "@/app/Shapes";
import Description from "@/app/Description";
import WhatWeDo from "@/app/WhatWeDo";
import Hero from "@/app/Hero";
import Timeline from "@/app/Timeline";
import Community from "@/app/Community";

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
