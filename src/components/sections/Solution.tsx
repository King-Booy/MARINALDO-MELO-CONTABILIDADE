import escritorio700 from "../../assets/images/escritorio-700.webp";
import escritorio1200 from "../../assets/images/escritorio-1200.webp";
import escritorio1800 from "../../assets/images/escritorio-1800.webp";
import { buildWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { Reveal } from "../Reveal";

const POINTS = [
  { title: "Acompanhamento", text: "Contato próximo, não só no fim do mês." },
  { title: "Orientação clara", text: "Explicações sem excesso de termos técnicos." },
  { title: "Agilidade", text: "Respostas rápidas para as suas demandas." },
  { title: "Tecnologia", text: "Processos digitais que facilitam o acesso às informações." },
];

export function Solution() {
  return (
    <section className="bg-paper py-20 text-charcoal sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="order-2 overflow-hidden rounded-2xl lg:order-1">
          <img
            src={escritorio1200}
            srcSet={`${escritorio700} 700w, ${escritorio1200} 1200w, ${escritorio1800} 1800w`}
            sizes="(min-width: 1024px) 560px, 90vw"
            alt="Escritório da Marinaldo Melo Contabilidade em Bayeux/PB"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs tracking-[0.2em] text-gold-700 uppercase">A parceria</span>
            <h2 className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl">
              Contabilidade como parceria, não apenas obrigação.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/80">
              Marinaldo atua ao lado do empresário — não só cumprindo prazos, mas ajudando a
              enxergar os números com clareza e a tomar decisões melhores para a empresa.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 70}>
                <p className="font-display text-lg text-charcoal">{point.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{point.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280} className="mt-10">
            <a
              href={buildWhatsAppLink(whatsappMessages.empresa)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 underline decoration-gold-500/50 underline-offset-4 transition-colors hover:text-gold-600"
            >
              Quero falar sobre minha empresa →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
