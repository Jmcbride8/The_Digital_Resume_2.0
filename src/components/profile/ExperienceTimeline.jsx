import { motion } from "framer-motion";
import { Shield, Crosshair, Database, BarChart3, Layers, Cog, ChevronRight } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";
import Redacted from "@/components/Redacted";

const experiences = [
  {
    company: "Rapidus Design Solutions",
    subtitle: "THEATER: Santa Clara, CA · SEMICONDUCTOR STARTUP",
    roles: [
      {
        title: "Customer Enablement Manager",
        rank: "O-7 // BG",
        period: "2025 – Present",
        icon: Shield,
        highlights: [
          "Own end-to-end customer portal — onboarding, permissions, escalations & UAT — for a pioneering semiconductor design platform subsidiary of Rapidus Corporation",
          "Drive quotation and pricing analysis; champion AI, automation & workflow innovations to unlock scale and efficiency",
          "Contribute [[$BI analytics]] insights to executive leadership reporting directly to Chief of Staff to the President",
          "Partner with cross-functional units (engineering, sales, marketing) to align portal capabilities with business priorities",
        ],
      },
    ],
  },
  {
    company: "Toshiba → KIOXIA",
    subtitle: "THEATER: San Jose, CA · SPINOFF 2018 · $5B IPO DEC 2024",
    roles: [
      {
        title: "Director, Digital Transformation",
        rank: "O-6 // COL",
        period: "2021 – 2024",
        icon: Shield,
        highlights: [
          "Commanded global team of 10 — data scientists, developers & analysts — executing migration of legacy CRM, ERP & forecasting to cloud infrastructure",
          "Led Oracle SCM replacement operation: $500K annual savings, 85% faster S&OP turnaround — strategic objective achieved",
          "Spearheaded cross-functional 'Opportunity-to-Revenue' doctrine streamlining SSD product lifecycle from first contact to close",
        ],
      },
      {
        title: "Sr Manager, Business Intelligence",
        rank: "O-5 // LTC",
        period: "2018 – 2021",
        icon: Database,
        highlights: [
          "Built BI unit from zero after direct pitch to C-suite — deployed cloud analytics, data governance & centralized ecosystem for 120 users",
          "Eliminated [[$50M]] contract violation exposure by establishing execution control protocols and rapid-response compliance framework",
        ],
      },
      {
        title: "Sr Manager, Strategy & Planning",
        rank: "O-4 // MAJ",
        period: "2015 – 2018",
        icon: BarChart3,
        highlights: [
          "Commanded [[$2B]] bi-annual supply/demand campaigns across 1, 3 & 5-year strategic horizons for an [[$11B]] addressable market",
          "Scaled planning capability from 10 to 120+ participants supporting 5X customer growth — no operational disruption",
        ],
      },
    ],
  },
  {
    company: "SanDisk",
    subtitle: "THEATER: San Jose, CA",
    roles: [
      {
        title: "Marketing & Strategy Consultant",
        rank: "O-3 // CPT",
        period: "2014 – 2015",
        icon: Layers,
        highlights: [
          "Embedded with exec leadership to support [[$1.1B FusionIO acquisition]] integration — due diligence & strategic assessment",
          "Built TAM/SOM market intelligence models mapping PCIe/SATA/SAS segments across the $2B SSD theater",
        ],
      },
      {
        title: "Operations Analyst",
        rank: "O-2 // 1LT",
        period: "2012 – 2014",
        icon: Cog,
        highlights: [
          "Managed weekly global NAND allocation S&OP across $6B supply — real-time coordination across international units",
          "Engineered supply allocation automation via linear programming — 40% reduction in mission execution time",
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
          <p className="font-mono text-xs text-primary/60 tracking-[0.4em] uppercase mb-3">◆ PERSONNEL FILE // DECLASSIFIED</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <ScrambleText text="Deployment Record" />
          </h2>
          <div className="h-px w-24 bg-primary mt-3" />
        </motion.div>

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Unit header */}
              <div className="flex items-start gap-4 mb-8 p-4 border border-primary/30 bg-secondary/40 relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                <Crosshair className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}><ScrambleText text={exp.company} delay={100} /></h3>
                  <p className="text-xs text-muted-foreground font-mono tracking-wider mt-1">{exp.subtitle}</p>
                </div>
              </div>

              {/* Roles */}
              <div className="relative ml-2 border-l-2 border-primary/20 pl-8 space-y-10">
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
                      {/* Timeline node */}
                      <div className="absolute -left-[2.6rem] top-1 w-5 h-5 bg-background border-2 border-primary/50 flex items-center justify-center">
                        <Icon className="w-3 h-3 text-primary" />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                        <div>
                          <h4 className="font-display font-bold text-lg uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            <ScrambleText text={role.title} delay={j * 80} />
                          </h4>
                          <span className="font-mono text-xs text-accent tracking-widest">{role.rank}</span>
                        </div>
                        <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-1 shrink-0">
                          {role.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {role.highlights.map((h, k) => {
                          // Split on [[...]] markers for redacted segments
                          const parts = h.split(/(\[\[.*?\]\])/g);
                          return (
                            <li key={k} className="text-base text-foreground/85 leading-relaxed flex gap-2">
                              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>
                                {parts.map((part, pi) => {
                                  if (part.startsWith("[[") && part.endsWith("]]")) {
                                    return <Redacted key={pi}>{part.slice(2, -2)}</Redacted>;
                                  }
                                  return part;
                                })}
                              </span>
                            </li>
                          );
                        })}
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