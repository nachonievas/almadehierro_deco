export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // en pesos; 0 = "Consultar"
  category: string;
  // Ruta de la imagen en /public/products. Dejá "" si todavía no la cargaste.
  image: string;
  featured?: boolean;
};

// Catálogo. Agregá / editá productos acá. Cuando tengas las fotos,
// ponelas en public/products/ y referencialas en "image".
export const products: Product[] = [
  {
    id: "mesa-ratona-hierro",
    name: "Mesa ratona de hierro y madera",
    description:
      "Estructura de hierro forjado con tapa de madera maciza. Terminación artesanal.",
    price: 185000,
    category: "Mesas",
    image: "",
    featured: true,
  },
  {
    id: "lampara-colgante",
    name: "Lámpara colgante industrial",
    description: "Hierro con terminación negra mate. Luz cálida regulable.",
    price: 72000,
    category: "Iluminación",
    image: "",
    featured: true,
  },
  {
    id: "estanteria-pared",
    name: "Estantería de pared",
    description: "Hierro y madera. Ideal para living o cocina. Medidas a pedido.",
    price: 95000,
    category: "Estanterías",
    image: "",
  },
  {
    id: "perchero-pie",
    name: "Perchero de pie",
    description: "Hierro macizo, base estable. Terminación envejecida.",
    price: 48000,
    category: "Deco",
    image: "",
  },
  {
    id: "banco-entrada",
    name: "Banco para entrada",
    description: "Estructura de hierro con asiento de madera. Robusto y elegante.",
    price: 0,
    category: "Asientos",
    image: "",
  },
  {
    id: "espejo-marco",
    name: "Espejo con marco de hierro",
    description: "Marco forjado a mano. Pieza única. Varios tamaños disponibles.",
    price: 68000,
    category: "Deco",
    image: "",
    featured: true,
  },
];

export const categories = [
  "Todos",
  ...Array.from(new Set(products.map((p) => p.category))),
];
