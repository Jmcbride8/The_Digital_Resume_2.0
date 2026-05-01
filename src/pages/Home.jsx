import { useState } from "react";
import HeroSection from "../components/profile/HeroSection";
import ImpactStats from "../components/profile/ImpactStats";
import ExperienceTimeline from "../components/profile/ExperienceTimeline";
import SkillsSection from "../components/profile/SkillsSection";
import AppsPortfolio from "../components/profile/AppsPortfolio";
import EducationSection from "../components/profile/EducationSection";
import FooterSection from "../components/profile/FooterSection";
import BootSequence from "../components/BootSequence";
import StatusTickerBar from "../components/StatusTickerBar";
import { SoundProvider } from "../components/SoundManager";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <SoundProvider>
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      {booted && (
        <>
          <StatusTickerBar />
          <div className="min-h-screen bg-background text-foreground font-sans pt-7">
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
    </SoundProvider>
  );
}