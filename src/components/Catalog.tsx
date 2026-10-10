"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Catalog() {
  const [active, setActive] = useState("Todos");

  const visible =
    active === "Todos"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section id="catalogo" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-oxido">
          Catálogo
        </span>
        <h2 className="display text-5xl font-extrabold text-hierro md:text-6xl">
          Piezas forjadas con alma
        </h2>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
              active === cat
                ? "bg-hierro text-ceniza"
                : "border border-grafito/30 text-grafito hover:border-oxido hover:text-oxido"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
