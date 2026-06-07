import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.enum(["web", "intranet", "database"]),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      service: fd.get("service"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-dark py-28 text-white md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(50% 40% at 20% 20%, rgba(79,70,229,0.35), transparent 60%), radial-gradient(50% 40% at 85% 80%, rgba(56,189,248,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:px-10 lg:gap-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-cyan">
            Let's Talk
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Ready to Build <span className="italic">Something Great?</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
            Let's talk about your project. We'll get back to you within 24 hours.
          </p>
          <div className="mt-10 space-y-3">
            <a href="mailto:hello@hesedcorp.com" className="flex items-center gap-3 text-white/85 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8">
                <Mail className="h-4 w-4" />
              </span>
              hello@hesedcorp.com
            </a>
            <a href="https://wa.me/0" className="flex items-center gap-3 text-white/85 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8">
                <MessageCircle className="h-4 w-4" />
              </span>
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-white/5 p-6 backdrop-blur md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" type="email" label="Email" placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">Service</label>
            <select
              name="service"
              defaultValue="web"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan"
            >
              <option className="bg-brand-dark" value="web">Web Development</option>
              <option className="bg-brand-dark" value="intranet">School Intranet</option>
              <option className="bg-brand-dark" value="database">Database</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project…"
              className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-cyan"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send message →"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", placeholder,
}: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-cyan"
      />
    </div>
  );
}
