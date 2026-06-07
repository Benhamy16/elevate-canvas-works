import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Why } from "@/components/site/Why";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hesed Corp — Web Agency, Intranets & Database Architecture" },
      {
        name: "description",
        content:
          "Hesed Corp is a web agency with 4 years of expertise in custom web development, school intranet platforms, and database architecture.",
      },
      { property: "og:title", content: "Hesed Corp — Digital Experiences That Last" },
      {
        property: "og:description",
        content:
          "Custom websites, school intranet platforms, and database architecture built with craft.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Why />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
