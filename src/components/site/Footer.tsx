import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/hesed-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-dark">
            <img src={logo.url} alt="Hesed Corp" className="h-7 w-7 object-contain" />
          </span>
          <span className="font-serif text-lg font-semibold text-ink">Hesed Corp</span>
        </a>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-ink-soft">
          <a href="#services" className="hover:text-ink">Services</a>
          <a href="#about" className="hover:text-ink">About</a>
          <a href="#why" className="hover:text-ink">Why Us</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </nav>
        <div className="flex items-center gap-3 text-ink-soft">
          <a href="#" aria-label="Twitter" className="rounded-full p-2 transition-colors hover:bg-surface-alt hover:text-ink"><Twitter className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-full p-2 transition-colors hover:bg-surface-alt hover:text-ink"><Linkedin className="h-4 w-4" /></a>
          <a href="#" aria-label="GitHub" className="rounded-full p-2 transition-colors hover:bg-surface-alt hover:text-ink"><Github className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-ink-soft md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Hesed Corp. All rights reserved.</p>
          <p className="font-serif italic">Made with precision.</p>
        </div>
      </div>
    </footer>
  );
}
