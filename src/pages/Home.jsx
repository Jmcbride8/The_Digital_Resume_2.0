import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "../components/profile/HeroSection";
import ImpactStats from "../components/profile/ImpactStats";
import ExperienceTimeline from "../components/profile/ExperienceTimeline";
import SkillsSection from "../components/profile/SkillsSection";
import AppsPortfolio from "../components/profile/AppsPortfolio";
import EducationSection from "../components/profile/EducationSection";
import FooterSection from "../components/profile/FooterSection";
import StatusTickerBar from "../components/StatusTickerBar";
import { SoundProvider } from "../components/SoundManager";
import MissionBriefing from "../components/MissionBriefing";
import AnalystView from "./AnalystView";

export default function Home() {
  const [mode, setMode] = useState(null); // null | "operative" | "analyst"

  const handleSelect = (selectedMode) => {
    setMode(selectedMode);
  };

  const handleSwitch = () => {
    setMode(null);
  };

  return (
    <SoundProvider>
      <AnimatePresence mode="wait">
        {mode === null && (
          <MissionBriefing key="briefing" onSelect={handleSelect} />
        )}
      </AnimatePresence>

      {mode === "operative" && (
        <>
          <StatusTickerBar />
          <div className="min-h-screen bg-background text-foreground font-sans pt-7">
            {/* Switch protocol button */}
            <div className="fixed bottom-16 left-4 z-50">
              <button
                onClick={handleSwitch}
                className="font-mono text-xs px-3 py-1.5 border border-primary/20 text-primary/40 hover:text-primary hover:border-primary/60 transition-all tracking-widest bg-background"
              >
                ⇄ SWITCH PROTOCOL
              </button>
            </div>
            <HeroSection />
            <ImpactStats />
            <ExperienceTimeline />
            <SkillsSection />
            <AppsPortfolio />
            <EducationSection />
            <FooterSection />
          </div>
        </>
      )}

      {mode === "analyst" && (
        <AnalystView key="analyst" onSwitch={handleSwitch} />
      )}
    </SoundProvider>
  );
}