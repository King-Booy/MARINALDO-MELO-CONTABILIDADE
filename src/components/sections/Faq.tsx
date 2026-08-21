import { useState } from "react";
import { Reveal } from "../Reveal";

const FAQS = [
  {
    q: "O atendimento é presencial ou online?",
    a: "Os dois. O escritório atende presencialmente em Bayeux/PB e também de forma online, para clientes de outros estados.",
  },
  {
    q: "Quem pode contratar os serviços?",
    a: "Pessoas físicas e empresas de diversos portes e segmentos, como comércio, prestação de serviços, construção civil, restaurantes, padarias e mercados, entre outros.",
  },
  {
    q: "Já tenho contador, é possível trocar?",
    a: "Sim. É possível migrar a contabilidade da sua empresa para o escritório. Fale com Marinaldo pelo WhatsApp para entender os próximos passos.",
  },
  {
    q: "Vocês ajudam na abertura de empresa?",
    a: "Sim, o escritório cuida de todo o processo de abertura, além de alteração e encerramento de empresas.",
  },
  {
    q: "Fazem regularização de empresas com pendências?",
    a: "Sim, a regularização de empresas é um dos serviços oferecidos pelo escritório.",
  },
  {
    q: "Atendem Imposto de Renda de pessoa física?",
    a: "Sim, o escritório atende Imposto de Renda tanto para pessoas físicas quanto para pessoas jurídicas.",
  },
  {
    q: "Atendem clientes fora da Paraíba?",
    a: "Sim. Além de clientes na Paraíba, o escritório atende empresários de outros estados por meio do atendimento online.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "De segunda a sexta-feira, das 8h às 18h.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs tracking-[0.2em] text-gold-400 uppercase">Dúvidas frequentes</span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-cream sm:text-4xl">
            Perguntas que ajudam a decidir
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-surface-line border-t border-b border-surface-line">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-base text-cream sm:text-lg">{item.q}</span>
                    <span
                      className={`shrink-0 text-xl text-gold-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-mist sm:text-base">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
