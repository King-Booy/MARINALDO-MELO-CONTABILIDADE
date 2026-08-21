import retrato500 from "../../assets/images/marinaldo-retrato-500.webp";
import retrato900 from "../../assets/images/marinaldo-retrato-900.webp";
import retrato1300 from "../../assets/images/marinaldo-retrato-1300.webp";
import retratoFallback from "../../assets/images/marinaldo-retrato.jpeg";
import emblema500 from "../../assets/images/emblema-500.webp";
import { buildWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { Reveal } from "../Reveal";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] opacity-[0.07] sm:opacity-[0.1]"
        style={{
          backgroundImage: `url(${emblema500})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(circle, black 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <Reveal className="flex items-center gap-3 text-xs tracking-[0.2em] text-gold-400 uppercase">
            <span className="h-px w-8 bg-gold-500" />
            Bayeux/PB · Atendimento presencial e online
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-balance font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-[3.4rem]"
          >
            Contabilidade que participa das{" "}
            <span className="italic text-gold-300">decisões</span> da sua empresa.
          </Reveal>

          <Reveal delay={160} className="mt-6 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
            Há 14 anos ao lado de empresários da Paraíba e de outros estados, cuidando da parte
            contábil, fiscal e trabalhista para que você possa focar em fazer sua empresa crescer.
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={buildWhatsAppLink(whatsappMessages.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.02] hover:bg-gold-400 sm:text-base"
            >
              Falar com Marinaldo no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-line px-7 py-4 text-sm font-medium text-cream transition-colors hover:border-gold-500/60 hover:text-gold-300 sm:text-base"
            >
              Conhecer os serviços
            </a>
          </Reveal>

          <Reveal
            delay={320}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-surface-line pt-8 sm:grid-cols-3"
          >
            <div>
              <p className="font-display text-2xl text-gold-300 sm:text-3xl">14 anos</p>
              <p className="mt-1 text-xs text-mist sm:text-sm">de atuação contábil</p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold-300 sm:text-3xl">CRC/PB</p>
              <p className="mt-1 text-xs text-mist sm:text-sm">008778/O-6</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-display text-2xl text-gold-300 sm:text-3xl">PB +</p>
              <p className="mt-1 text-xs text-mist sm:text-sm">clientes em outros estados</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-surface-line bg-surface">
            <img
              src={retrato900}
              srcSet={`${retrato500} 500w, ${retrato900} 900w, ${retrato1300} 1300w`}
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 90vw"
              alt="Marinaldo de Melo Silva, diretor da Marinaldo Melo Contabilidade, em seu escritório em Bayeux/PB"
              width={900}
              height={1080}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = retratoFallback;
              }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-6 pt-16">
              <p className="font-display text-lg text-cream">Marinaldo de Melo Silva</p>
              <p className="text-sm text-gold-300">Diretor · Contador</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
