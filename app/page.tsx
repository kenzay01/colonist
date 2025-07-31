import FormSection from "@/componets/FormSection";
import Header from "@/componets/Header";
import SideButton from "@/componets/SideButton";
import AboutUs from "@/componets/AboutUs";
import JobPosting from "@/componets/JobPosting";
import Footer from "@/componets/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <FormSection />
      <AboutUs />
      <JobPosting />
      <Footer />
      <SideButton />
    </main>
  );
}
