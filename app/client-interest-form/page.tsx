import styles from "./page.module.css";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Form from "./Form";

export default function ClientInterestForm() {
  return (
    <>
      <Navbar />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
}
