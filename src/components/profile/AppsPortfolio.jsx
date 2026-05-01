import { motion } from "framer-motion";
import { ExternalLink, BarChart3, Users, Briefcase, Target, Rocket, Lightbulb, Lock } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";

const apps = [
  {
    name: "Revenue Pipeline Tracker",
    codename: "OP: PIPELINE",
    clearance: "UNCLASSIFIED",
    icon: BarChart3,
    description: "End-to-end opportunity tracking from lead to revenue — built for cross-functional command visibility into the sales pipeline with real-time analytics and forecasting intelligence.",
    tags: ["Analytics", "Sales", "Forecasting"],
    url: "#",
  },
  {
    name: "S&OP Command Center",
    codename: "OP: BALANCE",
    clearance: "UNCLASSIFIED",
    icon: Target,
    description: "Streamlined sales & operations planning dashboard replacing legacy spreadsheets — collaborative demand/supply balancing with executive-ready battlefield reporting.",
    tags: ["Operations", "Planning", "Dashboard"],
    url: "#",
  },
  {
    name: "Contract Compliance Monitor",
    codename: "OP: SENTINEL",
    clearance: "SENSITIVE",
    icon: Briefcase,
    description: "Automated surveillance of MFN clauses, volume rebates, and contractual terms — preventing costly violations and protecting strategic customer relationships at all costs.",
    tags: ["Compliance", "Automation", "Risk"],
    url: "#",
  },
  {
    name: "Team Performance Hub",
    codename: "OP: COHESION",
    clearance: "UNCLASSIFIED",
    icon: Users,
    description: "Data-driven unit management tracking OKRs, mission milestones, and individual operator development — full transparency, maximum accountability.",
    tags: ["Team", "OKRs", "Management"],
    url: "#",
  },
  {
    name: "Market Intelligence Platform",
    codename: "OP: PHANTOM",
    clearance: "SENSITIVE",
    icon: Lightbulb,
    description: "TAM/SOM battlefield mapping tool that charts competitive landscape, segment dynamics, and high-value targets to inform product strategy and resource deployment.",
    tags: ["Strategy", "Intel", "BI"],
    url: "#",
  },
  {
    name: "Process Automation Toolkit",
    codename: "OP: OVERDRIVE",
    clearance: "UNCLASSIFIED",
    icon: Rocket,
    description: "Suite of workflow automation tools applying Lean & Six Sigma doctrine — eliminating manual friction, accelerating operational tempo, maximizing throughput.",
    tags: ["Lean", "Automation", "Efficiency"],
    url: "#",
  },
];

const clearanceBadge = {
  "UNCLASSIFIED": "border-primary/40 text-primary bg-primary/5",
  "SENSITIVE": "border-accent/40 text-accent bg-accent/5",
};

export default function AppsPortfolio() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(82,55%,42%) 1px, transparent 1px), linear-gradient(90deg, hsl(82,55%,42%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="font-mono text-xs text-primary/60 tracking-[0.4em] uppercase mb-3">◆ DEPLOYED ASSETS // BASE44 DIVISION</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <ScrambleText text="Active Operations" />
          </h2>
          <div className="h-px w-24 bg-primary mt-3 mb-4" />
          <p className="text-muted-foreground max-w-2xl font-sans tracking-wide">
            Field-deployed digital tools built on Base44 — purpose-built for real operational problems.
            Each asset engineered for maximum impact, minimum friction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {apps.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.a
                key={i}
                href={app.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-6 border border-primary/20 bg-card hover:border-primary/60 transition-all duration-300 flex flex-col"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              >
                {/* Hover scan line */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, hsl(82,55%,42%,0.03) 0%, transparent 100%)" }}
                />

                {/* Corner cut indicator */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-primary/20 border-b border-l border-primary/40" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 border border-primary/40 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono px-2 py-0.5 border tracking-widest ${clearanceBadge[app.clearance]}`}>
                        {app.clearance}
                      </span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Codename */}
                  <p className="font-mono text-xs text-accent tracking-[0.3em] mb-1">{app.codename}</p>

                  {/* Name */}
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    <ScrambleText text={app.name} delay={i * 80} />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {app.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-0.5 bg-secondary border border-border text-muted-foreground font-mono tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}