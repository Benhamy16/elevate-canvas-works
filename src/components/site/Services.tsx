import { Code2, GraduationCap, Database, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Code2,
    title: "Sitios Web Personalizados",
    desc: "Diseñamos y desarrollamos sitios web rápidos, escalables y pixel-perfect adaptados a tu marca y objetivos de negocio.",
    tag: "Desarrollo Web",
  },
  {
    icon: GraduationCap,
    title: "Plataformas Intranet Escolares",
    desc: "Soluciones de intranet completas para instituciones educativas: portales de estudiantes, herramientas para docentes y paneles administrativos.",
    tag: "Educación",
  },
  {
    icon: Database,
    title: "Arquitectura de Bases de Datos",
    desc: "Diseño, optimización y gestión robusta de bases de datos para empresas que dependen de sus datos.",
    tag: "Datos",
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" ref={ref} className="border-t border-border bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Lo que construimos
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
            Tres oficios. <span className="italic text-ink-soft">Un estándar.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <s.icon className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                {s.tag}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Saber más
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
