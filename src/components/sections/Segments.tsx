import { Reveal } from "../Reveal";

const SEGMENTS = [
  "Comércio",
  "Prestação de serviços",
  "Construção civil",
  "Restaurantes",
  "Alimentação",
  "Ar-condicionado",
  "Padarias",
  "Abatedouros de galinhas",
  "Mercados",
];

export function Segments() {
  return (
    <section id="segmentos" className="bg-paper py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs tracking-[0.2em] text-gold-700 uppercase">Quem atendemos</span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl">
            Pessoas físicas e empresas de diferentes realidades.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75">
            Ao longo de 14 anos, o escritório construiu experiência prática com negócios de
            diversos portes e segmentos — atendendo de forma presencial em Bayeux/PB ou online,
            para clientes na Paraíba e em outros estados.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14 flex flex-wrap gap-3 sm:gap-4">
          {SEGMENTS.map((segment) => (
            <span
              key={segment}
              className="rounded-full border border-gold-500/30 bg-cream/40 px-5 py-3 font-display text-base text-charcoal transition-colors hover:border-gold-500 sm:text-lg"
            >
              {segment}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
