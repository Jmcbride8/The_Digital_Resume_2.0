import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?";

export function useScramble(text, isInView, delay = 0) {
  const [displayed, setDisplayed] = useState({ chars: text, resolvedCount: text.length });
  const timerRef = useRef(null);
  const iterRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      iterRef.current = 0;
      const totalFrames = text.length * 5; // more frames = slower

      const animate = () => {
        const iter = iterRef.current;
        const resolved = Math.floor(iter / 5);

        const chars = text
          .split("")
          .map((char, i) => {
            if (char === " " || char === "\n") return char;
            if (i < resolved) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplayed({ chars, resolvedCount: resolved });
        iterRef.current += 1;

        if (iterRef.current <= totalFrames) {
          timerRef.current = setTimeout(animate, 40); // 40ms per frame ≈ 25fps, slow & readable
        } else {
          setDisplayed({ chars: text, resolvedCount: text.length });
        }
      };

      timerRef.current = setTimeout(animate, 0);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timerRef.current);
    };
  }, [isInView, text, delay]);

  return displayed;
}