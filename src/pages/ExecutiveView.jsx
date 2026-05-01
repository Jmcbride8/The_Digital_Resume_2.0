import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, TrendingUp, Users, Zap, Award } from "lucide-react";
import Redacted from "@/components/Redacted";

const experiences = [
  {
    company: "Toshiba → KIOXIA",
    subtitle: "San Jose, CA · $5B IPO Dec 2024",
    period: "2015 – 2024",
    roles: [
      {
        title: "Director, Digital Transformation",
        period: "2021 – 2024",
        highlights: [
          "Led global team of 10 — data scientists, engineers & analysts — executing cloud migration of CRM, ERP & forecasting platforms",
          "Drove Oracle SCM replacement: [[$500K annual savings]], 85% faster S&OP cycle",
          "Designed end-to-end 'Opportunity-to-Revenue' framework across SSD product lifecycle",
        ],
      },
      {
        title: "Sr. Manager, Business Intelligence",
        period: "2018 – 2021",
        highlights: [
          "Built BI practice from scratch after executive pitch — 120-user analytics ecosystem, data governance & cloud infrastructure",
          "Eliminated [[$50M]] in contract violation exposure through compliance controls",
        ],
      },
      {
        title: "Sr. Manager, Strategy & Planning",
        period: "2015 – 2018",
        highlights: [
          "Directed [[$2B]] bi-annual S&OP campaigns in an [[$11B]] addressable market",
          "Scaled planning from 10 to 120+ participants supporting 5× customer growth",
        ],
      },
    ],
  },
  {
    company: "Western Digital (SanDisk)",
    subtitle: "San Jose, CA",
    period: "2012 – 2015",
    roles: [
      {
        title: "Marketing & Strategy Consultant",
        period: "2014 – 2015",
        highlights: [
          "Supported [[$1.1B FusionIO acquisition]] — due diligence, integration planning & strategic assessment",
          "Built TAM/SOM models across PCIe/SATA/SAS segments in the $2B SSD market",
        ],
      },
      {
        title: "Operations Analyst",
        period: "2012 – 2014",
        highlights: [
          "Managed weekly NAND allocation S&OP across $6B global supply chain",
          "Automated supply allocation via linear programming — 40% reduction in execution time",
        ],
      },
    ],
  },
];

const stats = [
  { value: "$500K", label: "Annual savings delivered", icon: TrendingUp },
  { value: "5×", label: "Customer growth supported", icon: Users },
  { value: "120+", label: "Stakeholders aligned", icon: Zap },
  { value: "$2B", label: "S&OP campaigns directed", icon: Award },
];

const skills = [
  { category: "Leadership", items: ["Digital Transformation", "Change Management", "Product Strategy", "Agile Operations", "Data-Driven Decisions"] },
  { category: "Analytics", items: ["Business Modelling", "Demand Forecasting", "Data ETL Pipelines", "Power BI / Tableau", "S&OP Planning"] },
  { category: "Technical", items: ["SQL", "Python / Flask", "Azure / SQL Server", "Data Warehousing", "SAP BI/BO"] },
];

function RedactedInline({ text }) {
  const parts = text.split(/(\[\[.*?\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("[[") && part.endsWith("]]")) {
          return <Redacted key={i}>{part.slice(2, -2)}</Redacted>;
        }
        return part;
      })}
    </>
  );
}

export default function ExecutiveView({ onSwitch }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Rajdhani', sans-serif" }}>

      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-medium">Jason McBride</span>
          <div className="flex items-center gap-6">
            <a href="mailto:jasonmcbride.mba@gmail.com" className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors">Contact</a>
            <button
              onClick={onSwitch}
              className="text-xs tracking-widest uppercase border border-neutral-200 px-4 py-1.5 text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all"
            >
              ⇄ Switch View
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 pt-32 pb-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-6">Executive Profile</p>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-6 text-neutral-900" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.02em" }}>
                Jason<br />McBride
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed font-light max-w-sm">
                Director-level executive specializing in digital transformation, business intelligence, and data-driven growth strategy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-px bg-neutral-100" />
              {[
                ["Location", "Goleta, CA"],
                ["MBA", "University of Southern California"],
                ["Clearance", "TS/SCI (Former)"],
                ["Availability", "Open to Opportunities"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-baseline py-2 border-b border-neutral-50">
                  <span className="text-xs tracking-widest uppercase text-neutral-400">{k}</span>
                  <span className="text-sm text-neutral-700 font-medium">{v}</span>
                </div>
              ))}
              <div className="flex gap-3 pt-4">
                <a href="mailto:jasonmcbride.mba@gmail.com"
                  className="flex items-center gap-2 text-xs tracking-widest uppercase bg-neutral-900 text-white px-4 py-2.5 hover:bg-neutral-700 transition-colors">
                  <Mail className="w-3 h-3" /> Email
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs tracking-widest uppercase border border-neutral-200 px-4 py-2.5 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all">
                  <Linkedin className="w-3 h-3" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* IMPACT STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-100 mb-24"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white p-8 text-center">
                <Icon className="w-5 h-5 text-neutral-300 mx-auto mb-4" />
                <div className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.value}</div>
                <div className="text-xs text-neutral-400 tracking-wide leading-relaxed">{s.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* EXPERIENCE */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-6 mb-12">
            <h2 className="text-xs tracking-[0.5em] uppercase text-neutral-400">Experience</h2>
            <div className="flex-1 h-px bg-neutral-100" />
          </motion.div>

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: "'Oswald', sans-serif" }}>{exp.company}</h3>
                  <span className="text-xs text-neutral-400 tracking-widest">{exp.period}</span>
                </div>
                <p className="text-xs text-neutral-400 tracking-widest uppercase mb-8 -mt-4">{exp.subtitle}</p>

                <div className="space-y-8 pl-6 border-l border-neutral-100">
                  {exp.roles.map((role, j) => (
                    <div key={j}>
                      <div className="flex items-baseline justify-between mb-3">
                        <h4 className="text-base font-semibold text-neutral-800">{role.title}</h4>
                        <span className="text-xs text-neutral-400 tracking-widest shrink-0 ml-4">{role.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {role.highlights.map((h, k) => (
                          <li key={k} className="text-sm text-neutral-500 leading-relaxed pl-4 border-l-2 border-neutral-100">
                            <RedactedInline text={h} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-6 mb-12">
            <h2 className="text-xs tracking-[0.5em] uppercase text-neutral-400">Core Competencies</h2>
            <div className="flex-1 h-px bg-neutral-100" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-xs tracking-[0.4em] uppercase text-neutral-300 mb-4">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-sm text-neutral-600 flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-neutral-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-neutral-300 tracking-widest">© {new Date().getFullYear()} Jason McBride</p>
          <div className="flex items-center gap-6">
            <a href="mailto:jasonmcbride.mba@gmail.com" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors tracking-widest">jasonmcbride.mba@gmail.com</a>
            <a href="tel:4086098558" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors tracking-widest">(408) 609-8558</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}