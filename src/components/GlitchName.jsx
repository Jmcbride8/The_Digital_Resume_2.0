import { useEffect, useState, useRef } from "react";

export default function GlitchName({ children, className = "", style = {} }) {
  const [glitching, setGlitching] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const schedule = () => {
      // Random interval between 4–12 seconds
      const delay = 4000 + Math.random() * 8000;
      timerRef.current = setTimeout(() => {
        setGlitching(true);
        setTimeout(() => {
          setGlitching(false);
          schedule();
        }, 500);
      }, delay);
    };
    schedule();
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <span
      className={`relative inline-block ${className} ${glitching ? "glitch-active" : ""}`}
      style={style}
    >
      {children}
      {glitching && (
        <>
          <span
            className="absolute inset-0 pointer-events-none select-none"
            aria-hidden
            style={{
              color: "#ff003c",
              clipPath: "inset(20% 0 60% 0)",
              transform: `translateX(${Math.random() > 0.5 ? 3 : -3}px)`,
              opacity: 0.8,
            }}
          >
            {children}
          </span>
          <span
            className="absolute inset-0 pointer-events-none select-none"
            aria-hidden
            style={{
              color: "#00e5ff",
              clipPath: "inset(60% 0 10% 0)",
              transform: `translateX(${Math.random() > 0.5 ? -4 : 4}px)`,
              opacity: 0.8,
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}