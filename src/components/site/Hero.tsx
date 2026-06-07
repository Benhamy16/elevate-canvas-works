export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-white pt-24"
    >
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-70 animate-mesh"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 20% 30%, rgba(79,70,229,0.18), transparent 60%), radial-gradient(50% 40% at 80% 20%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(60% 50% at 70% 80%, rgba(56,189,248,0.14), transparent 60%)",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="absolute -left-32 top-40 h-[28rem] w-[28rem] rounded-full bg-[#4F46E5]/15 blur-3xl animate-blob" />
        <div
          className="absolute -right-24 bottom-10 h-[22rem] w-[22rem] rounded-full bg-[#7c3aed]/12 blur-3xl animate-blob"
          style={{ animationDelay: "-6s" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Hesed Corp · Web Agency
          </span>
          <h1 className="mt-8 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            We Build Digital
            <br />
            Experiences{" "}
            <span className="italic text-primary">That Last</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Web agency with 4 years of expertise in web development, school
            intranet solutions, and database architecture.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)] transition-transform hover:-translate-y-0.5"
            >
              See Our Work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white/70 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-white"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border/70 bg-white/70 px-8 py-5 text-sm text-ink-soft backdrop-blur md:mt-20">
          <span><strong className="text-ink">4+</strong> Years Experience</span>
          <span className="hidden h-4 w-px bg-border md:inline-block" />
          <span><strong className="text-ink">50+</strong> Projects Delivered</span>
          <span className="hidden h-4 w-px bg-border md:inline-block" />
          <span><strong className="text-ink">3</strong> Core Services</span>
        </div>
      </div>
    </section>
  );
}
