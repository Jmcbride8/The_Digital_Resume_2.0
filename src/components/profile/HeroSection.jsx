import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ChevronDown } from "lucide-react";

const HERO_BG = "/__generated__/img_ab58d3b22146.png";
const AVATAR = "/__generated__/img_12f6276b7a8b.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={AVATAR}
            alt="Jason McBride"
            className="w-28 h-28 rounded-full mx-auto mb-8 border-2 border-primary/30 shadow-lg shadow-primary/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />

          <motion.p
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Digital Transformation Leader
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Jason{" "}
            <span className="text-primary">McBride</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Using digital technologies to drive meaningful change in organizations large and small —
            blending technical expertise with strategic vision to transform how businesses operate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:jasonmcbride.mba@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Mail className="w-4 h-4" /> jasonmcbride.mba@gmail.com
            </a>
            <a href="tel:4086098558" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Phone className="w-4 h-4" /> (408) 609-8558
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-border">
              <MapPin className="w-4 h-4" /> Goleta, CA
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}