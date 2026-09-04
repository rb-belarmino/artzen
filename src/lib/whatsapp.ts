import { COMPANY_DATA } from "@/data/company";

export interface WhatsAppLeadPayload {
  name?: string;
  phone?: string;
  environmentType?: string;
  customMessage?: string;
}

export function buildWhatsAppUrl(payload?: WhatsAppLeadPayload): string {
  const baseNumber = COMPANY_DATA.contacts.whatsappNumber;
  
  if (!payload || (!payload.name && !payload.environmentType && !payload.customMessage)) {
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(COMPANY_DATA.contacts.defaultWhatsAppMessage)}`;
  }

  const parts: string[] = ["Olá, Artzen!"];

  if (payload.name && payload.name.trim()) {
    parts.push(`Meu nome é *${payload.name.trim()}*.`);
  }

  if (payload.environmentType && payload.environmentType !== "outro") {
    parts.push(`Tenho interesse em um projeto planejado para: *${payload.environmentType}*.`);
  }

  if (payload.phone && payload.phone.trim()) {
    parts.push(`Meu telefone de contato é: ${payload.phone.trim()}.`);
  }

  if (payload.customMessage && payload.customMessage.trim()) {
    parts.push(`Detalhes adicionais: "${payload.customMessage.trim()}".`);
  } else {
    parts.push("Gostaria de agendar uma consultoria e solicitar um orçamento!");
  }

  const fullText = parts.join("\n\n");
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(fullText)}`;
}

export function buildEnvironmentQuoteUrl(environmentName: string): string {
  return buildWhatsAppUrl({
    environmentType: environmentName,
    customMessage: `Gostei muito do projeto de ${environmentName} apresentado no site e gostaria de planejar o meu com vocês.`
  });
}
