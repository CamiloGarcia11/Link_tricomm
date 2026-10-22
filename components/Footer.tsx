import React from "react";
import { Code2, ArrowUpRight, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 pt-6 border-t border-slate-100 flex flex-col items-center text-center gap-3.5 pb-2 animate-fade-in animate-delay-5">
      {/* Brand copyright notice */}
      <div className="flex flex-col items-center">
        <p className="text-xs text-slate-500 font-medium">
          © {currentYear}{" "}
          <span className="font-semibold text-slate-700">
            TRICOM telecomunicaciones
          </span>
          . Todos los derechos reservados.
        </p>
      </div>

      {/* Modern interactive credit pill for VisionWeb */}
      <div className="pt-1">
        <a
          href="https://visionwebcl.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sitio web del desarrollador VisionWeb"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-slate-900 text-slate-600 hover:text-white border border-slate-200/90 hover:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.15)] transition-all duration-200 text-xs font-medium backdrop-blur-xs transform-gpu hover:scale-[1.03] active:scale-[0.98]"
        >
          {/* Subtle tech sparkle icon */}
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 group-hover:bg-slate-800 text-slate-500 group-hover:text-amber-400 transition-colors">
            <Sparkles className="w-3 h-3 group-hover:hidden" />
            <Code2 className="w-3 h-3 hidden group-hover:inline" />
          </span>

          <span className="tracking-tight">
            Desarrollado por{" "}
            <span className="font-semibold text-slate-800 group-hover:text-white underline decoration-slate-300 group-hover:decoration-orange-400 underline-offset-2 transition-colors">
              VisionWeb
            </span>
          </span>

          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  );
};
