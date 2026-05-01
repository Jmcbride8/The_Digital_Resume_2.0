import { useEffect, useRef, useState } from "react";
import { Radio } from "lucide-react";

const ITEMS = [
  "STATUS: ONLINE",
  "UPTIME: 12Y 4M",
  "THREAT LEVEL: ELEVATED",
  "LOCATION: GOLETA, CA",
  "CLEARANCE: TS/SCI",
  "OPERATOR: MCBRIDE, J.",
  "MISSION: ACTIVE",
  "SIGNAL: STRONG",
  "ENCRYPTION: AES-256",
  "LAST SYNC: NOW",
];

function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return time.toLocaleTimeString("en-US", { hour12: false });
}

export default function StatusTickerBar() {
  const clock = useClock();
  const text = ITEMS.join("  //  ") + "  //  ";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-7 bg-background/95 border-b border-primary/30 flex items-center overflow-hidden backdrop-blur-sm"
      style={{ backdropFilter: "blur(4px)" }}
    >
      {/* Left badge */}
      <div className="shrink-0 flex items-center gap-2 px-3 border-r border-primary/30 h-full bg-primary/10">
        <Radio className="w-3 h-3 text-primary animate-pulse" />
        <span className="font-mono text-xs text-primary tracking-widest whitespace-nowrap">
          SYS
        </span>
      </div>

      {/* Scrolling ticker */}
      <div className="flex-1 overflow-hidden relative">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "ticker 30s linear infinite",
          }}
        >
          {[text, text].map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs text-primary/70 tracking-widest px-4"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right clock */}
      <div className="shrink-0 flex items-center gap-2 px-3 border-l border-primary/30 h-full bg-primary/10">
        <span className="font-mono text-xs text-primary tracking-widest whitespace-nowrap">
          {clock}
        </span>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}