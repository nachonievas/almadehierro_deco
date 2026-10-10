export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // en pesos; 0 = "Consultar"
  category: string;
  // Fotos en /public/products/<slug>/. Primera = portada.
  images: string[];
  featured?: boolean;
};

// Catálogo. Editá nombre, descripción y precio acá.
// Precio 0 = muestra "Consultar". Las fotos ya están cargadas.
export const products: Product[] = [
  {
    id: "mesita",
    name: "Mesita",
    description: "Mesa auxiliar de hierro con terminación artesanal. Pieza única.",
    price: 0,
    category: "Muebles",
    images: ["/products/mesita/1.jpeg", "/products/mesita/2.jpeg"],
    featured: true,
  },
  {
    id: "fanales-casita",
    name: "Fanales de Casita",
    description: "Fanales con forma de casita en hierro. Luz cálida y decorativa.",
    price: 0,
    category: "Iluminación",
    images: [
      "/products/fanales-casita/1.jpeg",
      "/products/fanales-casita/2.jpeg",
    ],
    featured: true,
  },
  {
    id: "fanales-x3",
    name: "Fanales x3",
    description: "Set de tres fanales de hierro. Distintos tamaños para combinar.",
    price: 0,
    category: "Iluminación",
    images: [
      "/products/fanales-x3/1.jpeg",
      "/products/fanales-x3/2.jpeg",
      "/products/fanales-x3/3.jpeg",
    ],
  },
  {
    id: "porta-vela",
    name: "Porta Vela",
    description: "Portavela de hierro forjado. Terminación artesanal.",
    price: 0,
    category: "Deco",
    images: [
      "/products/porta-vela/1.jpeg",
      "/products/porta-vela/2.jpeg",
      "/products/porta-vela/3.jpeg",
      "/products/porta-vela/4.jpeg",
    ],
    featured: true,
  },
  {
    id: "caracol-porta-espiral",
    name: "Caracol Porta Espiral",
    description: "Porta espiral con forma de caracol en hierro. Para exterior.",
    price: 0,
    category: "Deco",
    images: [
      "/products/caracol-porta-espiral/1.jpeg",
      "/products/caracol-porta-espiral/2.jpeg",
      "/products/caracol-porta-espiral/3.jpeg",
    ],
  },
  {
    id: "conejo-macetero",
    name: "Conejo de Macetero",
    description: "Conejo decorativo de hierro para macetero. Detalle para el jardín.",
    price: 0,
    category: "Jardín",
    images: [
      "/products/conejo-macetero/1.jpeg",
      "/products/conejo-macetero/2.jpeg",
    ],
  },
  {
    id: "mariposa-decorativa",
    name: "Mariposa Decorativa",
    description: "Mariposa de hierro para decoración. Pieza artesanal.",
    price: 0,
    category: "Deco",
    images: [
      "/products/mariposa-decorativa/1.jpeg",
      "/products/mariposa-decorativa/2.jpeg",
    ],
  },
  {
    id: "mariposa-pared",
    name: "Mariposa de Pared",
    description: "Mariposa de hierro para colgar en la pared. Terminación a mano.",
    price: 0,
    category: "Deco",
    images: ["/products/mariposa-pared/1.jpeg"],
  },
  {
    id: "porta-corchos",
    name: "Porta Corchos",
    description: "Porta corchos de hierro. Guarda y decora con tus corchos.",
    price: 0,
    category: "Cocina",
    images: [
      "/products/porta-corchos/1.jpeg",
      "/products/porta-corchos/2.jpeg",
      "/products/porta-corchos/3.jpeg",
    ],
  },
  {
    id: "porta-manguera",
    name: "Porta Manguera",
    description: "Soporte de hierro para manguera. Resistente, para exterior.",
    price: 0,
    category: "Jardín",
    images: [
      "/products/porta-manguera/1.jpeg",
      "/products/porta-manguera/2.jpeg",
    ],
  },
  {
    id: "porta-rollo",
    name: "Porta Rollo",
    description: "Porta rollo de cocina en hierro. Diseño artesanal.",
    price: 0,
    category: "Cocina",
    images: [
      "/products/porta-rollo/1.jpeg",
      "/products/porta-rollo/2.jpeg",
    ],
  },
  {
    id: "tutores-frase",
    name: "Tutores Con Frase",
    description: "Tutores de hierro con frase para plantas. Detalle para el jardín.",
    price: 0,
    category: "Jardín",
    images: [
      "/products/tutores-frase/1.jpeg",
      "/products/tutores-frase/2.jpeg",
      "/products/tutores-frase/3.jpeg",
    ],
  },
];

export const categories = [
  "Todos",
  ...Array.from(new Set(products.map((p) => p.category))),
];
