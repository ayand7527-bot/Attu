/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { NavigationControls } from "./components/NavigationControls";
import { CinematicOpening } from "./components/CinematicOpening";
import { BirthdayHero } from "./components/BirthdayHero";
import { InteractiveGiftBox } from "./components/InteractiveGiftBox";
import { UrduLetterCard } from "./components/UrduLetterCard";
import { EmeraldCakeMoment } from "./components/EmeraldCakeMoment";
import { FinalDuaScreen } from "./components/FinalDuaScreen";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("opening");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll listener using IntersectionObserver to update active tab
  useEffect(() => {
    const sectionIds = ["opening", "hero", "gift", "letter", "cake", "dua"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveSection(id);
            }
          });
        },
        { threshold: [0.3, 0.6] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080A09] text-[#F4EBDD] font-body selection:bg-[#C7A45B]/30 selection:text-[#FAF5EE] overflow-x-hidden antialiased">
      {/* Background Subtle Islamic Geometric Dot Grid */}
      <div className="fixed inset-0 bg-islamic-pattern opacity-40 pointer-events-none z-0" />

      {/* Floating Gold Dust Particles */}
      <ParticleCanvas density={36} speedFactor={0.4} />

      {/* Header and Mobile Thumb Navigation */}
      <NavigationControls
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Experience Flow */}
      <main className="relative z-10 w-full flex flex-col">
        {/* Section 1: Cinematic Opening */}
        <CinematicOpening onOpenSurprise={() => scrollToSection("hero")} />

        {/* Section 2: Birthday Hero */}
        <BirthdayHero onProceedToGift={() => scrollToSection("gift")} />

        {/* Section 3: Interactive Gift Box */}
        <InteractiveGiftBox onProceedToLetter={() => scrollToSection("letter")} />

        {/* Section 4: Urdu Birthday Letter */}
        <UrduLetterCard onProceedToCake={() => scrollToSection("cake")} />

        {/* Section 5: Birthday Cake Moment */}
        <EmeraldCakeMoment onProceedToDua={() => scrollToSection("dua")} />

        {/* Section 6: Final Dua Screen */}
        <FinalDuaScreen onReplay={() => scrollToSection("opening")} />
      </main>
    </div>
  );
}
