import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Leadership",
    color: "border-primary/40 text-primary bg-primary/5",
    skills: [
      "Cross-functional Leadership",
      "Digital Transformation",
      "Change Management",
      "Product Strategy",
      "Agile Project Management",
      "Process Improvement",
      "Data-Driven Decision Making",
    ],
  },
  {
    label: "Business",
    color: "border-chart-2/40 text-chart-2 bg-chart-2/5",
    skills: [
      "Advanced Business Modelling",
      "Forecasting",
      "Data ETL Pipelines",
      "Product Roadmaps",
      "Six Sigma & Lean",
      "JIRA",
      "S&OP Planning",
    ],
  },
  {
    label: "Technical",
    color: "border-chart-4/40 text-chart-4 bg-chart-4/5",
    skills: [
      "SQL",
      "Power BI / Tableau",
      "Python / Flask",
      "Web Applications",
      "Azure & SQL Server",
      "Data Warehousing",
      "Linear Optimization",
      "SAP BI/BO",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Capabilities</h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.03 }}
                    className={`px-3 py-1.5 text-sm rounded-full border ${group.color} transition-all duration-300 hover:scale-105`}
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