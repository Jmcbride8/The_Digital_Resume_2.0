import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const SKILLS = [
  { label: "Digital\nTransformation", value: 95 },
  { label: "Data\nAnalytics", value: 90 },
  { label: "Product\nStrategy", value: 85 },
  { label: "Engineering\n& Dev", value: 78 },
  { label: "Lean/Six\nSigma", value: 88 },
  { label: "Change\nMgmt", value: 92 },
];

export default function SkillRadarChart() {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const duration = 1400;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      // ease out cubic
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const size = canvas.offsetWidth;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.38;
    const n = SKILLS.length;
    const angleStep = (Math.PI * 2) / n;

    ctx.clearRect(0, 0, size, size);

    const getPoint = (i, val, p = 1) => {
      const a = i * angleStep - Math.PI / 2;
      const r = (val / 100) * radius * p;
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    };

    // Grid rings
    [0.25, 0.5, 0.75, 1].forEach((scale) => {
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const [x, y] = getPoint(i, 100, scale);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = "hsla(82,70%,58%,0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Axis lines
    for (let i = 0; i < n; i++) {
      const [x, y] = getPoint(i, 100);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "hsla(82,70%,58%,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Filled polygon
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const [x, y] = getPoint(i, SKILLS[i].value, progress);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "hsla(82,70%,58%,0.12)";
    ctx.fill();
    ctx.strokeStyle = "hsla(82,70%,58%,0.8)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Vertices
    for (let i = 0; i < n; i++) {
      const [x, y] = getPoint(i, SKILLS[i].value, progress);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "hsl(82,70%,58%)";
      ctx.fill();
    }

    // Labels
    ctx.font = `bold 10px 'Share Tech Mono', monospace`;
    ctx.fillStyle = "hsla(80,10%,88%,0.75)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let i = 0; i < n; i++) {
      const a = i * angleStep - Math.PI / 2;
      const labelRadius = radius + 28;
      const lx = cx + Math.cos(a) * labelRadius;
      const ly = cy + Math.sin(a) * labelRadius;
      const parts = SKILLS[i].label.split("\n");
      parts.forEach((line, li) => {
        ctx.fillText(line, lx, ly + (li - (parts.length - 1) / 2) * 13);
      });
    }
  }, [progress]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="font-mono text-xs text-primary/60 tracking-[0.4em] uppercase mb-4">◆ CAPABILITY RADAR</p>
      <div className="relative w-full max-w-xs">
        <canvas ref={canvasRef} className="w-full aspect-square" />
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-2 mt-4">
        {SKILLS.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-sm shrink-0" />
            <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
              {s.label.replace("\n", " ")}
            </span>
            <span className="font-mono text-xs text-primary ml-auto">{Math.round(s.value * progress)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}