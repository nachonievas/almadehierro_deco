// Los precios "cash" son en EFECTIVO (lo que pasó el cliente).
// El precio de lista que se muestra = cash + 10%. En la ficha se aclara
// "Efectivo −10%" mostrando el valor cash. Editá solo los "cash".

export type Variant = {
  label?: string; // ej "Chica" / "Grande". Omitir si es único.
  cash: number; // precio efectivo
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[]; // primera = portada
  variants: Variant[]; // vacío = "Consultar"
  featured?: boolean;
};

export const RECARGO = 0.1; // 10% de lista sobre efectivo

export const products: Product[] = [
  {
    id: "mesita",
    name: "Mesita",
    description: "Mesa auxiliar de hierro con terminación artesanal. Pieza única. Medida: 60 x 60 cm.",
    category: "Muebles",
    images: ["/products/mesita/1.jpeg", "/products/mesita/2.jpeg"],
    variants: [{ cash: 74000 }],
    featured: true,
  },
  {
    id: "fanales-casita",
    name: "Fanales de Casita",
    description: "Fanales con forma de casita en hierro. Luz cálida y decorativa. Alturas: chica 15 cm, grande 25 cm.",
    category: "Iluminación",
    images: [
      "/products/fanales-casita/1.jpeg",
      "/products/fanales-casita/2.jpeg",
    ],
    variants: [
      { label: "Chica", cash: 28000 },
      { label: "Grande", cash: 33000 },
    ],
    featured: true,
  },
  {
    id: "fanales-x3",
    name: "Fanales x3",
    description: "Set de tres fanales de hierro en tres alturas: 30, 40 y 50 cm. Para combinar.",
    category: "Iluminación",
    images: [
      "/products/fanales-x3/1.jpeg",
      "/products/fanales-x3/2.jpeg",
      "/products/fanales-x3/3.jpeg",
    ],
    variants: [{ cash: 80000 }],
  },
  {
    id: "porta-vela",
    name: "Porta Vela",
    description: "Portavela de hierro forjado. Terminación artesanal.",
    category: "Deco",
    images: [
      "/products/porta-vela/1.jpeg",
      "/products/porta-vela/2.jpeg",
      "/products/porta-vela/3.jpeg",
      "/products/porta-vela/4.jpeg",
    ],
    variants: [{ cash: 14000 }],
    featured: true,
  },
  {
    id: "caracol-porta-espiral",
    name: "Caracol Porta Espiral",
    description: "Porta espiral con forma de caracol en hierro. Para exterior. Medida: 15 cm.",
    category: "Deco",
    images: [
      "/products/caracol-porta-espiral/1.jpeg",
      "/products/caracol-porta-espiral/2.jpeg",
      "/products/caracol-porta-espiral/3.jpeg",
    ],
    variants: [{ cash: 12000 }],
  },
  {
    id: "conejo-macetero",
    name: "Conejo de Macetero",
    description: "Conejo decorativo de hierro para macetero. Detalle para el jardín.",
    category: "Jardín",
    images: [
      "/products/conejo-macetero/1.jpeg",
      "/products/conejo-macetero/2.jpeg",
    ],
    variants: [
      { label: "Chico", cash: 15000 },
      { label: "Grande", cash: 35600 },
    ],
  },
  {
    id: "mariposa-decorativa",
    name: "Mariposa Decorativa",
    description: "Mariposa de hierro para decoración. Pieza artesanal.",
    category: "Deco",
    images: [
      "/products/mariposa-decorativa/1.jpeg",
      "/products/mariposa-decorativa/2.jpeg",
    ],
    variants: [{ cash: 69600 }],
  },
  {
    id: "mariposa-pared",
    name: "Mariposa de Pared",
    description: "Mariposa de hierro para colgar en la pared. Terminación a mano.",
    category: "Deco",
    images: ["/products/mariposa-pared/1.jpeg"],
    variants: [],
  },
  {
    id: "porta-corchos",
    name: "Porta Corchos",
    description: "Porta corchos de hierro. Guarda y decora con tus corchos.",
    category: "Cocina",
    images: [
      "/products/porta-corchos/1.jpeg",
      "/products/porta-corchos/2.jpeg",
      "/products/porta-corchos/3.jpeg",
    ],
    variants: [{ cash: 80000 }],
  },
  {
    id: "porta-manguera",
    name: "Porta Manguera",
    description: "Soporte de hierro para manguera. Resistente, para exterior. Medida: 35 cm, profundidad 15 cm.",
    category: "Jardín",
    images: [
      "/products/porta-manguera/1.jpeg",
      "/products/porta-manguera/2.jpeg",
    ],
    variants: [{ cash: 48000 }],
  },
  {
    id: "porta-rollo",
    name: "Porta Rollo",
    description: "Porta rollo de cocina en hierro. Diseño artesanal.",
    category: "Cocina",
    images: ["/products/porta-rollo/1.jpeg", "/products/porta-rollo/2.jpeg"],
    variants: [{ cash: 13000 }],
  },
  {
    id: "tutores-frase",
    name: "Tutores Con Frase",
    description: "Tutores de hierro con frase para plantas. Detalle para el jardín. Altura: 80 cm.",
    category: "Jardín",
    images: [
      "/products/tutores-frase/1.jpeg",
      "/products/tutores-frase/2.jpeg",
      "/products/tutores-frase/3.jpeg",
    ],
    variants: [{ cash: 19500 }],
  },
];

export const categories = [
  "Todos",
  ...Array.from(new Set(products.map((p) => p.category))),
];

// Helpers de precio
export const listPrice = (cash: number) => Math.round(cash * (1 + RECARGO));

export function formatARS(n: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
}
