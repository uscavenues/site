import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Hero from "@/app/client-interest-form/Hero";
import Form from "@/app/client-interest-form/Form";

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
