const WHATSAPP_NUMBER = "5583996421128";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_DISPLAY = "(83) 99642-1128";

export const whatsappMessages = {
  geral: "Olá, Marinaldo. Gostaria de saber mais sobre os serviços de contabilidade.",
  empresa: "Olá, Marinaldo. Quero falar sobre a contabilidade da minha empresa.",
  abertura: "Olá, Marinaldo. Quero abrir uma empresa e gostaria de orientação.",
  regularizacao: "Olá, Marinaldo. Preciso regularizar minha empresa.",
  tributario: "Olá, Marinaldo. Gostaria de saber mais sobre planejamento tributário.",
  fiscal: "Olá, Marinaldo. Gostaria de entender melhor a escrita fiscal e apuração de impostos do meu negócio.",
  pessoal: "Olá, Marinaldo. Preciso de ajuda com departamento pessoal e folha de pagamento.",
  contabil: "Olá, Marinaldo. Quero entender melhor a contabilidade empresarial e a consultoria contábil.",
  impostoDeRenda: "Olá, Marinaldo. Gostaria de ajuda com o meu Imposto de Renda.",
  segmento: (segmento: string) =>
    `Olá, Marinaldo. Tenho um negócio no segmento de ${segmento} e gostaria de conversar sobre contabilidade.`,
} as const;
