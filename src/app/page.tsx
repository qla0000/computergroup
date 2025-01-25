import Carousel from "@/components/ui/Carousel";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/ui/Footer";
import ResponsiveShowcase from "@/components/ResponsiveShowcase";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="mobile-viewport">
      <main>
        <Carousel />
        <ResponsiveShowcase />
        <Services />
        <TechStack />
        <Portfolio />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
