import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/ui/Footer";

export default function ContactPage() {
  return (
    <>
      <main className="relative overflow-hidden bg-primary-50 dark:bg-gradient-to-br dark:from-primary-900 dark:to-primary-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float bg-primary-200/30 dark:bg-primary-300/10 absolute -left-32 bottom-0 h-96 w-96 rounded-full blur-3xl" />
          <div className="animate-float-delayed bg-accent-200/30 dark:bg-accent-300/10 absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl" />
          <div className="animate-float-slow bg-primary-300/20 dark:bg-primary-400/10 absolute left-1/4 top-1/4 h-32 w-32 rounded-full blur-xl" />
          <div className="animate-float-delayed-slow bg-accent-300/20 dark:bg-accent-400/10 absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full blur-xl" />
        </div>

        <ContactHero />
        <div className="container relative mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 animate-[fadeIn_1s_ease-out_forwards] rounded-2xl bg-primary-500 p-6 opacity-0 shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-8 md:p-10 dark:bg-primary-800">
              <h2 className="mb-8 text-center text-2xl font-bold transition-colors duration-300 hover:text-accent-500 sm:text-3xl">
                Küldjön nekünk üzenetet
              </h2>
              <ContactForm />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="group animate-[fadeIn_1s_ease-out_0.3s_forwards] rounded-2xl bg-white p-6 opacity-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-8 dark:bg-primary-800">
                <ContactInfo />
              </div>
              <div className="group animate-[fadeIn_1s_ease-out_0.6s_forwards] rounded-2xl bg-white p-6 opacity-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-8 dark:bg-primary-800">
                <h2 className="mb-6 text-xl font-bold text-primary-900 dark:text-primary-50 transition-colors duration-300 group-hover:text-accent-500 sm:text-2xl">
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
