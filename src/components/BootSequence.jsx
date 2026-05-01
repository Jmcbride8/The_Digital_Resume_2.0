import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "INITIALIZING SECURE BOOT SEQUENCE...",
  "AUTHENTICATING OPERATOR CREDENTIALS...",
  "VERIFYING CLEARANCE LEVEL: TS/SCI...",
  "DECRYPTING PERSONNEL FILE...",
  "ACCESS GRANTED // WELCOME, COMMANDER",
  "LOADING OPERATIVE DOSSIER...",
];

export default function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem("boot_shown")) {
      onComplete();
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < LINES.length) {
        setLines((prev) => [...prev, LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("boot_shown", "1");
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, 380);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            }}
          />
          {/* Center content */}
          <div className="relative z-10 w-full max-w-xl px-8">
            <div className="border border-primary/40 p-8 relative">
              {/* Corner cuts */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

              <p className="font-mono text-xs text-primary/50 tracking-widest mb-6">
                ◆ SECURE TERMINAL // CLEARANCE REQUIRED
              </p>

              <div className="space-y-2 min-h-[160px]">
                {lines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-mono text-sm tracking-wider"
                    style={{
                      color:
                        i === lines.length - 1
                          ? "hsl(82,70%,58%)"
                          : "hsl(82,70%,58%,0.6)",
                    }}
                  >
                    {i === lines.length - 1 ? "► " : "  "}
                    {line}
                    {i === lines.length - 1 && (
                      <span className="animate-pulse ml-1">▌</span>
                    )}
                  </motion.p>
                ))}
              </div>

              <div className="mt-6 h-1 bg-secondary relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(lines.length / LINES.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground mt-2 text-right">
                {Math.round((lines.length / LINES.length) * 100)}% LOADED
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}