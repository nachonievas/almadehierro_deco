const steps = [
  {
    n: "01",
    title: "Corte y soldadura",
    text: "Cortamos y soldamos el hierro a medida. Cada estructura se arma pieza por pieza.",
  },
  {
    n: "02",
    title: "Terminación óxido",
    text: "Acabado óxido sellado que conserva el color natural del metal y lo protege.",
  },
  {
    n: "03",
    title: "Hecho a mano",
    text: "Piezas únicas. Trabajamos medidas y terminaciones a pedido para tu espacio.",
  },
];

export function Taller() {
  return (
    <section id="taller" className="bg-ceniza">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-oxido">
            El taller
          </span>
          <h2 className="display text-5xl font-extrabold text-hierro md:text-6xl">
            Del metal al mueble
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-3 border-t-2 border-oxido pt-5">
              <span className="font-serif text-4xl italic text-cobre">{s.n}</span>
              <h3 className="display text-2xl font-extrabold text-hierro">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-grafito">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
