import emblema500 from "../../assets/images/emblema-500.webp";
import { buildWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-center sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        style={{
          backgroundImage: `url(${emblema500})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(circle, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-gold-400 uppercase">Marinaldo Melo Contabilidade</p>
          <h2 className="mt-5 text-balance font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
            Mais que contabilidade,{" "}
            <span className="italic text-gold-300">parceria para o crescimento.</span>
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-10">
          <a
            href={buildWhatsAppLink(whatsappMessages.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-9 py-4 text-base font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-gold-400"
          >
            Falar com Marinaldo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
