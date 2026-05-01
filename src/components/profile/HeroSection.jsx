import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ChevronDown, Shield, Star } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_BG = "https://media.base44.com/images/public/69f42b9511a51fd215a41bde/f7a80edfe_generated_image.png";
const AVATAR = "https://media.base44.com/images/public/69f42b9511a51fd215a41bde/1e10132b5_generated_image.png";

function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className="font-mono text-primary">
      {displayed}
      {displayed.length < text.length && <span className="animate-pulse">▌</span>}
    </span>
  );
}

function HUDCorner({ position }) {
  const classes = {
    "tl": "top-0 left-0 border-t-2 border-l-2",
    "tr": "top-0 right-0 border-t-2 border-r-2",
    "bl": "bottom-0 left-0 border-b-2 border-l-2",
    "br": "bottom-0 right-0 border-b-2 border-r-2",
  };
  return (
    <div className={`absolute w-6 h-6 border-primary/60 ${classes[position]}`} />
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/75 to-background" />
      </div>

      {/* Tactical grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(82,55%,42%) 1px, transparent 1px), linear-gradient(90deg, hsl(82,55%,42%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Topo lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, hsl(82,55%,42%) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, hsl(82,55%,42%) 0%, transparent 50%)",
        }}
      />

      {/* HUD frame */}
      <div className="absolute inset-6 pointer-events-none">
        <HUDCorner position="tl" />
        <HUDCorner position="tr" />
        <HUDCorner position="bl" />
        <HUDCorner position="br" />
        {/* Top status bar */}
        <div className="absolute top-2 left-8 right-8 flex justify-between items-center">
          <span className="font-mono text-xs text-primary/60 tracking-widest">◆ CLASSIFIED // FOR OFFICIAL USE ONLY</span>
          <span className="font-mono text-xs text-primary/60 tracking-widest">SEC LVL: TS/SCI</span>
        </div>
        {/* Bottom status bar */}
        <div className="absolute bottom-2 left-8 right-8 flex justify-between items-center">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">OPERATOR: MCBRIDE, J.</span>
          <span className="font-mono text-xs text-muted-foreground tracking-widest">GRID: 34S DG 123 456</span>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rank/insignia badge */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-px w-16 bg-primary/40" />
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase">Digital Operations Command</span>
            <Shield className="w-5 h-5 text-primary" />
            <div className="h-px w-16 bg-primary/40" />
          </motion.div>

          {/* Avatar with tactical frame */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="absolute inset-0 rounded-none border-2 border-primary/50 rotate-45 scale-75" />
            <img
              src={AVATAR}
              alt="Jason McBride"
              className="w-full h-full object-cover border-2 border-primary/40"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary flex items-center justify-center">
              <Star className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
            </div>
          </motion.div>

          {/* Typewriter classification line */}
          <div className="font-mono text-xs tracking-widest mb-4 h-5">
            <TypewriterText text="// INITIALIZING PERSONNEL FILE... ACCESS GRANTED //" delay={400} />
          </div>

          {/* Name */}
          <h1
            className="text-6xl md:text-8xl font-display font-bold tracking-wider uppercase mb-2 flicker"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
          >
            Jason{" "}
            <span className="text-primary" style={{ textShadow: "0 0 30px hsl(82,55%,42%), 0 0 60px hsl(82,55%,42%,0.3)" }}>
              McBride
            </span>
          </h1>

          {/* MOS / specialty line */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-accent/60" />
            <p className="font-mono text-accent text-sm tracking-[0.35em] uppercase">
              MOS: Digital Transformation · Operator Class A
            </p>
            <div className="h-px w-8 bg-accent/60" />
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-6 mb-10 leading-relaxed font-sans tracking-wide">
            Deploying digital technologies to drive decisive organizational change.
            Strategic command of data, cloud, and process automation across global operations.
          </p>

          {/* Contact bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="mailto:jasonmcbride.mba@gmail.com" className="flex items-center gap-2 px-4 py-2 border border-primary/40 hover:bg-primary/10 hover:border-primary text-primary/80 hover:text-primary transition-all duration-200 font-mono text-xs tracking-wider uppercase">
              <Mail className="w-3 h-3" /> COMMS
            </a>
            <a href="tel:4086098558" className="flex items-center gap-2 px-4 py-2 border border-primary/40 hover:bg-primary/10 hover:border-primary text-primary/80 hover:text-primary transition-all duration-200 font-mono text-xs tracking-wider uppercase">
              <Phone className="w-3 h-3" /> (408) 609-8558
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-primary/40 hover:bg-primary/10 hover:border-primary text-primary/80 hover:text-primary transition-all duration-200 font-mono text-xs tracking-wider uppercase">
              <Linkedin className="w-3 h-3" /> LINKEDIN
            </a>
            <span className="flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground font-mono text-xs tracking-wider uppercase">
              <MapPin className="w-3 h-3" /> GOLETA, CA // FORWARD BASE
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}