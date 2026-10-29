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
import { Sparkles, Wind, RotateCcw, HeartHandshake } from "lucide-react";

interface Props {
  onProceedToDua: () => void;
}

export const EmeraldCakeMoment: React.FC<Props> = ({ onProceedToDua }) => {
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true, true, true]);
  const [wishMade, setWishMade] = useState(false);

  const allBlownOut = candlesLit.every((lit) => !lit);

  const triggerCakeSparkles = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.55 },
        colors: ["#F8E7BE", "#C7A45B", "#123B2C", "#FAF5EE", "#E6CB85"],
        gravity: 0.7,
        ticks: 240,
        scalar: 0.8,
      });
    } catch {
      // Fallback
    }
  };

  const handleMakeWish = () => {
    soundManager.playBreeze();
    setCandlesLit([false, false, false, false, false]);
    setWishMade(true);
    triggerCakeSparkles();
  };

  const toggleSingleCandle = (index: number) => {
    const updated = [...candlesLit];
    updated[index] = !updated[index];
    setCandlesLit(updated);

    if (updated[index]) {
      soundManager.playChime([783.99]);
    } else {
      soundManager.playBreeze();
      if (updated.every((lit) => !lit)) {
        setWishMade(true);
        triggerCakeSparkles();
      }
    }
  };

  const handleRelight = () => {
    soundManager.playChime([523.25, 659.25, 783.99]);
    setCandlesLit([true, true, true, true, true]);
    setWishMade(false);
  };

  return (
    <section
      id="cake"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#080A09] text-center overflow-hidden"
      aria-label="Birthday Cake Moment"
    >
      {/* Deep Emerald Background Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#123B2C]/30 blur-[130px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-body font-medium uppercase tracking-[0.2em] text-[#C7A45B]">
            <span>Part 05</span>
            <span aria-hidden="true">·</span>
            <span>A Moment of Light</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-[#F4EBDD] tracking-normal">
            {BIRTHDAY_DATA.cake.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#F4EBDD]/75 font-body font-normal max-w-sm mx-auto leading-relaxed">
            {allBlownOut ? "Your silent wish has been lifted up" : BIRTHDAY_DATA.cake.subtitle}
          </p>
        </div>

        {/* ELEGANT DARK-EMERALD BIRTHDAY CAKE (Vector & CSS Art) */}
        <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex flex-col items-center justify-end my-2">
          {/* Cake Stand (Antique Gold Brass Pedestal) */}
          <div className="absolute bottom-2 w-64 sm:w-72 h-4 rounded-full bg-gradient-to-r from-[#8F7236] via-[#E6CB85] to-[#8F7236] shadow-[0_12px_24px_rgba(0,0,0,0.9)]" />
          <div className="absolute bottom-0 w-28 h-3 rounded-b-md bg-[#8F7236]" />

          {/* CANDLES ROW */}
          <div className="relative z-20 flex items-end justify-center gap-5 sm:gap-7 mb-2">
            {candlesLit.map((isLit, idx) => (
              <div
                key={idx}
                onClick={() => toggleSingleCandle(idx)}
                className="group flex flex-col items-center cursor-pointer select-none"
                role="button"
                tabIndex={0}
                aria-label={`Candle ${idx + 1}, ${isLit ? "Lit. Tap to extinguish" : "Extinguished. Tap to relight"}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSingleCandle(idx);
                  }
                }}
              >
                {/* Flame or Smoke */}
                <div className="h-9 flex items-center justify-center relative">
                  {isLit ? (
                    <div className="relative flex items-center justify-center animate-flame">
                      {/* Outer golden halo */}
                      <div className="w-5 h-8 rounded-full bg-gradient-to-t from-[#F59E0B] via-[#FBBF24] to-[#FEF3C7] blur-[1px]" />
                      {/* Inner white-hot wick core */}
                      <div className="absolute bottom-1 w-2 h-4 rounded-full bg-white opacity-90" />
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-center animate-smoke">
                      <div className="w-1.5 h-6 rounded-full bg-[#FAF5EE]/30 blur-[1px]" />
                      <div className="text-[10px] text-[#C7A45B]/60 font-mono -mt-1">~</div>
                    </div>
                  )}
                </div>

                {/* Candle Wick */}
                <div className="w-[1.5px] h-2 bg-[#2D241E]" />

                {/* Golden Candlestick */}
                <div className="w-3.5 sm:w-4 h-14 sm:h-16 rounded-t-sm bg-gradient-to-r from-[#9A7A38] via-[#F8E7BE] to-[#9A7A38] border border-[#C7A45B]/80 shadow-[0_2px_8px_rgba(0,0,0,0.5)] relative overflow-hidden">
                  {/* Subtle spiral stripe */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(18,59,44,0.6)_50%,transparent_75%)] bg-[length:6px_6px]" />
                </div>
              </div>
            ))}
          </div>

          {/* TOP CAKE TIER (Deep Emerald with Gold Piping) */}
          <div className="relative z-10 w-44 sm:w-52 h-16 sm:h-18 rounded-t-xl bg-gradient-to-b from-[#184E3B] via-[#123B2C] to-[#0A231A] border-t-2 border-x-2 border-[#C7A45B] shadow-inner flex flex-col items-center justify-between overflow-hidden">
            {/* Gold Drip / Frosting Accent */}
            <div className="w-full flex justify-between px-2 pt-0.5">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-2 rounded-b-full bg-gradient-to-b from-[#E6CB85] to-[#C7A45B]"
                />
              ))}
            </div>

            {/* Medallion / Attu initial on top tier */}
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E6CB85]" />
              <span className="font-body font-medium text-xs tracking-widest text-[#E6CB85]">
                {BIRTHDAY_DATA.recipient.nickname}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#E6CB85]" />
            </div>

            {/* Gold trim line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#E6CB85] to-transparent" />
          </div>

          {/* BOTTOM CAKE TIER (Wider Base Deep Emerald) */}
          <div className="relative z-10 w-60 sm:w-68 h-20 sm:h-22 rounded-t-lg bg-gradient-to-b from-[#184E3B] via-[#123B2C] to-[#0A231A] border-t border-x-2 border-[#C7A45B] shadow-[0_8px_24px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden">
            {/* Scalloped Gold Frosting */}
            <div className="w-full flex justify-around px-2 pt-0.5">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-2.5 rounded-b-full bg-gradient-to-b from-[#E6CB85] to-[#9A7A38]"
                />
              ))}
            </div>

            {/* Center Arabic Motif Ornament */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-10 bg-[#C7A45B]/60" />
              <IslamicStar size={18} />
              <div className="h-[1px] w-10 bg-[#C7A45B]/60" />
            </div>

            {/* Bottom Golden Base Rim */}
            <div className="w-full h-2 bg-gradient-to-r from-[#9A7A38] via-[#E6CB85] to-[#9A7A38] border-t border-[#8F7236]" />
          </div>
        </div>

        {/* MAKE A WISH / BLOW CANDLES BUTTON */}
        <div className="mt-6 flex flex-col items-center gap-3 w-full px-4">
          {!allBlownOut ? (
            <button
              onClick={handleMakeWish}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-full bg-gradient-to-r from-[#123B2C] via-[#1A4F3B] to-[#123B2C] border-2 border-[#C7A45B] text-[#F4EBDD] font-button font-medium tracking-wider text-sm sm:text-base shadow-[0_6px_25px_rgba(199,164,91,0.25)] hover:border-[#E6CB85] hover:shadow-[0_8px_32px_rgba(199,164,91,0.35)] active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
            >
              <Wind className="w-5 h-5 text-[#C7A45B] group-hover:translate-x-1 transition-transform" />
              <span>{BIRTHDAY_DATA.cake.wishPrompt}</span>
              <Sparkles className="w-4 h-4 text-[#E6CB85]" />
            </button>
          ) : (
            <button
              onClick={handleRelight}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full border border-[#C7A45B]/60 text-xs font-button font-medium uppercase tracking-widest text-[#E6CB85] hover:bg-[#C7A45B]/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Relight Candles</span>
            </button>
          )}

          <span className="text-[11px] font-body text-[#C7A45B]/70 tracking-wide">
            {allBlownOut
              ? "Tap 'Relight Candles' to repeat, or proceed to the final dua"
              : "Tip: You can also tap individual candle flames to blow them out"}
          </span>
        </div>

        {/* REVEALED WISH BLESSING MESSAGE */}
        <AnimatePresence>
          {wishMade && allBlownOut && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 w-full max-w-md p-6 rounded-2xl bg-gradient-to-b from-[#123B2C]/90 to-[#080A09] border border-[#C7A45B] shadow-[0_12px_36px_rgba(0,0,0,0.8)] backdrop-blur-md"
            >
              <div className="flex items-center justify-center gap-2 mb-2 text-[11px] font-body font-medium uppercase tracking-wider text-[#C7A45B]">
                <HeartHandshake className="w-4 h-4 text-[#E6CB85]" />
                <span>Du'a for Your Heart's Wish</span>
              </div>

              <p className="text-lg sm:text-xl font-heading font-normal text-[#F4EBDD] leading-relaxed mb-3 italic">
                "{BIRTHDAY_DATA.cake.wishBlownMessage}"
              </p>

              <GoldFlourishDivider className="my-3" />

              <button
                onClick={onProceedToDua}
                className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-3 min-h-[46px] rounded-full bg-[#FAF5EE] text-[#080A09] text-xs font-button font-medium uppercase tracking-wider hover:bg-[#E6CB85] transition-colors shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
              >
                <span>Receive the Final Du'a</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
