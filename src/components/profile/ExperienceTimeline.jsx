import { motion } from "framer-motion";
import { Building2, TrendingUp, Database, BarChart3, Layers, Cog } from "lucide-react";

const experiences = [
  {
    company: "Toshiba → KIOXIA",
    subtitle: "Spun off 2018 · $5B IPO Dec 2024",
    location: "San Jose, CA",
    roles: [
      {
        title: "Director, Digital Transformation",
        period: "2021 – 2024",
        icon: TrendingUp,
        highlights: [
          "Led global team of 10 — data scientists, developers & analysts — migrating legacy CRM, ERP & forecasting to cloud",
          "Spearheaded Oracle SCM replacement: $500K annual savings, 85% faster S&OP turnaround",
          "Led cross-functional 'Opportunity-to-Revenue' processes streamlining SSD product lifecycle",
        ],
      },
      {
        title: "Sr Manager, Business Intelligence",
        period: "2018 – 2021",
        icon: Database,
        highlights: [
          "Built BI team from scratch after pitching directly to CEO — cloud analytics, data governance, centralized data ecosystem for 120 users",
          "Eliminated contract violation fines by establishing execution control processes after a $50M incident",
        ],
      },
      {
        title: "Sr Manager, Strategy & Planning",
        period: "2015 – 2018",
        icon: BarChart3,
        highlights: [
          "Drove $2B bi-annual supply/demand plans across 1, 3 & 5-year horizons for an $11B addressable market",
          "Scaled planning from 10 to 120+ participants supporting 5X customers",
        ],
      },
    ],
  },
  {
    company: "Western Digital",
    subtitle: "Formerly SanDisk",
    location: "San Jose, CA",
    roles: [
      {
        title: "Marketing & Strategy Consultant",
        period: "2014 – 2015",
        icon: Layers,
        highlights: [
          "Supported $1.1B FusionIO acquisition integration due diligence for executive leadership",
          "Built TAM & SOM market models mapping PCIe/SATA/SAS segments for the $2B SSD market",
        ],
      },
      {
        title: "Operations Analyst",
        period: "2012 – 2014",
        icon: Cog,
        highlights: [
          "Managed weekly global NAND allocation S&OP across $6B supply",
          "Developed supply allocation automation via linear programming — 40% process time reduction",
        ],
      },
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.subtitle} · {exp.location}</p>
                </div>
              </div>

              <div className="relative ml-2 border-l border-border pl-8 space-y-10">
                {exp.roles.map((role, j) => {
                  const Icon = role.icon;
                  return (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-secondary border border-primary/30 flex items-center justify-center">
                        <Icon className="w-3 h-3 text-primary" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="font-semibold text-lg">{role.title}</h4>
                        <span className="text-sm font-mono text-muted-foreground">{role.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {role.highlights.map((h, k) => (
                          <li key={k} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary mt-1.5 shrink-0">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}