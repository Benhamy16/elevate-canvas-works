import { useEffect, useState } from "react";
import logo from "@/assets/hesed-logo.png.asset.json";

const links = [
  { href: "#services", label: "Servicios" },
  { href: "#about", label: "Nosotros" },
  { href: "#why", label: "¿Por qué nosotros?" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-white" : "text-ink";
  const textSoft = scrolled ? "text-white/70" : "text-ink-soft";
  const hoverText = scrolled ? "hover:text-white" : "hover:text-ink";
  const bgHover = scrolled ? "hover:bg-white/10" : "hover:bg-surface-alt";
  const burgerColor = scrolled ? "bg-white" : "bg-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-dark text-slate-50/0 border-0 border-none">
            <img src={logo.url} alt="Hesed Corp" className="h-7 w-7 object-contain" />
          </span>
          <span className={`font-serif text-lg font-semibold tracking-tight ${textColor}`}>
            Hesed Corp
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium ${textSoft} transition-colors ${hoverText}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Inicia un proyecto
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
        >
          <span className="space-y-1.5">
            <span className={`block h-0.5 w-5 ${burgerColor}`} />
            <span className={`block h-0.5 w-5 ${burgerColor}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/15 bg-brand-dark md:hidden">
          <div className="space-y-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2 text-sm font-medium text-white/70 ${bgHover}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Inicia un proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
