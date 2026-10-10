import { site, waLink } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hierro text-ceniza">
      {/* Barra óxido lateral, guiño al perfil de hierro */}
      <div className="absolute left-0 top-0 h-full w-3 bg-oxido md:w-4" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-24 md:py-32">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cobre">
          {site.location} · Hecho a mano
        </span>

        <h1 className="display text-6xl font-black md:text-8xl">
          Hierro que se
          <br />
          vuelve hogar
        </h1>

        <p className="max-w-xl font-serif text-2xl italic text-cobre md:text-3xl">
          Piezas forjadas con alma
        </p>

        <p className="max-w-2xl text-lg leading-relaxed text-ceniza/80">
          {site.description} Cada pieza se corta, se suelda y se termina a mano
          en nuestro taller. El acabado óxido sellado conserva el color natural
          del metal y protege la superficie.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#catalogo"
            className="bg-ceniza px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-hierro transition-colors hover:bg-cobre"
          >
            Ver catálogo
          </a>
          <a
            href={waLink(`Hola ${site.name}! Quería hacer una consulta.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ceniza/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ceniza transition-colors hover:border-cobre hover:text-cobre"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Escribinos
          </a>
        </div>
      </div>
    </section>
  );
}
