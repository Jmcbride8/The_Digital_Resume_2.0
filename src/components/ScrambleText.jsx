import { useRef } from "react";
import { useInView } from "framer-motion";
import { useScramble } from "@/hooks/useScramble";

export default function ScrambleText({ text, className = "", style = {}, delay = 0, as: Tag = "span" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { chars, resolvedCount } = useScramble(String(text), isInView, delay);

  // Render resolved chars in full color, scrambled chars in muted/dimmed style
  const parts = chars.split("").map((char, i) => {
    const isResolved = i < resolvedCount || char === " ";
    return (
      <span
        key={i}
        style={{
          opacity: isResolved ? 1 : 0.45,
          color: isResolved ? undefined : "hsl(82,55%,42%)",
        }}
      >
        {char}
      </span>
    );
  });

  return (
    <Tag ref={ref} className={className} style={style}>
      {parts}
    </Tag>
  );
}