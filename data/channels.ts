export interface ContactChannel {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  phoneRaw: string;
  phoneDisplay: string;
  whatsappUrl: string;
  isFeatured?: boolean;
  type: "office" | "support";
  city?: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "chinacota",
    badge: "Sede",
    title: "Chinácota (Atención Comercial y Ventas)",
    subtitle: "Planes de internet, contratos y pagos",
    phoneRaw: "573156703381",
    phoneDisplay: "315 670 3381",
    whatsappUrl:
      "https://wa.me/573156703381?text=Hola%20TRICOMM,%20me%20comunico%20desde%20la%20sede%20Chin%C3%A1cota%20y%20deseo%20informaci%C3%B3n.",
    isFeatured: false,
    type: "office",
    city: "Chinácota",
  },
  {
    id: "zulia",
    badge: "Sede",
    title: "Zulia (Atención Comercial y Ventas)",
    subtitle: "Planes de internet, contratos y pagos",
    phoneRaw: "573003239896",
    phoneDisplay: "300 323 9896",
    whatsappUrl:
      "https://wa.me/573003239896?text=Hola%20TRICOMM,%20me%20comunico%20desde%20la%20sede%20El%20Zulia%20y%20deseo%20informaci%C3%B3n.",
    isFeatured: false,
    type: "office",
    city: "El Zulia",
  },
  {
    id: "cucuta",
    badge: "Sede",
    title: "Cúcuta (Atención Comercial y Ventas)",
    subtitle: "Planes de internet, contratos y pagos",
    phoneRaw: "573182433579",
    phoneDisplay: "318 243 3579",
    whatsappUrl:
      "https://wa.me/573182433579?text=Hola%20TRICOMM,%20me%20comunico%20desde%20la%20sede%20C%C3%BAcuta%20y%20deseo%20informaci%C3%B3n.",
    isFeatured: false,
    type: "office",
    city: "Cúcuta",
  },
  {
    id: "soporte",
    badge: "Prioritario",
    title: "Soporte Técnico Especializado",
    subtitle: "Asistencia técnica, configuración y fallas",
    phoneRaw: "573176426833",
    phoneDisplay: "317 642 6833",
    whatsappUrl:
      "https://wa.me/573176426833?text=Hola%20TRICOMM,%20necesito%20asistencia%20de%20Soporte%20T%C3%A9cnico.",
    isFeatured: true,
    type: "support",
  },
];
