import Carousel from "@/components/ui/Carousel";
import dynamic from 'next/dynamic';
import ResponsiveShowcase from "@/components/ResponsiveShowcase";
import TechStack from "@/components/TechStack";
import Footer from "@/components/ui/Footer";

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="h-screen bg-primary-900" />
});

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-screen bg-primary-900" />
});

const TestimonialsComponent = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 bg-primary-900/50 animate-pulse" />
});

const StatsComponent = dynamic(() => import('@/components/Stats'), {
  loading: () => <div className="h-72 bg-primary-900/50 animate-pulse" />
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
        <StatsComponent />
        <TestimonialsComponent />
      </main>
      <Footer />
    </div>
  );
}
