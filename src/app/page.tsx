import Carousel from "@/components/ui/Carousel";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/ui/Footer";
import ResponsiveShowcase from "@/components/ResponsiveShowcase";

export default function Home() {
  return (
    <>
      <main>
        <Carousel />
        <ResponsiveShowcase />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
