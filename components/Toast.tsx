import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string | null;
  phone?: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message, phone }) => {
  const isVisible = Boolean(message);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none px-4 w-full max-w-sm transition-all duration-300 transform-gpu ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/95 text-white rounded-2xl shadow-xl backdrop-blur-md border border-slate-800">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="flex flex-col text-left text-xs">
          <span className="font-semibold text-white tracking-tight">
            {message}
          </span>
          {phone && (
            <span className="text-slate-400 font-mono text-[11px]">
              {phone} listo para marcar o guardar
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
