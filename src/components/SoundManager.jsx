import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const SoundCtx = createContext({ play: () => {}, muted: true });
export const useSound = () => useContext(SoundCtx);

// Simple beep synthesizer — no external files needed
function createBeep(ctx, freq = 880, duration = 0.06, volume = 0.08) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "square";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

export function SoundProvider({ children }) {
  const [muted, setMuted] = useState(true); // starts muted — user opts in
  const audioCtx = useRef(null);

  const getCtx = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx.current;
  };

  const play = (type = "click") => {
    if (muted) return;
    const ctx = getCtx();
    if (type === "click") createBeep(ctx, 1200, 0.04, 0.06);
    if (type === "hover") createBeep(ctx, 880, 0.03, 0.03);
    if (type === "boot") {
      [440, 550, 660, 880].forEach((f, i) => {
        setTimeout(() => createBeep(ctx, f, 0.12, 0.08), i * 120);
      });
    }
  };

  return (
    <SoundCtx.Provider value={{ play, muted }}>
      {children}
      {/* Mute toggle — fixed bottom right */}
      <button
        onClick={() => setMuted((m) => !m)}
        className="fixed bottom-4 right-4 z-50 w-9 h-9 border border-primary/40 bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary transition-all"
        title={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </SoundCtx.Provider>
  );
}