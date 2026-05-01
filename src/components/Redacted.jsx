import { useState } from "react";

/**
 * Renders text as [REDACTED] bars that reveal on hover.
 * Usage: <Redacted>some sensitive text</Redacted>
 */
export default function Redacted({ children, className = "" }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      className={`relative inline cursor-pointer transition-all duration-300 ${className}`}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      title="HOVER TO DECLASSIFY"
    >
      {/* Revealed text */}
      <span
        className="transition-opacity duration-300"
        style={{ opacity: revealed ? 1 : 0 }}
      >
        {children}
      </span>

      {/* Redaction bar */}
      {!revealed && (
        <span
          className="absolute inset-y-0 left-0 right-0 flex items-center"
          style={{ pointerEvents: "none" }}
        >
          <span
            className="inline-block w-full h-[1.1em] bg-foreground/90 font-mono text-xs text-background/0 select-none px-1 relative overflow-hidden"
            style={{ minWidth: "4em" }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-widest"
              style={{ color: "rgba(0,0,0,0.35)", fontSize: "9px" }}
            >
              ██████
            </span>
          </span>
        </span>
      )}
    </span>
  );
}