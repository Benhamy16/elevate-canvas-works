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
      { title: "Hesed Corp — Agencia Web, Intranets y Arquitectura de Bases de Datos" },
      {
        name: "description",
        content:
          "Hesed Corp es una agencia web con 4 años de experiencia en desarrollo web personalizado, plataformas intranet escolares y arquitectura de bases de datos.",
      },
      { property: "og:title", content: "Hesed Corp — Experiencias Digitales que Perduran" },
      {
        property: "og:description",
        content:
          "Sitios web personalizados, plataformas intranet escolares y arquitectura de bases de datos construidos con artesanía.",
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
