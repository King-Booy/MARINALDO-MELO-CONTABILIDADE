import { buildWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { Reveal } from "../Reveal";

const GROUPS = [
  {
    tag: "Contábil",
    title: "Contabilidade empresarial e consultoria",
    text: "Gestão e acompanhamento contábil da empresa, com orientação para apoiar decisões financeiras importantes.",
    items: ["Contabilidade empresarial", "Consultoria contábil e financeira"],
    cta: { label: "Falar sobre contabilidade", message: whatsappMessages.contabil },
  },
  {
    tag: "Fiscal e tributário",
    title: "Impostos em dia e planejados",
    text: "Apuração correta dos impostos e um planejamento tributário que evita pagar mais do que o necessário.",
    items: ["Escrita fiscal", "Apuração de impostos", "Planejamento tributário", "Imposto de Renda (PF e PJ)"],
    cta: { label: "Falar sobre planejamento tributário", message: whatsappMessages.tributario },
  },
  {
    tag: "Pessoal",
    title: "Departamento pessoal e folha",
    text: "Rotinas trabalhistas e folha de pagamento conduzidas com atenção aos prazos e à legislação.",
    items: ["Departamento pessoal", "Folha de pagamento"],
    cta: { label: "Falar sobre departamento pessoal", message: whatsappMessages.pessoal },
  },
  {
    tag: "Empresarial",
    title: "Do início à regularização",
    text: "Acompanhamento em cada fase da empresa: abrir, alterar, encerrar ou regularizar pendências.",
    items: ["Abertura de empresas", "Alteração de empresas", "Encerramento de empresas", "Regularização de empresas"],
    cta: { label: "Quero abrir uma empresa", message: whatsappMessages.abertura },
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="text-xs tracking-[0.2em] text-gold-400 uppercase">Serviços</span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-cream sm:text-4xl">
            Tudo que sua empresa precisa em contabilidade, em um só lugar.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {GROUPS.map((group, i) => (
            <Reveal
              key={group.tag}
              delay={i * 80}
              className="flex flex-col rounded-2xl border border-surface-line bg-surface p-7 sm:p-9"
            >
              <span className="text-xs font-medium tracking-[0.15em] text-gold-400 uppercase">
                {group.tag}
              </span>
              <h3 className="mt-3 font-display text-xl text-cream sm:text-2xl">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">{group.text}</p>

              <ul className="mt-6 flex flex-1 flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-surface-line px-3.5 py-1.5 text-xs text-cream/85 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppLink(group.cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
              >
                {group.cta.label} →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
