import PortfolioHero from "@/components/PortfolioHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/ui/Footer";

export default function PortfolioPage() {
  return (
    <>
      <main className="mobile-viewport">
        <PortfolioHero />
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
