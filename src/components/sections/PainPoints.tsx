import { Reveal } from "../Reveal";

const PAINS = [
  "Burocracia que consome tempo que deveria ir para o negócio",
  "Dúvidas sobre impostos e obrigações que mudam com frequência",
  "Pouco acompanhamento — contato só quando algo dá errado",
  "Dificuldade para entender o que os números da empresa realmente dizem",
  "Insegurança diante de mudanças na legislação",
  "Empresas com pendências e situação fiscal para regularizar",
];

export function PainPoints() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <span className="text-xs tracking-[0.2em] text-gold-400 uppercase">O dia a dia do empresário</span>
            <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-cream sm:text-4xl">
              Contabilidade não deveria ser mais uma preocupação na sua lista.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist">
              Cuidar de uma empresa já exige bastante. Quando a contabilidade também vira fonte de
              dúvida e insegurança, sobra menos tempo para o que importa: o crescimento do negócio.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-surface-line sm:grid-cols-2">
            {PAINS.map((pain, i) => (
              <Reveal
                key={pain}
                delay={i * 60}
                className="bg-surface p-6 text-sm leading-relaxed text-cream/90 sm:text-base"
              >
                {pain}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
