import { motion } from "framer-motion";
import { ExternalLink, Zap, BarChart3, Users, Briefcase, BookOpen, Target, Rocket, Lightbulb } from "lucide-react";

const apps = [
  {
    name: "Revenue Pipeline Tracker",
    icon: BarChart3,
    description: "End-to-end opportunity tracking from lead to revenue — built for cross-functional visibility into the sales pipeline with real-time analytics and forecasting.",
    tags: ["Analytics", "Sales", "Forecasting"],
    url: "#",
  },
  {
    name: "S&OP Command Center",
    icon: Target,
    description: "Streamlined sales & operations planning dashboard replacing legacy spreadsheets — collaborative demand/supply balancing with executive-ready reporting.",
    tags: ["Operations", "Planning", "Dashboard"],
    url: "#",
  },
  {
    name: "Contract Compliance Monitor",
    icon: Briefcase,
    description: "Automated monitoring of MFN clauses, volume rebates, and contractual terms to prevent costly violations and protect strategic customer relationships.",
    tags: ["Compliance", "Automation", "Risk"],
    url: "#",
  },
  {
    name: "Team Performance Hub",
    icon: Users,
    description: "Data-driven team management platform tracking OKRs, project milestones, and individual growth plans — fostering transparency and accountability.",
    tags: ["Team", "OKRs", "Management"],
    url: "#",
  },
  {
    name: "Market Intelligence Platform",
    icon: Lightbulb,
    description: "TAM/SOM market modelling tool that maps competitive landscape, segment dynamics, and growth opportunities to inform product strategy.",
    tags: ["Strategy", "Market Analysis", "BI"],
    url: "#",
  },
  {
    name: "Process Automation Toolkit",
    icon: Rocket,
    description: "Collection of workflow automation tools applying Lean & Six Sigma principles — reducing manual effort and accelerating operational throughput.",
    tags: ["Lean", "Automation", "Efficiency"],
    url: "#",
  },
];

export default function AppsPortfolio() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Base44 Apps</h2>
          <p className="text-muted-foreground max-w-2xl">
            Digital tools I've built on Base44 to solve real business problems — from pipeline management to operational planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
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
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {app.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
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