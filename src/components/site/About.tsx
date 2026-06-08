import { useCountUp } from "@/hooks/use-count-up";
import { useReveal } from "@/hooks/use-reveal";

function Stat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end);
  return (
    <div
      ref={ref}
      className="flex flex-col justify-between rounded-2xl border border-border bg-surface-alt p-8"
    >
      <div className="font-serif text-5xl font-semibold tracking-tight text-ink md:text-6xl">
        {value}
        {suffix}
      </div>
      <div className="mt-4 text-sm text-ink-soft">{label}</div>
    </div>
  );
}

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" ref={ref} className="border-t border-border bg-white py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10 lg:gap-24">
        <div data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Sobre Hesed Corp
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
            4 Años Construyendo <span className="italic">la Web.</span>
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p>
              Somos un estudio pequeño y deliberado. Durante cuatro años hemos
              entregado sitios web, plataformas intranet y sistemas de bases de
              datos para clientes que valoran la artesanía tanto como los resultados.
            </p>
            <p>
              Nuestro trabajo se encuentra en la intersección del diseño, la ingeniería
              y la tecnología educativa: una combinación poco común que nos permite
              servir a marcas modernas y escuelas con la misma precisión.
            </p>
            <p>
              Cada proyecto se construye desde cero. Sin plantillas, sin atajos:
              solo sistemas diseñados para superar las tendencias.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5" data-reveal style={{ transitionDelay: "120ms" }}>
          <Stat end={4} suffix="+" label="Años de experiencia" />
          <Stat end={50} suffix="+" label="Proyectos completados" />
          <Stat end={3} suffix="" label="Especialidades de servicio" />
          <Stat end={100} suffix="%" label="Satisfacción del cliente" />
        </div>
      </div>
    </section>
  );
}
