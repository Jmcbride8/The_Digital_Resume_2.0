import { useRef } from "react";
import { useInView } from "framer-motion";
import { useScramble } from "@/hooks/useScramble";

export default function ScrambleText({ text, className = "", style = {}, delay = 0, as: Tag = "span" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const scrambled = useScramble(String(text), isInView, delay);

  return (
    <Tag ref={ref} className={className} style={style}>
      {scrambled}
    </Tag>
  );
}