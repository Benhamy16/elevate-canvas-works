import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  email: z.string().trim().email("Correo inválido").max(255),
  service: z.enum(["web", "intranet", "database"]),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000),
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
      toast.error(parsed.error.issues[0]?.message ?? "Revisa el formulario");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Gracias — te responderemos en menos de 24 horas.");
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
            Hablemos
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            ¿Listo para construir <span className="italic">algo grande?</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
            Cuéntanos sobre tu proyecto. Te responderemos en menos de 24 horas.
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
            <Field name="name" label="Nombre" placeholder="Tu nombre" />
            <Field name="email" type="email" label="Correo" placeholder="tu@empresa.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">Servicio</label>
            <select
              name="service"
              defaultValue="web"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan"
            >
              <option className="bg-brand-dark" value="web">Desarrollo Web</option>
              <option className="bg-brand-dark" value="intranet">Intranet Escolar</option>
              <option className="bg-brand-dark" value="database">Base de Datos</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">Mensaje</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto…"
              className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-cyan"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {submitting ? "Enviando…" : "Enviar mensaje →"}
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
