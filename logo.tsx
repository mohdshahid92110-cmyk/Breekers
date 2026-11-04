"use client";

import { motion } from "framer-motion";

export function Logo({ size = 30, showWord = true }: { size?: number; showWord?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" role="img" aria-label="Breekers logo">
        <defs>
          <linearGradient id="bk-grad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" />
            <stop offset=".55" stopColor="#6366F1" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <motion.path
          d="M16 2.5 28 9.25v13.5L16 29.5 4 22.75V9.25z"
          stroke="url(#bk-grad)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />
        <path
          d="M12.5 9.5v13M12.5 9.5h4a3 3 0 0 1 0 6h-4m0 0h4.5a3.5 3.5 0 0 1 0 7h-4.5"
          stroke="url(#bk-grad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          style={{ originX: "16px", originY: "16px" }}
        >
          <circle cx="16" cy="1.6" r="1.5" fill="#22D3EE" />
        </motion.g>
      </svg>
      {showWord && <span className="font-display text-lg font-semibold tracking-tight">Breekers</span>}
    </span>
  );
}
