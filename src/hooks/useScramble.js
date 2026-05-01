import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?/\\|[]{}";
const NUM_CHARS = "0123456789@#$%";

function getCharSet(text) {
  const hasLetters = /[a-zA-Z]/.test(text);
  const hasNums = /[0-9]/.test(text);
  if (hasLetters && !hasNums) return CHARS;
  if (!hasLetters && hasNums) return NUM_CHARS;
  return CHARS;
}

export function useScramble(text, isInView, delay = 0) {
  const [displayed, setDisplayed] = useState(text);
  const frameRef = useRef(null);
  const iterRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      iterRef.current = 0;
      const chars = getCharSet(text);
      const totalFrames = text.length * 3;

      const animate = () => {
        const iter = iterRef.current;
        const resolved = iter / 3;

        const next = text
          .split("")
          .map((char, i) => {
            if (char === " " || char === "\n") return char;
            if (i < resolved) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayed(next);
        iterRef.current += 1;

        if (iterRef.current <= totalFrames) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayed(text);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, text, delay]);

  return displayed;
}