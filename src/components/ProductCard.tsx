"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { site, waLink } from "@/config/site";
import { listPrice, formatARS, type Product } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const images = product.images.filter(Boolean);
  const multi = images.length > 1;
  const hasPrice = product.variants.length > 0;

  function scrollTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, images.length - 1));
    track.scrollTo({ left: track.clientWidth * clamped, behavior: "smooth" });
    setActive(clamped);
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== active) setActive(i);
  }

  const priceSummary = hasPrice
    ? product.variants
        .map(
          (v) =>
            `${v.label ? v.label + " " : ""}${formatARS(listPrice(v.cash))} (efectivo ${formatARS(v.cash)})`
        )
        .join(", ")
    : "a consultar";

  const msg = `Hola ${site.name}! Me interesa "${product.name}" (${priceSummary}). ¿Me pasás más info?`;

  return (
    <article className="group flex flex-col bg-ceniza border border-arena transition-colors hover:border-oxido">
      <div className="relative aspect-[4/5] overflow-hidden bg-arena">
        {images.length ? (
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((img, i) => (
              <div key={img} className="relative h-full w-full shrink-0 snap-center">
                <Image
                  src={img}
                  alt={`${product.name} — foto ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ) : (
          <Placeholder />
        )}

        <span className="pointer-events-none absolute left-0 top-4 bg-hierro px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ceniza">
          {product.category}
        </span>

        {multi && (
          <>
            {/* Flechas (desktop / click) */}
            <button
              onClick={() => scrollTo(active - 1)}
              disabled={active === 0}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-hierro/70 text-ceniza transition-opacity hover:bg-hierro disabled:opacity-0 sm:flex"
            >
              ‹
            </button>
            <button
              onClick={() => scrollTo(active + 1)}
              disabled={active === images.length - 1}
              aria-label="Foto siguiente"
              className="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-hierro/70 text-ceniza transition-opacity hover:bg-hierro disabled:opacity-0 sm:flex"
            >
              ›
            </button>

            {/* Puntos */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === active ? "bg-oxido" : "bg-ceniza/70 hover:bg-cobre"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="display text-2xl font-extrabold text-hierro">
          {product.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-grafito">
          {product.description}
        </p>

        <div className="pt-1">
          {hasPrice ? (
            <div className="flex flex-col gap-2">
              {product.variants.map((v, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <div className="flex items-baseline gap-2">
                    {v.label && (
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-grafito">
                        {v.label}
                      </span>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1.5 bg-cobre/15 px-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-oxido-profundo">
                      Efectivo −10%
                    </span>
                  </div>
                  <div className="flex items-baseline justify-end gap-2.5">
                    <span className="font-body text-sm text-grafito/70 line-through decoration-grafito/40">
                      {formatARS(listPrice(v.cash))}
                    </span>
                    <span className="font-serif text-4xl italic leading-none text-oxido">
                      {formatARS(v.cash)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <span className="font-serif text-2xl italic text-oxido">Consultar</span>
          )}
        </div>

        <a
          href={waLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-oxido px-4 py-2.5 text-sm font-semibold text-ceniza transition-colors hover:bg-oxido-profundo"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Consultar por WhatsApp
        </a>
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
