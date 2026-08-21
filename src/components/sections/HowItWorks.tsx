import { Reveal } from "../Reveal";

const STEPS = [
  { n: "01", title: "Você entra em contato", text: "Uma conversa simples pelo WhatsApp para começar." },
  { n: "02", title: "Entendemos sua realidade", text: "Ouvimos sobre sua empresa e o momento que ela vive." },
  { n: "03", title: "Orientamos a melhor solução", text: "Indicamos o caminho contábil e fiscal adequado." },
  { n: "04", title: "Acompanhamos sua empresa", text: "Seguimos ao seu lado, com atenção contínua." },
];

export function HowItWorks() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="text-xs tracking-[0.2em] text-gold-400 uppercase">Como funciona</span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-cream sm:text-4xl">
            Uma jornada simples, do primeiro contato ao acompanhamento.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="relative border-t border-surface-line pt-6">
              <span className="font-display text-3xl text-gold-500/70 sm:text-4xl">{step.n}</span>
              <p className="mt-4 font-display text-lg text-cream sm:text-xl">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
