import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

const skillGroups = [
  {
    label: "Command & Leadership",
    code: "CAT-A",
    color: "border-primary/40 text-primary bg-primary/5 hover:bg-primary/10",
    skills: [
      "Cross-functional Command",
      "Digital Transformation",
      "Change Management",
      "Product Strategy",
      "Agile Operations",
      "Process Doctrine",
      "Data-Driven Decisions",
    ],
  },
  {
    label: "Intelligence & Analysis",
    code: "CAT-B",
    color: "border-accent/40 text-accent bg-accent/5 hover:bg-accent/10",
    skills: [
      "Advanced Business Modelling",
      "Demand Forecasting",
      "Data ETL Pipelines",
      "Product Roadmaps",
      "Six Sigma · Lean",
      "JIRA",
      "S&OP Planning",
    ],
  },
  {
    label: "Technical Arsenal",
    code: "CAT-C",
    color: "border-chart-4/40 text-chart-4 bg-chart-4/5 hover:bg-chart-4/10",
    skills: [
      "SQL",
      "Power BI / Tableau",
      "Python / Flask",
      "Web Applications",
      "Azure / SQL Server",
      "Data Warehousing",
      "Linear Optimization",
      "SAP BI/BO",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-6 bg-secondary/40 relative overflow-hidden">
      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, hsl(82,55%,42%) 0px, hsl(82,55%,42%) 1px, transparent 1px, transparent 12px)"
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary/60 tracking-[0.4em] uppercase mb-3">◆ CAPABILITY BRIEF // UNCLASSIFIED</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <ScrambleText text="Tactical Skillset" />
          </h2>
          <div className="h-px w-24 bg-primary mt-3" />
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">{group.code}</span>
                <h3 className="font-display font-bold uppercase tracking-widest text-sm text-foreground/80" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  <ScrambleText text={group.label} delay={i * 100} />
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.04 }}
                    className={`px-3 py-1.5 text-sm border font-mono tracking-wider transition-all duration-200 cursor-default ${group.color}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}