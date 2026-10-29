/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { BismillahCalligraphy, IslamicStar, GoldFlourishDivider } from "./IslamicGeometry";
import { BIRTHDAY_DATA } from "../config/birthdayData";
import { soundManager } from "../utils/audio";
import { Sparkles, ChevronDown } from "lucide-react";

interface Props {
  onOpenSurprise: () => void;
}

export const CinematicOpening: React.FC<Props> = ({ onOpenSurprise }) => {
  const handleOpen = () => {
    soundManager.playChime();
    onOpenSurprise();
  };

  return (
    <section
      id="opening"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-[#080A09] text-center"
      aria-label="Welcome opening"
    >
      {/* Ambient Deep Emerald Glow in the background */}
      <div
        className="absolute w-[360px] sm:w-[540px] h-[360px] sm:h-[540px] rounded-full bg-[#123B2C]/25 blur-[120px] pointer-events-none -top-12 -left-12"
        aria-hidden="true"
      />
      <div
        className="absolute w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-[#C7A45B]/10 blur-[140px] pointer-events-none bottom-10 right-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Subtle Ornamental Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <IslamicStar size={44} />
        </motion.div>

        {/* Elegant Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="w-full px-2 mb-4"
        >
          <BismillahCalligraphy className="w-full max-w-sm sm:max-w-md mx-auto" />
          <p className="text-xs sm:text-sm font-body font-normal tracking-wide text-[#C7A45B]/80 mt-2">
            {BIRTHDAY_DATA.bismillah.translation}
          </p>
        </motion.div>

        <GoldFlourishDivider className="my-6" />

        {/* Quiet Kicker & Dedication */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-3 mb-10 max-w-md px-4"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#C7A45B] font-body font-medium">
            <span>Dedicated with Duas</span>
            <span aria-hidden="true">·</span>
            <span>{BIRTHDAY_DATA.recipient.birthDateFormatted}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-[#F4EBDD] tracking-normal leading-relaxed text-balance">
            A Blessed Celebration Prepared Especially for You
          </h1>

          <p className="text-sm text-[#F4EBDD]/80 font-body font-normal leading-relaxed">
            In tranquility and grace, step forward into a quiet haven created to honor this milestone in your life.
          </p>
        </motion.div>

        {/* Clear "Open Your Surprise" Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full px-4 flex flex-col items-center gap-4"
        >
          <button
            onClick={handleOpen}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-full bg-gradient-to-r from-[#123B2C] via-[#1A4F3B] to-[#123B2C] border border-[#C7A45B]/80 text-[#F4EBDD] font-button font-medium tracking-wider shadow-[0_4px_24px_rgba(199,164,91,0.2)] hover:shadow-[0_6px_32px_rgba(199,164,91,0.35)] hover:border-[#E6CB85] active:scale-[0.98] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09]"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-0 animate-shimmer opacity-30" />
            </span>

            <Sparkles className="w-5 h-5 text-[#C7A45B] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm sm:text-base font-button font-semibold tracking-wider">
              Open Your Surprise
            </span>
          </button>

          <span className="text-xs font-body text-[#C7A45B]/70 tracking-wide">
            Touch or click to unfold the journey
          </span>
        </motion.div>

        {/* Scroll hint indicator */}
        <motion.button
          onClick={handleOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 text-[#C7A45B]/60 hover:text-[#C7A45B] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Scroll to birthday hero"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};
