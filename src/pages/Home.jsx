import HeroSection from "../components/profile/HeroSection";
import ImpactStats from "../components/profile/ImpactStats";
import ExperienceTimeline from "../components/profile/ExperienceTimeline";
import SkillsSection from "../components/profile/SkillsSection";
import AppsPortfolio from "../components/profile/AppsPortfolio";
import EducationSection from "../components/profile/EducationSection";
import FooterSection from "../components/profile/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      <ImpactStats />
      <ExperienceTimeline />
      <SkillsSection />
      <AppsPortfolio />
      <EducationSection />
      <FooterSection />
    </div>
  );
}