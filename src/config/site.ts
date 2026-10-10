// Configuración global del sitio. Editá estos valores sin tocar el código.

export const site = {
  name: "Alma de Hierro Deco",
  tagline: "Diseño artesanal en hierro",
  description:
    "Muebles y objetos de decoración en hierro, hechos a mano. Piezas únicas para tu hogar.",
  // Número de WhatsApp en formato internacional, SIN "+" ni espacios.
  // Ej: Argentina 11 2345-6789 => "5491123456789"
  whatsapp: "5491100000000",
  instagram: "https://instagram.com/almadehierrodeco",
  email: "contacto@almadehierrodeco.com",
  location: "Buenos Aires, Argentina",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
