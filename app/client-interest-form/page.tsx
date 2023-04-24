import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Hero from "./Hero";
import Form from "./Form";

export default function ClientInterestForm() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Form />
      </main>
      <Footer />
    </>
  );
}
