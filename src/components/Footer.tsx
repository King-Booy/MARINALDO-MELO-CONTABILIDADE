import { buildWhatsAppLink, WHATSAPP_DISPLAY, whatsappMessages } from "../lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-line bg-ink py-14 text-mist">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg text-cream">Marinaldo Melo Contabilidade</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Avenida Liberdade, 3119 — 2º andar, sala 204
              <br />
              Bayeux/PB — CEP 58.110-160
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-gold-400 uppercase">Contato</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={buildWhatsAppLink(whatsappMessages.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-300"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:marinaldomcontador@hotmail.com"
                  className="transition-colors hover:text-gold-300"
                >
                  marinaldomcontador@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-gold-400 uppercase">Funcionamento</p>
            <p className="mt-3 text-sm">Segunda a sexta, das 8h às 18h</p>
            <p className="mt-4 text-xs tracking-[0.15em] text-gold-400 uppercase">Registro</p>
            <p className="mt-3 text-sm">CRC/PB 008778/O-6</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-surface-line pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Marinaldo Melo Contabilidade. Todos os direitos reservados.</p>
          <p>Marinaldo de Melo Silva · Diretor · CRC/PB 008778/O-6</p>
        </div>
      </div>
    </footer>
  );
}
