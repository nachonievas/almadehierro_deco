// Logo "Sello artesanal" (opción 1c de la identidad).
// Sello circular + "Alma" en itálica (Instrument Serif) y "DE HIERRO / DECO" en Archivo.

export function Logo({
  variant = "dark",
  compact = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const ink = variant === "light" ? "#F3EEE7" : "#1F1C1A";
  const sub = variant === "light" ? "#C9C0B5" : "#4A4541";
  const serif = variant === "light" ? "#C9773E" : "#A0461E";

  return (
    <div className="flex items-center gap-3">
      <Seal />
      <div className="flex flex-col leading-none">
        <span
          className="font-serif italic"
          style={{ color: serif, fontSize: compact ? 32 : 40, lineHeight: 0.85 }}
        >
          Alma
        </span>
        <span
          className="font-body font-semibold"
          style={{ color: ink, fontSize: 12, letterSpacing: "0.3em" }}
        >
          DE HIERRO
        </span>
        <span
          className="font-body"
          style={{ color: sub, fontSize: 10, letterSpacing: "0.5em" }}
        >
          DECO
        </span>
      </div>
    </div>
  );
}

function Seal() {
  return (
    <svg width="56" height="56" viewBox="0 0 150 150" aria-hidden="true">
      <defs>
        <path
          id="ring-logo"
          d="M75,75 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0"
        />
      </defs>
      <circle cx="75" cy="75" r="72" fill="none" stroke="#A0461E" strokeWidth="2.5" />
      <circle cx="75" cy="75" r="40" fill="#A0461E" />
      <text fontFamily="Archivo" fontWeight="600" fontSize="11" letterSpacing="3.6" fill="#1F1C1A">
        <textPath href="#ring-logo">
          ALMA DE HIERRO · DECO · HECHO A MANO ·
        </textPath>
      </text>
      <text
        x="75"
        y="91"
        textAnchor="middle"
        fontFamily="var(--font-serif), serif"
        fontStyle="italic"
        fontSize="48"
        fill="#F3EEE7"
      >
        A
      </text>
    </svg>
  );
}
