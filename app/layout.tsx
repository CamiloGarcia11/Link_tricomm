import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#EA4F1D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tricomm.com.co"),
  title: "TRICOMM Telecomunicaciones | Canales de Atención",
  description:
    "Canales oficiales de WhatsApp para TRICOMM Telecomunicaciones. Comunícate directamente con nuestras sedes de Chinácota, El Zulia, Cúcuta y Soporte Técnico Especializado.",
  keywords: [
    "TRICOMM",
    "TRICOMM telecomunicaciones",
    "Internet Fibra Óptica",
    "Chinácota",
    "El Zulia",
    "Cúcuta",
    "Soporte Técnico TRICOMM",
    "WhatsApp TRICOMM",
  ],
  authors: [{ name: "TRICOMM Telecomunicaciones" }, { name: "VisionWeb" }],
  creator: "VisionWeb",
  publisher: "TRICOMM Telecomunicaciones",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/favicon-64.png",
    apple: "/logo-tricomm.png",
  },
  openGraph: {
    title: "TRICOMM Telecomunicaciones | Canales de Atención",
    description:
      "Conectividad y Fibra Óptica. Selecciona tu sede (Chinácota, El Zulia, Cúcuta) o Soporte Técnico para atención inmediata por WhatsApp.",
    siteName: "TRICOMM Telecomunicaciones",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo-tricomm.png",
        width: 1024,
        height: 1024,
        alt: "TRICOMM Telecomunicaciones - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRICOMM Telecomunicaciones | Canales de Atención",
    description:
      "Canales de WhatsApp oficiales de TRICOMM Telecomunicaciones: Chinácota, El Zulia, Cúcuta y Soporte Técnico.",
    images: ["/logo-tricomm.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans bg-white antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}
