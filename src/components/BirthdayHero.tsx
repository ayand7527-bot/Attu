/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { CrescentDetail, IslamicStar, GoldFlourishDivider } from "./IslamicGeometry";
import { BIRTHDAY_DATA } from "../config/birthdayData";
import { Gift, Heart } from "lucide-react";

interface Props {
  onProceedToGift: () => void;
}

export const BirthdayHero: React.FC<Props> = ({ onProceedToGift }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#080A09] text-center overflow-hidden"
      aria-label="Birthday Hero"
    >
      {/* Background Radial Emerald Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#123B2C]/30 blur-[130px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      {/* Decorative Gold Frame Border Corners */}
      <div className="absolute inset-4 sm:inset-8 border border-[#C7A45B]/15 pointer-events-none rounded-2xl">
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C7A45B]" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C7A45B]" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C7A45B]" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C7A45B]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-2">
        {/* Subtle Crescent & Star Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -15 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-[#123B2C]/40 to-[#080A09] border border-[#C7A45B]/40 shadow-[0_0_24px_rgba(199,164,91,0.25)]">
            <CrescentDetail className="w-12 h-12" />
          </div>
          <div className="absolute -bottom-1 -right-1">
            <IslamicStar size={20} />
          </div>
        </motion.div>

        {/* Kicker / Subtitle */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-2 text-[11px] sm:text-xs font-body font-medium uppercase text-[#C7A45B] mb-4"
        >
          <span>{BIRTHDAY_DATA.hero.kicker}</span>
        </motion.div>

        {/* Main Headline: "Happy Birthday, Attu" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-light text-gold-gradient tracking-normal leading-[1.15] text-balance">
            {BIRTHDAY_DATA.hero.headline}
          </h2>
          <div className="flex items-center justify-center gap-3 text-xs tracking-wider text-[#F4EBDD]/70 uppercase font-body font-normal pt-1">
            <span>Special Day</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E6CB85] font-medium">{BIRTHDAY_DATA.recipient.birthDateFormatted}</span>
          </div>
        </motion.div>

        <GoldFlourishDivider className="my-4" />

        {/* Heartfelt Dua Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative my-6 px-6 py-6 sm:px-8 sm:py-7 rounded-xl bg-gradient-to-b from-[#123B2C]/30 via-[#0A231A]/40 to-[#080A09] border border-[#C7A45B]/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-lg"
        >
          <div className="flex items-center justify-center gap-2 text-[#C7A45B] text-xs uppercase tracking-wider font-body font-medium mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#C7A45B]/40 text-[#C7A45B]" />
            <span>Sincere Prayer & Wish</span>
          </div>

          <p className="text-xl sm:text-2xl font-heading font-normal text-[#F4EBDD] leading-relaxed italic">
            "{BIRTHDAY_DATA.hero.dua}"
          </p>

          <p className="text-xs sm:text-sm text-[#F4EBDD]/80 font-body font-normal mt-3 leading-relaxed">
            {BIRTHDAY_DATA.hero.subheadline}
          </p>
        </motion.div>

        {/* CTA to Interactive Gift Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-4 flex flex-col items-center gap-3"
        >
          <button
            onClick={onProceedToGift}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full bg-[#123B2C] hover:bg-[#184E3B] border border-[#C7A45B]/70 hover:border-[#E6CB85] text-[#F4EBDD] text-xs sm:text-sm font-button font-medium tracking-wider shadow-lg shadow-[#080A09]/80 active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
          >
            <Gift className="w-4 h-4 text-[#C7A45B]" />
            <span>Unwrap Your Gift Box</span>
          </button>
          <span className="text-[11px] font-body text-[#C7A45B]/70 tracking-wide">
            A token of warmth and joy awaits
          </span>
        </motion.div>
      </div>
    </section>
  );
};
