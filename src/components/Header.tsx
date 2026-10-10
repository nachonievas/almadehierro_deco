import { site, waLink } from "@/config/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hierro/10 bg-arena/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" aria-label={site.name}>
          <Logo compact />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.12em] md:flex">
          <a href="#catalogo" className="text-hierro hover:text-oxido">
            Catálogo
          </a>
          <a href="#taller" className="text-hierro hover:text-oxido">
            Taller
          </a>
          <a href="#contacto" className="text-hierro hover:text-oxido">
            Contacto
          </a>
        </nav>
        <a
          href={waLink(`Hola ${site.name}! Quería hacer una consulta.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-oxido px-4 py-2 text-sm font-semibold text-ceniza transition-colors hover:bg-oxido-profundo"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
