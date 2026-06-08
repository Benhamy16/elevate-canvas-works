import { Sparkles, Workflow, GraduationCap, LifeBuoy } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const rows = [
  { icon: Sparkles, title: "Soluciones a medida, no plantillas", text: "Cada línea de código se escribe para tu negocio. Sin temas, sin copiar y pegar: solo sistemas hechos a la medida." },
  { icon: Workflow, title: "Entrega de principio a fin", text: "Desde el descubrimiento y diseño hasta el desarrollo y despliegue, trabajas con un equipo enfocado de inicio a fin." },
  { icon: GraduationCap, title: "Especializados en tecnología educativa", text: "Años construyendo intranets para escuelas significan que entendemos los flujos de trabajo de docentes y datos de estudiantes a fondo." },
  { icon: LifeBuoy, title: "Soporte y mantenimiento continuo", text: "El día del lanzamiento es solo el comienzo. Monitoreamos, iteramos y mejoramos mucho después de que el sitio esté en vivo." },
];

export function Why() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" ref={ref} className="border-t border-border bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            ¿Por qué trabajar con nosotros?
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
            Un estudio construido sobre la <span className="italic">confianza.</span>
          </h2>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border">
          {rows.map((r, i) => (
            <div
              key={r.title}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group flex flex-col items-start gap-6 px-6 py-8 transition-colors md:flex-row md:items-center md:gap-10 md:px-10 md:py-10 ${
                i % 2 === 1 ? "bg-surface-alt" : "bg-white"
              } ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <r.icon className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{r.text}</p>
              </div>
              <div className="hidden font-serif text-3xl text-ink/15 md:block">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
