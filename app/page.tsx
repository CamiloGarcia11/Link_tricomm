"use client";

import React, { useState } from "react";
import { BackgroundDecor } from "@/components/BackgroundDecor";
import { Header } from "@/components/Header";
import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";
import { CONTACT_CHANNELS } from "@/data/channels";

export default function HomePage() {
  const [toastInfo, setToastInfo] = useState<{
    message: string | null;
    phone: string | null;
  }>({
    message: null,
    phone: null,
  });

  const handleCopySuccess = (phone: string, title: string) => {
    setToastInfo({
      message: `¡Número copiado!`,
      phone: `${title}: ${phone}`,
    });

    setTimeout(() => {
      setToastInfo({ message: null, phone: null });
    }, 2800);
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between items-center py-10 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Background visual decorations */}
      <BackgroundDecor />

      {/* Main Card Container (Mobile-first max-w-md centered) */}
      <div className="relative z-10 w-full max-w-md flex flex-col justify-between min-h-[calc(100vh-5rem)]">
        {/* Top Section: Header & Branding */}
        <div className="flex flex-col items-center w-full">
          <Header />

          {/* Cards Section */}
          <section
            aria-label="Canales de atención por WhatsApp"
            className="flex flex-col gap-3.5 w-full mt-7"
          >
            {CONTACT_CHANNELS.map((channel, index) => (
              <ContactCard
                key={channel.id}
                channel={channel}
                index={index}
                onCopySuccess={handleCopySuccess}
              />
            ))}
          </section>
        </div>

        {/* Bottom Section: Footer Credits */}
        <Footer />
      </div>

      {/* Copy Toast feedback */}
      <Toast message={toastInfo.message} phone={toastInfo.phone} />
    </main>
  );
}
