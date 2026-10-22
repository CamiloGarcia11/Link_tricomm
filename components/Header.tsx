import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center w-full">
      {/* Logo container with GPU-accelerated CSS entrance */}
      <div className="relative group mb-5 animate-scale-in">
        <div className="relative flex items-center justify-center p-3.5 bg-white/90 backdrop-blur-xs rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group-hover:shadow-[0_12px_36px_rgba(234,79,29,0.09)]">
          <picture>
            <source srcSet="/logo-tricom.webp" type="image/webp" />
            <img
              src="/logo-tricom.png"
              alt="Logo TRICOM Telecomunicaciones"
              width={180}
              height={180}
              loading="eager"
              decoding="async"
              className="w-40 h-auto sm:w-44 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </picture>
        </div>

        {/* Live status indicator */}
        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-slate-100">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>
      </div>

      {/* Official Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/70 border border-orange-200/60 shadow-xs mb-3.5 backdrop-blur-xs animate-fade-in-up animate-delay-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tricom-orange opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-tricom-orange"></span>
        </span>
        <span className="text-xs font-semibold text-slate-800 tracking-tight flex items-center gap-1.5">
          Telecomunicaciones
          <span className="text-orange-400">•</span>
          <span className="text-tricom-orange font-bold">Canales Oficiales</span>
        </span>
      </div>

      {/* Welcome text */}
      <div className="max-w-xs sm:max-w-sm animate-fade-in-up animate-delay-2">
        <p className="text-sm text-slate-600 leading-relaxed font-sans">
          Selecciona tu sede o área de atención para comunicarte con nuestro equipo por{" "}
          <span className="font-semibold text-slate-800 inline-flex items-center gap-0.5">
            WhatsApp
          </span>
          .
        </p>
      </div>
    </header>
  );
};
