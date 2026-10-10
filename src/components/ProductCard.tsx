"use client";

import { useState } from "react";
import Image from "next/image";
import { site, waLink } from "@/config/site";
import type { Product } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

function formatPrice(price: number) {
  if (price <= 0) return "Consultar";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}

export function ProductCard({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const images = product.images.filter(Boolean);
  const cover = images[active];

  const msg = `Hola ${site.name}! Me interesa "${product.name}" (${formatPrice(
    product.price
  )}). ¿Me pasás más info?`;

  return (
    <article className="group flex flex-col bg-ceniza border border-arena transition-colors hover:border-oxido">
      <div className="relative aspect-[4/5] overflow-hidden bg-arena">
        {cover ? (
          <Image
            src={cover}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Placeholder />
        )}
        <span className="absolute left-0 top-4 bg-hierro px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ceniza">
          {product.category}
        </span>
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === active ? "bg-oxido" : "bg-ceniza/70 hover:bg-cobre"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="display text-2xl font-extrabold text-hierro">
          {product.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-grafito">
          {product.description}
        </p>
        <div className="flex items-end justify-between gap-3 pt-2">
          <span className="font-serif text-3xl italic text-oxido">
            {formatPrice(product.price)}
          </span>
          <a
            href={waLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-oxido px-4 py-2.5 text-sm font-semibold text-ceniza transition-colors hover:bg-oxido-profundo"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}

function Placeholder() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg width="64" height="64" viewBox="0 0 150 150" aria-hidden="true" className="opacity-30">
        <circle cx="75" cy="75" r="60" fill="none" stroke="#1F1C1A" strokeWidth="2" />
        <circle cx="75" cy="75" r="34" fill="#1F1C1A" />
        <text
          x="75"
          y="90"
          textAnchor="middle"
          fontFamily="var(--font-serif), serif"
          fontStyle="italic"
          fontSize="40"
          fill="#F3EEE7"
        >
          A
        </text>
      </svg>
    </div>
  );
}
