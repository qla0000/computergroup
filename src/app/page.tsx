import Carousel from "@/components/ui/Carousel";
import dynamic from 'next/dynamic';
import ResponsiveShowcase from "@/components/ResponsiveShowcase";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/ui/Footer";

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="h-screen bg-primary-900" />
});

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-screen bg-primary-900" />
});

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
