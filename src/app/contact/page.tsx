import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/ui/Footer";

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-primary-900 sm:p-8 md:p-10 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
              <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl transition-colors duration-300 hover:text-accent-500">
                Küldjön nekünk üzenetet
              </h2>
              <ContactForm />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:bg-primary-900 sm:p-8 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
                <ContactInfo />
              </div>
              <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:bg-primary-900 sm:p-8 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                <h2 className="mb-6 text-xl font-bold sm:text-2xl transition-colors duration-300 group-hover:text-accent-500">
                  Térképen
                </h2>
                <ContactMap />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}