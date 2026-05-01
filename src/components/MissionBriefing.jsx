import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionBriefing({ onSelect }) {
  const [phase, setPhase] = useState("boot"); // boot | select
  const [lines, setLines] = useState([]);
  const [hovering, setHovering] = useState(null);

  const BOOT_LINES = [
    "ESTABLISHING SECURE CONNECTION...",
    "IDENTITY VERIFICATION IN PROGRESS...",
    "CLEARANCE CONFIRMED // EYES ONLY",
    "SELECT YOUR ACCESS PROTOCOL:",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase("select"), 500);
      }
    }, 420);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (mode) => {
    sessionStorage.setItem("site_mode", mode);
    sessionStorage.setItem("boot_shown", "1");
    onSelect(mode);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: "hsl(80,15%,3%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(82,70%,58%) 1px, transparent 1px), linear-gradient(90deg, hsl(82,70%,58%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl px-6">
        {/* Terminal header */}
        <div className="border border-primary/30 p-8 relative mb-8">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

          <p className="font-mono text-xs text-primary/40 tracking-widest mb-6 uppercase">
            ◆ Central Intelligence Agency // Secure Access Terminal
          </p>

          <div className="space-y-2 min-h-[100px]">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-sm tracking-wider"
                style={{
                  color:
                    i === lines.length - 1
                      ? "hsl(82,70%,58%)"
                      : "hsl(82,70%,40%)",
                }}
              >
                {i === lines.length - 1 ? "► " : "  "}
                {line}
                {i === lines.length - 1 && phase === "boot" && (
                  <span className="animate-pulse ml-1">▌</span>
                )}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Selection cards */}
        <AnimatePresence>
          {phase === "select" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* OPERATIVE */}
              <motion.button
                onClick={() => handleSelect("operative")}
                onMouseEnter={() => setHovering("operative")}
                onMouseLeave={() => setHovering(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-left p-6 border relative overflow-hidden transition-all duration-300"
                style={{
                  borderColor:
                    hovering === "operative"
                      ? "hsl(82,70%,58%)"
                      : "hsl(82,70%,25%)",
                  background:
                    hovering === "operative"
                      ? "hsl(82,70%,58%,0.07)"
                      : "hsl(80,15%,5%)",
                }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

                <div className="font-mono text-xs text-primary/50 tracking-widest mb-3">
                  PROTOCOL // ALPHA-7
                </div>
                <div
                  className="font-display text-3xl font-bold uppercase tracking-widest mb-2"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    color:
                      hovering === "operative"
                        ? "hsl(82,70%,62%)"
                        : "hsl(82,70%,50%)",
                    textShadow:
                      hovering === "operative"
                        ? "0 0 20px hsl(82,70%,58%,0.5)"
                        : "none",
                  }}
                >
                  Operative
                </div>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  FIELD OPERATIONS VIEW<br />
                  Tactical HUD · Combat-ready interface<br />
                  Classified for field personnel
                </p>
                <div className="mt-4 font-mono text-xs text-primary/60 tracking-widest">
                  {hovering === "operative" ? "[ ENTER ►]" : "[ STAND BY ]"}
                </div>
              </motion.button>

              {/* ANALYST */}
              <motion.button
                onClick={() => handleSelect("analyst")}
                onMouseEnter={() => setHovering("analyst")}
                onMouseLeave={() => setHovering(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-left p-6 border relative overflow-hidden transition-all duration-300"
                style={{
                  borderColor:
                    hovering === "analyst"
                      ? "hsl(36,90%,50%)"
                      : "hsl(36,90%,20%)",
                  background:
                    hovering === "analyst"
                      ? "hsl(36,90%,50%,0.07)"
                      : "hsl(80,15%,5%)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
                  style={{ borderColor: "hsl(36,90%,50%)" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
                  style={{ borderColor: "hsl(36,90%,50%)" }}
                />

                <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "hsl(36,90%,35%)" }}>
                  PROTOCOL // BRAVO-3
                </div>
                <div
                  className="font-display text-3xl font-bold uppercase tracking-widest mb-2"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    color:
                      hovering === "analyst"
                        ? "hsl(36,90%,55%)"
                        : "hsl(36,90%,42%)",
                    textShadow:
                      hovering === "analyst"
                        ? "0 0 20px hsl(36,90%,50%,0.5)"
                        : "none",
                  }}
                >
                  Analyst
                </div>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  INTELLIGENCE VIEW<br />
                  CIA dossier · Case file format<br />
                  Restricted to intelligence community
                </p>
                <div
                  className="mt-4 font-mono text-xs tracking-widest"
                  style={{ color: hovering === "analyst" ? "hsl(36,90%,55%)" : "hsl(36,90%,30%)" }}
                >
                  {hovering === "analyst" ? "[ ENTER ►]" : "[ STAND BY ]"}
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="font-mono text-xs text-muted-foreground/40 text-center mt-8 tracking-widest">
          UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE // 18 U.S.C. § 1030
        </p>
      </div>
    </motion.div>
  );
}