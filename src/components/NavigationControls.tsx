/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { soundManager } from "../utils/audio";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

interface Props {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const SECTIONS = [
  { id: "opening", label: "Opening" },
  { id: "hero", label: "Celebration" },
  { id: "gift", label: "Keepsake" },
  { id: "letter", label: "Letter" },
  { id: "cake", label: "Cake Wish" },
  { id: "dua", label: "Dua" },
];

export const NavigationControls: React.FC<Props> = ({ activeSection, onNavigate }) => {
  const [muted, setMuted] = useState(soundManager.getMuted());

  const handleToggleSound = () => {
    const nextMuted = soundManager.toggleMute();
    setMuted(nextMuted);
    if (!nextMuted) {
      soundManager.playChime([659.25, 783.99]);
    }
  };

  return (
    <>
      {/* DESKTOP & MOBILE TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#080A09]/85 backdrop-blur-md border-b border-[#C7A45B]/20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Single line) */}
          <button
            onClick={() => onNavigate("opening")}
            className="flex items-center gap-2 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7A45B] rounded"
          >
            <div className="w-2 h-2 rotate-45 bg-[#C7A45B] group-hover:scale-125 transition-transform" />
            <span className="font-heading font-normal tracking-wide text-sm sm:text-base text-[#F4EBDD] whitespace-nowrap shrink-0">
              Attu · October 30
            </span>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Experience chapters"
            className="hidden md:flex items-center gap-6 text-xs font-body font-medium tracking-wide text-[#F4EBDD]/75"
          >
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => onNavigate(sec.id)}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#E6CB85] cursor-pointer py-1 font-button ${
                  activeSection === sec.id
                    ? "text-[#C7A45B] font-semibold border-b border-[#C7A45B]"
                    : ""
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Audio Sound Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleToggleSound}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C7A45B]/40 hover:border-[#C7A45B] text-xs font-button font-medium text-[#F4EBDD] bg-[#123B2C]/40 hover:bg-[#123B2C]/80 transition-colors min-h-[38px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
              aria-label={muted ? "Unmute celebration chimes" : "Mute celebration chimes"}
            >
              {muted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#C7A45B]/60" />
                  <span className="hidden sm:inline text-[11px] font-body text-[#F4EBDD]/70">Chimes Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#C7A45B]" />
                  <span className="hidden sm:inline text-[11px] font-body text-[#E6CB85]">Sound On</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE THUMB NAVIGATION BAR (Bottom docked, strictly under 15% viewport height) */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm px-2 py-1.5 rounded-full bg-[#101412]/90 backdrop-blur-lg border border-[#C7A45B]/40 shadow-[0_8px_24px_rgba(0,0,0,0.8)] flex items-center justify-between"
      >
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className={`flex-1 py-1.5 px-1 rounded-full text-[10px] font-body font-medium transition-all text-center min-h-[44px] flex flex-col items-center justify-center cursor-pointer ${
                isActive
                  ? "bg-[#123B2C] text-[#E6CB85] shadow border border-[#C7A45B]/50 font-semibold"
                  : "text-[#F4EBDD]/65 hover:text-[#F4EBDD]"
              }`}
            >
              <span>{sec.label}</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#C7A45B] mt-0.5" />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};
