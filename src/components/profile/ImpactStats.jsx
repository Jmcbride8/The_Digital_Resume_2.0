import { motion } from "framer-motion";

const stats = [
  { value: "$200M→$3B", label: "Revenue Growth" },
  { value: "85%", label: "Faster S&OP" },
  { value: "$500K", label: "Annual Savings" },
  { value: "40%", label: "Process Time Cut" },
];

export default function ImpactStats() {
  return (
    <section className="py-20 px-6 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}