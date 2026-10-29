/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BIRTHDAY_DATA } from "../config/birthdayData";
import { CornerFlourish, GoldFlourishDivider, IslamicStar } from "./IslamicGeometry";
import { soundManager } from "../utils/audio";
import { Mail, Check, Copy, Cake, BookOpen } from "lucide-react";

interface Props {
  onProceedToCake: () => void;
}

export const UrduLetterCard: React.FC<Props> = ({ onProceedToCake }) => {
  const [isRevealed, setIsRevealed] = useState(true); // Accessible by default, but has reveal control
  const [scriptMode, setScriptMode] = useState<"roman" | "nastaliq" | "both">("both");
  const [copied, setCopied] = useState(false);

  const handleReveal = () => {
    soundManager.playChime([659.25, 783.99, 1046.5]);
    setIsRevealed(true);
  };

  const handleCopy = () => {
    const textToCopy = BIRTHDAY_DATA.urduLetter.romanUrdu.join("\n\n");
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="letter"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#080A09] text-center overflow-hidden"
      aria-label="Heartfelt Urdu Birthday Letter"
    >
      {/* Background radial lights */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#123B2C]/25 blur-[140px] pointer-events-none top-1/4 right-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto w-full flex flex-col items-center">
        {/* Header Metadata */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-body font-medium uppercase tracking-[0.2em] text-[#C7A45B]">
            <span>Part 04</span>
            <span aria-hidden="true">·</span>
            <span>Khuloos-e-Dil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-light text-[#F4EBDD] tracking-normal">
            {BIRTHDAY_DATA.urduLetter.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C7A45B]/90 font-body font-normal">
            {BIRTHDAY_DATA.urduLetter.subtitle}
          </p>
        </div>

        {/* Reveal Button if user wants to re-trigger reveal animation */}
        {!isRevealed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="my-8"
          >
            <button
              onClick={handleReveal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#123B2C] border-2 border-[#C7A45B] text-[#F4EBDD] text-sm sm:text-base font-button font-medium tracking-wider shadow-[0_8px_30px_rgba(199,164,91,0.25)] hover:bg-[#1A4F3B] hover:border-[#E6CB85] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
            >
              <Mail className="w-5 h-5 text-[#C7A45B]" />
              <span>Read My Letter</span>
            </button>
            <p className="text-xs font-body text-[#F4EBDD]/60 mt-3">
              Written with sincere intentions and pure prayers
            </p>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* Script Toggle Tabs */}
              <div className="flex items-center justify-center gap-1 mb-4 p-1 rounded-full bg-[#101412] border border-[#C7A45B]/30 max-w-xs mx-auto">
                <button
                  onClick={() => setScriptMode("both")}
                  className={`px-3 py-1.5 text-xs font-button rounded-full transition-colors min-h-[36px] cursor-pointer ${
                    scriptMode === "both"
                      ? "bg-[#C7A45B] text-[#080A09] font-medium"
                      : "text-[#F4EBDD]/70 hover:text-[#F4EBDD]"
                  }`}
                >
                  Both Scripts
                </button>
                <button
                  onClick={() => setScriptMode("nastaliq")}
                  className={`px-3 py-1.5 text-xs font-button rounded-full transition-colors min-h-[36px] cursor-pointer ${
                    scriptMode === "nastaliq"
                      ? "bg-[#C7A45B] text-[#080A09] font-medium"
                      : "text-[#F4EBDD]/70 hover:text-[#F4EBDD]"
                  }`}
                >
                  اردو Nastaliq
                </button>
                <button
                  onClick={() => setScriptMode("roman")}
                  className={`px-3 py-1.5 text-xs font-button rounded-full transition-colors min-h-[36px] cursor-pointer ${
                    scriptMode === "roman"
                      ? "bg-[#C7A45B] text-[#080A09] font-medium"
                      : "text-[#F4EBDD]/70 hover:text-[#F4EBDD]"
                  }`}
                >
                  Roman Urdu
                </button>
              </div>

              {/* The Ivory Paper Card */}
              <div className="relative mx-auto w-full max-w-xl p-6 sm:p-10 rounded-2xl bg-[#F4EBDD] text-[#080A09] shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 border-[#C7A45B]/80 overflow-hidden text-left">
                {/* Vintage Corner Flourishes */}
                <CornerFlourish position="top-left" />
                <CornerFlourish position="top-right" />
                <CornerFlourish position="bottom-left" />
                <CornerFlourish position="bottom-right" />

                {/* Card Watermark Geometry */}
                <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                  <IslamicStar size={160} />
                </div>

                {/* Card Header Topline */}
                <div className="flex items-center justify-between pb-4 border-b border-[#C7A45B]/30 mb-6">
                  <div className="flex items-center gap-2">
                    <IslamicStar size={20} className="text-[#C7A45B]" />
                    <span className="text-[11px] font-body font-medium tracking-wider text-[#8F7236] uppercase">
                      Bismillah · Ba-Izzat Dua
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-heading font-normal text-[#8F7236]">
                    {BIRTHDAY_DATA.recipient.birthDateFormatted}
                  </span>
                </div>

                {/* LETTER BODY CONTENT */}
                <div className="space-y-6">
                  {/* Nastaliq Urdu (if selected or both) */}
                  {(scriptMode === "nastaliq" || scriptMode === "both") && (
                    <div
                      dir="rtl"
                      className="font-urdu text-right text-lg sm:text-xl text-[#123B2C] leading-[2.7] tracking-normal select-text"
                    >
                      {BIRTHDAY_DATA.urduLetter.nastaliqUrdu.map((para, idx) => (
                        <p key={idx} className="mb-4">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Divider if both */}
                  {scriptMode === "both" && (
                    <div className="relative my-6 flex items-center justify-center">
                      <div className="h-[1px] w-full bg-[#C7A45B]/30" />
                      <span className="absolute bg-[#F4EBDD] px-3 text-[11px] font-body font-medium uppercase tracking-wider text-[#8F7236]">
                        Roman Urdu
                      </span>
                    </div>
                  )}

                  {/* Roman Urdu */}
                  {(scriptMode === "roman" || scriptMode === "both") && (
                    <div className="font-body text-sm sm:text-base text-[#1A2520] leading-relaxed space-y-4 font-normal">
                      {BIRTHDAY_DATA.urduLetter.romanUrdu.map((para, idx) => (
                        <p key={idx} className={idx === 0 ? "font-medium text-base sm:text-lg text-[#123B2C]" : ""}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sign-off & Sincere Closing */}
                <div className="mt-8 pt-4 border-t border-[#C7A45B]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="space-y-0.5">
                    <p className="text-xs font-body font-medium tracking-wide text-[#8F7236] uppercase">
                      {BIRTHDAY_DATA.urduLetter.signature}
                    </p>
                    <p className="text-[11px] font-body text-[#080A09]/70 font-normal">
                      Always wishing you endless peace and smiles
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C7A45B]/60 text-xs font-button font-medium text-[#8F7236] hover:bg-[#C7A45B]/15 transition-colors cursor-pointer min-h-[44px]"
                    title="Copy letter to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Words"}</span>
                  </button>
                </div>
              </div>

              {/* Gentle English Translation / Summary Box */}
              <div className="mt-6 mx-auto max-w-xl p-4 rounded-xl bg-[#101412]/80 border border-[#C7A45B]/25 text-left text-xs sm:text-sm text-[#F4EBDD]/80 leading-relaxed">
                <div className="flex items-center gap-2 mb-2 text-[#C7A45B] font-body font-medium text-xs uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>English Reflection</span>
                </div>
                <p className="font-body font-normal text-xs sm:text-sm text-[#F4EBDD]/90 leading-relaxed">
                  {BIRTHDAY_DATA.urduLetter.englishSummary}
                </p>
              </div>

              {/* Forward to Birthday Cake */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={onProceedToCake}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full bg-[#123B2C] hover:bg-[#184E3B] border border-[#C7A45B] text-[#F4EBDD] text-xs sm:text-sm font-button font-medium tracking-wider shadow-lg active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
                >
                  <Cake className="w-4 h-4 text-[#C7A45B]" />
                  <span>Light Attu's Birthday Cake</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
