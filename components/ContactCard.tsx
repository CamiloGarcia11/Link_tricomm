"use client";

import React, { useState } from "react";
import {
  MapPin,
  Headset,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ContactChannel } from "@/data/channels";

interface ContactCardProps {
  channel: ContactChannel;
  index: number;
  onCopySuccess: (phone: string, title: string) => void;
}

const DELAY_CLASSES = [
  "animate-delay-1",
  "animate-delay-2",
  "animate-delay-3",
  "animate-delay-4",
];

export const ContactCard: React.FC<ContactCardProps> = ({
  channel,
  index,
  onCopySuccess,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(channel.phoneDisplay);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = channel.phoneDisplay;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      onCopySuccess(channel.phoneDisplay, channel.title);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Error al copiar número:", err);
    }
  };

  const isSupport = channel.type === "support";
  const delayClass = DELAY_CLASSES[index] || "animate-delay-4";

  return (
    <div className={`w-full animate-fade-in-up ${delayClass}`}>
      <a
        href={channel.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar por WhatsApp a ${channel.title}`}
        className={`group relative flex flex-col w-full rounded-2xl transition-all duration-200 text-left cursor-pointer overflow-hidden transform-gpu ${
          isSupport
            ? "bg-gradient-to-b from-orange-50/50 via-white to-white border-2 border-orange-300/80 shadow-[0_4px_16px_-2px_rgba(234,79,29,0.12)] hover:border-tricomm-orange hover:shadow-[0_12px_28px_-4px_rgba(234,79,29,0.22)]"
            : "bg-white border border-slate-200/90 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.06)] hover:border-tricomm-orange/80 hover:shadow-[0_10px_24px_-4px_rgba(234,79,29,0.14)]"
        } hover:-translate-y-1 active:translate-y-0 active:scale-[0.99]`}
      >
        {/* Left accent indicator bar */}
        <div
          className={`absolute left-0 top-0 bottom-0 transition-all duration-200 ${
            isSupport
              ? "bg-gradient-to-b from-tricomm-light to-tricomm-orange w-2"
              : "bg-slate-200 group-hover:bg-tricomm-orange w-1.5 group-hover:w-2"
          }`}
        />

        {/* Support priority badge */}
        {isSupport && (
          <div className="absolute top-0 right-0 bg-gradient-to-l from-tricomm-orange to-tricomm-light text-white text-[10px] font-bold tracking-wide uppercase px-3 py-0.5 rounded-bl-xl shadow-xs flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            Atención Prioritaria
          </div>
        )}

        {/* Card content */}
        <div className="p-4 sm:p-4.5 pl-5 sm:pl-5.5 flex items-center justify-between gap-3">
          {/* Details */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div
              className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
                isSupport
                  ? "bg-orange-500/10 text-tricomm-orange border border-orange-200 group-hover:scale-105 group-hover:bg-tricomm-orange group-hover:text-white"
                  : "bg-slate-100 text-slate-600 border border-slate-200/60 group-hover:bg-orange-500/10 group-hover:text-tricomm-orange group-hover:border-orange-200 group-hover:scale-105"
              }`}
            >
              {isSupport ? (
                <Headset className="w-5 h-5 transition-transform" />
              ) : (
                <MapPin className="w-5 h-5 transition-transform" />
              )}
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-heading font-bold text-slate-800 text-[14.5px] sm:text-[15px] tracking-tight group-hover:text-tricomm-orange transition-colors truncate">
                {channel.title}
              </span>

              {/* Number and copy micro-pill */}
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="font-sans font-semibold text-slate-700 text-sm tracking-wide">
                  {channel.phoneDisplay}
                </span>

                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copiar número de teléfono"
                  aria-label={`Copiar número ${channel.phoneDisplay}`}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium transition-all duration-150 z-10 ${
                    copied
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300 scale-95"
                      : "bg-slate-100 hover:bg-orange-50 text-slate-600 hover:text-tricomm-orange border border-slate-200/70 hover:border-orange-200"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400 group-hover:text-tricomm-orange" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11.5px] text-slate-500 mt-1 line-clamp-1 font-sans">
                {channel.subtitle}
              </p>
            </div>
          </div>

          {/* Action icon */}
          <div className="shrink-0 flex items-center gap-1.5 pl-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-xs ${
                isSupport
                  ? "bg-emerald-500 text-white shadow-emerald-500/25 group-hover:scale-110 group-hover:bg-emerald-600"
                  : "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-emerald-500/20"
              }`}
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </div>

            <div className="hidden sm:flex text-slate-400 group-hover:text-tricomm-orange group-hover:translate-x-0.5 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-5 pb-2.5 pt-0 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100/80 bg-slate-50/50">
          <span className="flex items-center gap-1.5 font-medium text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Respuesta inmediata por WhatsApp
          </span>
          <span className="text-[10px] text-tricomm-orange font-semibold flex items-center gap-0.5 group-hover:underline">
            Chatear ahora →
          </span>
        </div>
      </a>
    </div>
  );
};
