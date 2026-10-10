import { site, waLink } from "@/config/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer id="contacto" className="mt-auto bg-hierro text-ceniza">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-5">
          <Logo variant="light" />
          <p className="max-w-md text-sm leading-relaxed text-ceniza/70">
            {site.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cobre">
            Contacto
          </span>
          <a
            href={waLink(`Hola ${site.name}! Quería hacer una consulta.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-oxido px-5 py-3 text-sm font-semibold text-ceniza transition-colors hover:bg-oxido-profundo"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="text-sm text-ceniza/80 hover:text-cobre">
            {site.email}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ceniza/80 hover:text-cobre"
          >
            Instagram
          </a>
          <span className="text-sm text-ceniza/60">{site.location}</span>
        </div>
      </div>
      <div className="border-t border-ceniza/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-5 text-xs text-ceniza/50">
          © 2026 {site.name}. Hecho a mano.
        </div>
      </div>
    </footer>
  );
}
