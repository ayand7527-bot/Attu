/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { BIRTHDAY_DATA } from "../config/birthdayData";
import { soundManager } from "../utils/audio";
import { IslamicStar, GoldFlourishDivider } from "./IslamicGeometry";
import { Sparkles, MailOpen, RotateCcw } from "lucide-react";

interface Props {
  onProceedToLetter: () => void;
}

export const InteractiveGiftBox: React.FC<Props> = ({ onProceedToLetter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerConfetti = () => {
    try {
      // Restrained, elegant gold and emerald confetti shower
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#C7A45B", "#E6CB85", "#123B2C", "#FAF5EE", "#DFC17B"],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.9,
        shapes: ["circle", "square"],
      });
    } catch {
      // Fallback safe
    }
  };

  const handleToggleBox = () => {
    if (!isOpen) {
      soundManager.playHarp();
      triggerConfetti();
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <section
      id="gift"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#080A09] text-center overflow-hidden"
      aria-label="Interactive Birthday Gift Box"
    >
      {/* Ambient Radial Lighting */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full bg-[#123B2C]/20 blur-[120px] pointer-events-none top-1/3 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center w-full">
        {/* Section Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-body font-medium uppercase tracking-[0.2em] text-[#C7A45B]">
            <span>Part 03</span>
            <span aria-hidden="true">·</span>
            <span>A Token of Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-[#F4EBDD] tracking-normal">
            The Golden Keepsake
          </h2>
          <p className="text-xs sm:text-sm text-[#F4EBDD]/75 font-body font-normal max-w-sm mx-auto leading-relaxed">
            {isOpen ? "Unwrapped with sincerity and barakah" : BIRTHDAY_DATA.giftBox.tapPrompt}
          </p>
        </div>

        {/* 3D Interactive Matte Black & Antique Gold Gift Box */}
        <div className="relative w-64 sm:w-72 h-72 sm:h-80 flex items-center justify-center my-4">
          <div
            onClick={handleToggleBox}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggleBox();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={isOpen ? "Close birthday gift box" : "Open birthday gift box"}
            className="group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080A09] rounded-2xl select-none"
          >
            {/* Ambient Base Shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-10 bg-black/80 blur-xl rounded-full pointer-events-none" />

            {/* BOX BODY */}
            <div className="relative w-48 sm:w-56 h-40 sm:h-44 rounded-b-xl bg-gradient-to-b from-[#101412] to-[#060807] border-2 border-[#C7A45B]/50 shadow-[0_16px_36px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-300 group-hover:border-[#C7A45B]">
              {/* Subtle inner geometric line */}
              <div className="absolute inset-2 border border-[#C7A45B]/15 rounded-lg pointer-events-none" />

              {/* Vertical Gold Ribbon */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-[#9A7A38] via-[#E6CB85] to-[#9A7A38] shadow-[0_0_12px_rgba(199,164,91,0.3)] flex items-center justify-center">
                <div className="w-[1px] h-full bg-[#4A3816]/40" />
              </div>

              {/* Horizontal Gold Ribbon */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-7 bg-gradient-to-b from-[#9A7A38] via-[#E6CB85] to-[#9A7A38] shadow-[0_0_12px_rgba(199,164,91,0.3)] flex items-center justify-center">
                <div className="h-[1px] w-full bg-[#4A3816]/40" />
              </div>

              {/* Golden Islamic Medallion on Front */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#080A09] border border-[#E6CB85] shadow-lg flex items-center justify-center">
                <IslamicStar size={18} />
              </div>
            </div>

            {/* BOX LID WITH ANIMATION */}
            <motion.div
              animate={
                isOpen
                  ? { y: -80, rotate: -22, x: -15, opacity: 0.95 }
                  : { y: 0, rotate: 0, x: 0, opacity: 1 }
              }
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-52 sm:w-60 h-14 rounded-lg bg-gradient-to-b from-[#161C19] to-[#0A0D0C] border-2 border-[#C7A45B]/70 shadow-[0_8px_20px_rgba(0,0,0,0.9)] z-20"
            >
              {/* Ribbon across lid */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-[#9A7A38] via-[#E6CB85] to-[#9A7A38]" />

              {/* Elegant Antique Gold Ribbon Bow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                {/* Left loop */}
                <div className="w-7 h-8 rounded-full border-2 border-[#E6CB85] bg-gradient-to-br from-[#E6CB85] to-[#9A7A38] -rotate-30 -mr-1.5 shadow-md" />
                {/* Center Knot */}
                <div className="w-5 h-5 rounded-full bg-[#FAF5EE] border border-[#9A7A38] z-10 shadow" />
                {/* Right loop */}
                <div className="w-7 h-8 rounded-full border-2 border-[#E6CB85] bg-gradient-to-bl from-[#E6CB85] to-[#9A7A38] rotate-30 -ml-1.5 shadow-md" />
              </div>

              {/* Tag / Name Label */}
              <div className="absolute bottom-1 right-3 text-[10px] tracking-widest text-[#E6CB85] font-body font-medium uppercase">
                {BIRTHDAY_DATA.giftBox.lidLabel}
              </div>
            </motion.div>
          </div>
        </div>

        {/* REVEALED HEARTFELT WISH CARD */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full mt-4 px-4"
            >
              <div className="relative mx-auto max-w-md p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#123B2C]/90 to-[#0A231A]/95 border border-[#C7A45B] shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-center backdrop-blur-md">
                {/* Delicate gold badge */}
                <div className="flex items-center justify-center gap-2 mb-3 text-[11px] uppercase tracking-[0.2em] text-[#C7A45B] font-body font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6CB85]" />
                  <span>{BIRTHDAY_DATA.giftBox.revealedTitle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-normal text-[#F4EBDD] mb-3 leading-snug">
                  A Gift of Prayers for Attu
                </h3>

                <p className="text-sm sm:text-base font-body font-normal text-[#F4EBDD]/90 leading-relaxed mb-4">
                  {BIRTHDAY_DATA.giftBox.revealedMessage}
                </p>

                <p className="text-sm sm:text-base font-heading italic text-[#E6CB85] pb-2 font-normal leading-relaxed">
                  {BIRTHDAY_DATA.giftBox.blessingQuote}
                </p>

                <GoldFlourishDivider className="my-4" />

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={onProceedToLetter}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-full bg-[#FAF5EE] text-[#080A09] text-xs font-button font-medium uppercase tracking-wider hover:bg-[#E6CB85] transition-colors shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
                  >
                    <MailOpen className="w-4 h-4 text-[#123B2C]" />
                    <span>Read Attu's Letter</span>
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] text-xs font-button text-[#C7A45B]/80 hover:text-[#C7A45B] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Wrap Box Again</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* If closed, show subtle tap prompt button */}
        {!isOpen && (
          <button
            onClick={handleToggleBox}
            className="mt-2 inline-flex items-center gap-2 text-xs font-body font-medium uppercase tracking-widest text-[#C7A45B] hover:text-[#E6CB85] p-2 min-h-[44px] cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Tap the box to open</span>
          </button>
        )}
      </div>
    </section>
  );
};
