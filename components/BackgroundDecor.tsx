import React from "react";

export const BackgroundDecor: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Radial brand glow from top */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full blur-3xl opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(234, 79, 29, 0.08) 0%, rgba(255, 107, 53, 0.04) 45%, rgba(255, 255, 255, 0) 75%)",
        }}
      />

      {/* Subtle bottom secondary glow */}
      <div
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(234, 79, 29, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      {/* Telecom grid pattern */}
      <div className="absolute inset-0 bg-telecom-grid opacity-60" />

      {/* Subtle curved tech lines */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-[0.035] text-tricomm-orange"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 100 C 200 80, 400 300, 900 150"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M-50 250 C 250 200, 500 450, 950 300"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M0 400 C 300 350, 600 550, 1000 450"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
      </svg>
    </div>
  );
};
