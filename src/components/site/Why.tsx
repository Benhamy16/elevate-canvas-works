import { Sparkles, Workflow, GraduationCap, LifeBuoy } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const rows = [
  { icon: Sparkles, title: "Custom solutions, not templates", text: "Every line of code is written for your business. No themes, no copy-paste — just bespoke systems." },
  { icon: Workflow, title: "End-to-end delivery", text: "From discovery and design to development and deployment, you work with one focused team start to finish." },
  { icon: GraduationCap, title: "Specialized in education technology", text: "Years of building intranets for schools means we understand faculty workflows and student data deeply." },
  { icon: LifeBuoy, title: "Ongoing support and maintenance", text: "Launch day is the beginning. We monitor, iterate, and improve long after the site is live." },
];

export function Why() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" ref={ref} className="border-t border-border bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Why Work With Us
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
            A studio built on <span className="italic">trust.</span>
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
