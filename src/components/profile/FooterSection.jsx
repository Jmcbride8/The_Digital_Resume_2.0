import { Mail, Linkedin, Radio } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";

export default function FooterSection() {
  return (
    <footer className="py-16 px-6 border-t-2 border-primary/30 relative overflow-hidden">
      {/* Background stripes */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, hsl(82,55%,42%) 0px, hsl(82,55%,42%) 2px, transparent 2px, transparent 20px)"
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 bg-primary/20" />
          <Radio className="w-5 h-5 text-primary" />
          <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase">Open Channel</span>
          <Radio className="w-5 h-5 text-primary" />
          <div className="h-px flex-1 bg-primary/20" />
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
          <ScrambleText text="Ready to Deploy" />
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto font-sans">
          Looking to drive digital transformation in your organization?<br />
          Establish comms. Let's execute.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:jasonmcbride.mba@gmail.com"
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display font-bold uppercase tracking-widest text-sm hover:bg-primary/80 transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Mail className="w-4 h-4" /> Establish Comms
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 border-2 border-primary/40 font-display font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-all"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} MCBRIDE, JASON // ALL RIGHTS RESERVED // BUILT ON BASE44
          </p>
          <p className="font-mono text-xs text-muted-foreground/40 tracking-widest mt-1">
            THIS DOCUMENT IS UNCLASSIFIED // FOR OFFICIAL USE ONLY
          </p>
        </div>
      </div>
    </footer>
  );
}