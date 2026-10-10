import { site, waLink } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(`Hola ${site.name}! Quería hacer una consulta.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-oxido text-ceniza shadow-lg transition-colors hover:bg-oxido-profundo"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
