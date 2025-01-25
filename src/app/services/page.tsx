import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szolgáltatásaink",
  description:
    "Komplex webes megoldások az Ön vállalkozásának sikeréért. Frontend fejlesztés, Backend fejlesztés, UI/UX tervezés.",
  openGraph: {
    title: "Szolgáltatásaink",
    description: "Komplex webes megoldások az Ön vállalkozásának sikeréért",
  },
};

export default function ServicesPage() {
  return (
    <>
      <main className="h-[var(--viewport-height)]">
        <ServiceHero />
        <ServiceDetails />
        <ServiceCTA />
        <Footer />
      </main>
    </>
  );
}
