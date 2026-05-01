import { useEffect, useRef } from "react";

export default function RadarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animId;
    let angle = 0;
    const blips = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate random blips
    for (let i = 0; i < 12; i++) {
      const r = Math.random() * 0.85 + 0.05;
      const a = Math.random() * Math.PI * 2;
      blips.push({ r, a, alpha: 0, active: false });
    }

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.42;

      ctx.clearRect(0, 0, w, h);

      // Outer circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "hsla(82,70%,58%,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner rings
      [0.6, 0.35].forEach((scale) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * scale, 0, Math.PI * 2);
        ctx.strokeStyle = "hsla(82,70%,58%,0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Cross hairs
      ctx.strokeStyle = "hsla(82,70%,58%,0.07)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.stroke();

      // Sweep gradient
      const sweepGrad = ctx.createConicalGradient
        ? null
        : null; // fallback: manual arc fill

      // Draw sweep as filled arc
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      const sweepAngle = Math.PI / 2.5;
      const grad = ctx.createLinearGradient(0, 0, radius, 0);
      grad.addColorStop(0, "hsla(82,70%,58%,0.0)");
      grad.addColorStop(1, "hsla(82,70%,58%,0.18)");

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, -sweepAngle, 0);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(radius, 0);
      ctx.strokeStyle = "hsla(82,70%,58%,0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Activate blips when swept
      blips.forEach((blip) => {
        const blipAngle = blip.a;
        const diff = ((angle - blipAngle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        if (diff < 0.1) {
          blip.alpha = 1;
          blip.active = true;
        }
        if (blip.active) {
          blip.alpha = Math.max(0, blip.alpha - 0.006);
        }

        if (blip.alpha > 0) {
          const bx = cx + Math.cos(blip.a) * blip.r * radius;
          const by = cy + Math.sin(blip.a) * blip.r * radius;
          ctx.beginPath();
          ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(82,70%,58%,${blip.alpha})`;
          ctx.fill();

          // Glow ring
          ctx.beginPath();
          ctx.arc(bx, by, 5, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(82,70%,58%,${blip.alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      angle += 0.008;
      if (angle > Math.PI * 2) angle -= Math.PI * 2;

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}