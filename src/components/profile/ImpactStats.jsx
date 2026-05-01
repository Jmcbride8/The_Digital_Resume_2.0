import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

const stats = [
  { value: "$200M→$3B", label: "Revenue Growth", code: "STAT-01" },
  { value: "85%", label: "Faster S&OP", code: "STAT-02" },
  { value: "$500K", label: "Annual Savings", code: "STAT-03" },
  { value: "40%", label: "Process Time Cut", code: "STAT-04" },
];

export default function ImpactStats() {
  return (
    <section className="py-16 px-6 border-y border-primary/20 bg-secondary/50 relative overflow-hidden">
      {/* Tactical background accent */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, hsl(82,55%,42%) 0px, hsl(82,55%,42%) 1px, transparent 1px, transparent 8px)"
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-primary/60 tracking-[0.4em] uppercase">◆ MISSION IMPACT ASSESSMENT ◆</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative p-4 border border-primary/20 bg-background/50"
            >

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/60" />

              <div className="font-mono text-xs text-muted-foreground tracking-widest mb-2">{stat.code}</div>
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1" style={{ fontFamily: "'Oswald', sans-serif", textShadow: "0 0 20px hsl(82,55%,42%,0.4)" }}>
                <ScrambleText text={stat.value} delay={i * 120} />
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
                <ScrambleText text={stat.label} delay={i * 120 + 100} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}