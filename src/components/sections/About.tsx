import retrato500 from "../../assets/images/marinaldo-retrato-500.webp";
import retrato900 from "../../assets/images/marinaldo-retrato-900.webp";
import { buildWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { Reveal } from "../Reveal";

const FACTS = [
  "14 anos de atuação no mercado contábil",
  "Graduado em Ciências Contábeis pela Faculdade IESP",
  "Especialista em Contabilidade e Direito Tributário — pós-graduação pelo IPOG",
  "Registro profissional CRC/PB 008778/O-6",
];

export function About() {
  return (
    <section id="marinaldo" className="bg-paper py-20 text-charcoal sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <Reveal className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl lg:mx-0">
          <img
            src={retrato900}
            srcSet={`${retrato500} 500w, ${retrato900} 900w`}
            sizes="(min-width: 1024px) 400px, 80vw"
            alt="Marinaldo de Melo Silva, diretor da Marinaldo Melo Contabilidade"
            width={900}
            height={1080}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs tracking-[0.2em] text-gold-700 uppercase">Quem cuida da sua contabilidade</span>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">Marinaldo de Melo Silva</h2>
            <p className="mt-1 text-sm font-medium text-gold-700">Diretor</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/80">
              Há 14 anos no mercado contábil, Marinaldo atua junto a empresas de diferentes
              portes e segmentos, acompanhando de perto as mudanças na legislação para orientar
              seus clientes com segurança nas áreas contábil, fiscal, trabalhista e tributária.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 grid gap-3 sm:grid-cols-2">
            {FACTS.map((fact) => (
              <div key={fact} className="flex items-start gap-3 rounded-xl border border-gold-500/25 bg-cream/40 p-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                <p className="text-sm leading-snug text-charcoal/85">{fact}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={200} className="mt-9">
            <a
              href={buildWhatsAppLink(whatsappMessages.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold text-cream transition-colors hover:bg-gold-700"
            >
              Falar com Marinaldo
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
