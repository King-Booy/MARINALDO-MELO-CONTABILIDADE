import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";

const CREDENTIALS = [
  {
    label: "Registro profissional",
    value: "CRC/PB 008778/O-6",
  },
  {
    label: "Formação",
    value: "Ciências Contábeis — Faculdade IESP",
  },
  {
    label: "Especialização",
    value: "Contabilidade e Direito Tributário — IPOG",
  },
];

export function Authority() {
  return (
    <section className="border-y border-surface-line bg-ink-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs tracking-[0.2em] text-gold-400 uppercase">Autoridade técnica</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-3xl leading-tight text-cream sm:text-4xl">
              Experiência que sustenta cada decisão contábil.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-surface-line pt-12 sm:grid-cols-[auto_1fr] sm:gap-16">
          <Reveal className="flex items-baseline gap-2">
            <CountUp to={14} className="font-display text-6xl text-gold-300 sm:text-7xl" />
            <span className="font-display text-2xl text-gold-300 sm:text-3xl">anos</span>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-3">
            {CREDENTIALS.map((item, i) => (
              <Reveal key={item.label} delay={i * 90} className="border-l border-gold-500/40 pl-5">
                <p className="text-xs tracking-wide text-mist uppercase">{item.label}</p>
                <p className="mt-2 font-display text-base leading-snug text-cream sm:text-lg">
                  {item.value}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
