import Hero from "@/components/ui/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
