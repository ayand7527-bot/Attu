/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

/**
 * Classical Bismillah Calligraphy (Scalable SVG Vector)
 * Rendered in antique gold with delicate accents
 */
export const BismillahCalligraphy: React.FC<{ className?: string }> = ({ className = "w-full max-w-md h-auto" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="img" aria-label="Bismillah ar-Rahman ar-Rahim calligraphy">
      <svg
        viewBox="0 0 600 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_2px_12px_rgba(199,164,91,0.25)]"
      >
        <defs>
          <linearGradient id="goldCalligraphyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E8C4" />
            <stop offset="35%" stopColor="#C7A45B" />
            <stop offset="70%" stopColor="#DFC17B" />
            <stop offset="100%" stopColor="#967735" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Decorative corner motifs */}
        <path d="M 20 65 L 45 65 M 32.5 52.5 L 32.5 77.5" stroke="#C7A45B" strokeWidth="1" opacity="0.4" />
        <circle cx="32.5" cy="65" r="2" fill="#DFC17B" opacity="0.6" />
        <path d="M 580 65 L 555 65 M 567.5 52.5 L 567.5 77.5" stroke="#C7A45B" strokeWidth="1" opacity="0.4" />
        <circle cx="567.5" cy="65" r="2" fill="#DFC17B" opacity="0.6" />

        {/* Traditional Arabic Calligraphy text path/rendering */}
        <text
          x="300"
          y="78"
          textAnchor="middle"
          fill="url(#goldCalligraphyGrad)"
          filter="url(#softGlow)"
          className="font-arabic select-none"
          style={{
            fontSize: "44px",
            letterSpacing: "normal",
          }}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </text>

        {/* Subtle decorative underlining flourish */}
        <path
          d="M 170 98 Q 300 108 430 98"
          stroke="url(#goldCalligraphyGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <circle cx="300" cy="103" r="2.5" fill="#DFC17B" opacity="0.8" />
        <circle cx="280" cy="102" r="1.5" fill="#C7A45B" opacity="0.6" />
        <circle cx="320" cy="102" r="1.5" fill="#C7A45B" opacity="0.6" />
      </svg>
    </div>
  );
};

/**
 * 8-Pointed Islamic Star (Rub el Hizb / Khatim)
 */
export const IslamicStar: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="starGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8E7BE" />
          <stop offset="50%" stopColor="#C7A45B" />
          <stop offset="100%" stopColor="#8F7236" />
        </linearGradient>
      </defs>
      {/* Outer square 1 */}
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        stroke="url(#starGold)"
        strokeWidth="2.5"
        fill="rgba(18, 59, 44, 0.25)"
        rx="2"
      />
      {/* Interlaced rotated square 2 */}
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        stroke="url(#starGold)"
        strokeWidth="2.5"
        fill="rgba(18, 59, 44, 0.25)"
        transform="rotate(45 50 50)"
        rx="2"
      />
      {/* Center rosette */}
      <circle cx="50" cy="50" r="10" stroke="url(#starGold)" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="50" r="3" fill="url(#starGold)" />
    </svg>
  );
};

/**
 * Delicate Islamic Crescent Moon & Star
 */
export const CrescentDetail: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crescentGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#F8E7BE" />
          <stop offset="70%" stopColor="#C7A45B" />
          <stop offset="100%" stopColor="#8F7236" />
        </linearGradient>
      </defs>
      {/* Crescent Path */}
      <path
        d="M 46 16 C 26 16 12 30 12 48 C 12 66 26 80 44 80 C 56 80 66 73 70 63 C 54 66 38 56 38 42 C 38 30 46 20 60 18 C 55 16 50 16 46 16 Z"
        fill="url(#crescentGold)"
        opacity="0.9"
        transform="scale(0.85) translate(4, 2)"
      />
      {/* Delicate tiny eight point star in the crescent lap */}
      <circle cx="48" cy="30" r="1.5" fill="#FFF" />
      <path
        d="M 48 24 L 49.5 28.5 L 54 30 L 49.5 31.5 L 48 36 L 46.5 31.5 L 42 30 L 46.5 28.5 Z"
        fill="url(#crescentGold)"
      />
    </svg>
  );
};

/**
 * Elegant Golden Divider Line with Islamic Centerpiece
 */
export const GoldFlourishDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto my-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C7A45B]/60 to-[#C7A45B]" />
      <div className="rotate-45 w-2 h-2 border border-[#C7A45B] bg-[#123B2C]/80" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C7A45B]/60 to-[#C7A45B]" />
    </div>
  );
};

/**
 * Ornamental Card Corner Accent
 */
export const CornerFlourish: React.FC<{ position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }> = ({
  position,
}) => {
  const getTransform = () => {
    switch (position) {
      case "top-right":
        return "rotate-90";
      case "bottom-right":
        return "rotate-180";
      case "bottom-left":
        return "-rotate-90";
      default:
        return "";
    }
  };

  return (
    <div className={`absolute pointer-events-none w-8 h-8 ${position === "top-left" ? "top-2 left-2" : position === "top-right" ? "top-2 right-2" : position === "bottom-left" ? "bottom-2 left-2" : "bottom-2 right-2"} ${getTransform()}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#C7A45B]/60">
        <path d="M 0 0 L 24 0 C 14 0 8 6 8 16 L 8 40" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};
