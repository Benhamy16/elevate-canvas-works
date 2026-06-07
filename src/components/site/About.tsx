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
            About Hesed Corp
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
            4 Years Building <span className="italic">the Web.</span>
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p>
              We're a small, deliberate studio. For four years we've shipped
              websites, intranet platforms, and database systems for clients
              who care about craft as much as they care about results.
            </p>
            <p>
              Our work sits at the intersection of design, engineering, and
              education technology — a rare combination that lets us serve
              modern brands and schools with equal precision.
            </p>
            <p>
              Every project is built from scratch. No templates, no shortcuts —
              only systems designed to outlast trends.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5" data-reveal style={{ transitionDelay: "120ms" }}>
          <Stat end={4} suffix="+" label="Years of experience" />
          <Stat end={50} suffix="+" label="Projects completed" />
          <Stat end={3} suffix="" label="Service specialties" />
          <Stat end={100} suffix="%" label="Client satisfaction" />
        </div>
      </div>
    </section>
  );
}
