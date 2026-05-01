import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, TrendingUp, Users, Zap, Award, MapPin, Phone } from "lucide-react";

const experiences = [
  {
    company: "KIOXIA (formerly Toshiba)",
    subtitle: "San Jose, CA · $5B IPO Dec 2024",
    period: "2015 – 2024",
    logo: "https://logo.clearbit.com/kioxia.com",
    logoFallback: "KIOXIA",
    roles: [
      {
        title: "Director, Digital Transformation",
        period: "2021 – 2024",
        highlights: [
          "Led global team of 10 — data scientists, engineers & analysts — migrating legacy CRM, ERP & forecasting to cloud infrastructure",
          "Drove Oracle SCM replacement delivering $500K in annual savings and 85% faster S&OP turnaround",
          "Designed end-to-end Opportunity-to-Revenue framework across the SSD product lifecycle",
        ],
      },
      {
        title: "Sr. Manager, Business Intelligence",
        period: "2018 – 2021",
        highlights: [
          "Built BI practice from zero following direct C-suite pitch — deployed 120-user analytics ecosystem with full data governance",
          "Eliminated $50M in contract violation exposure through rapid-response compliance framework",
        ],
      },
      {
        title: "Sr. Manager, Strategy & Planning",
        period: "2015 – 2018",
        highlights: [
          "Directed $2B bi-annual supply/demand campaigns across 1, 3 & 5-year horizons in an $11B addressable market",
          "Scaled planning capacity from 10 to 120+ participants supporting 5× customer growth — zero operational disruption",
        ],
      },
    ],
  },
  {
    company: "SanDisk (Western Digital)",
    subtitle: "San Jose, CA",
    period: "2012 – 2015",
    logo: "https://logo.clearbit.com/sandisk.com",
    logoFallback: "SanDisk",
    roles: [
      {
        title: "Marketing & Strategy Consultant",
        period: "2014 – 2015",
        highlights: [
          "Embedded with exec leadership to support $1.1B FusionIO acquisition — due diligence, integration strategy & assessment",
          "Constructed TAM/SOM intelligence models mapping PCIe/SATA/SAS segments across the $2B SSD market",
        ],
      },
      {
        title: "Operations Analyst",
        period: "2012 – 2014",
        highlights: [
          "Managed weekly global NAND allocation S&OP across a $6B supply chain with real-time international coordination",
          "Automated supply allocation via linear programming, reducing execution time by 40%",
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

function CompanyLogo({ logo, fallback, textColor = "#666" }) {
  return (
    <div className="flex items-center justify-center bg-white border border-neutral-100 shrink-0 px-4 py-2" style={{ height: 52, minWidth: 130 }}>
      <img
        src={logo}
        alt={fallback}
        className="object-contain max-h-9 w-auto"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.removeProperty("display");
        }}
      />
      <span className="text-sm font-bold tracking-wide" style={{ display: "none", color: textColor, fontFamily: "'Oswald', sans-serif" }}>
        {fallback}
      </span>
    </div>
  );
}

export default function ExecutiveView({ onSwitch }) {
  return (
    <div className="min-h-screen text-neutral-900" style={{ background: "#FFFFFF", fontFamily: "Georgia, 'Times New Roman', serif", position: "relative", zIndex: 9998 }}>

      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] border-b border-neutral-200" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>J</span>
            </div>
            <span className="text-sm font-semibold tracking-wider text-neutral-800" style={{ fontFamily: "'Oswald', sans-serif" }}>JASON McBRIDE</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:jasonmcbride.mba@gmail.com" className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors hidden md:block">Contact</a>
            <button
              onClick={onSwitch}
              className="text-xs tracking-widest uppercase border border-neutral-200 px-4 py-1.5 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all"
            >
              ⇄ Switch View
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 pt-28 pb-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 pt-8"
        >
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <p className="text-sm tracking-[0.4em] uppercase text-neutral-500 mb-5 font-semibold">Executive Profile · Technology & Strategy</p>
              <h1 className="font-bold leading-none mb-6 text-neutral-900"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(3rem, 8vw, 5.5rem)", letterSpacing: "-0.01em" }}>
                Jason<br />
                <span className="text-neutral-400">McBride</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-md" style={{ color: "#374151", fontFamily: "Georgia, serif" }}>
                Director-level executive with 12+ years driving digital transformation, business intelligence, and data strategy across Fortune 500 technology companies.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="mailto:jasonmcbride.mba@gmail.com"
                  className="flex items-center gap-2 text-sm font-medium bg-neutral-900 text-white px-5 py-2.5 hover:bg-neutral-700 transition-colors">
                  <Mail className="w-4 h-4" /> Get in Touch
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium border border-neutral-200 px-5 py-2.5 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="md:col-span-2 space-y-0 border border-neutral-100 divide-y divide-neutral-100">
              {[
                [MapPin, "Location", "Goleta, CA"],
                [Award, "MBA", "Univ. of Southern California"],
                [Phone, "Phone", "(408) 609-8558"],
                [Zap, "Status", "Open to Opportunities"],
              ].map(([Icon, k, v]) => (
                <div key={k} className="flex items-center gap-4 px-5 py-4 bg-white">
                  <Icon className="w-4 h-4 text-neutral-300 shrink-0" />
                  <div>
                    <div className="text-xs text-neutral-500 tracking-widest uppercase font-semibold">{k}</div>
                    <div className="text-base text-neutral-800 font-semibold mt-0.5">{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* IMPACT STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-neutral-200 p-6 group hover:border-neutral-400 transition-colors"
              >
                <Icon className="w-5 h-5 text-neutral-400 mb-4 group-hover:text-neutral-600 transition-colors" />
                <div className="text-4xl font-bold text-neutral-900 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.value}</div>
                <div className="text-sm text-neutral-500 leading-relaxed font-medium">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* EXPERIENCE */}
        <section className="mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-6 mb-12">
            <h2 className="text-base tracking-[0.4em] uppercase text-neutral-700 font-bold shrink-0">Experience</h2>
            <div className="flex-1 h-px bg-neutral-200" />
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-neutral-200 overflow-hidden"
              >
                {/* Company header */}
                <div className="flex items-center gap-5 px-7 py-5 border-b border-neutral-100">
                  <CompanyLogo logo={exp.logo} fallback={exp.logoFallback} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: "'Oswald', sans-serif" }}>{exp.company}</h3>
                    <p className="text-sm text-neutral-500 tracking-wide mt-0.5 font-medium">{exp.subtitle}</p>
                  </div>
                  <span className="text-xs text-neutral-400 tracking-widest shrink-0 hidden md:block">{exp.period}</span>
                </div>

                {/* Roles */}
                <div className="divide-y divide-neutral-50">
                  {exp.roles.map((role, j) => (
                    <div key={j} className="px-7 py-6">
                      <div className="flex items-baseline justify-between mb-4 gap-4">
                        <h4 className="text-lg font-bold text-neutral-800">{role.title}</h4>
                        <span className="text-sm text-neutral-500 tracking-widest shrink-0 bg-neutral-100 px-2 py-0.5 font-medium">{role.period}</span>
                      </div>
                      <ul className="space-y-2.5">
                        {role.highlights.map((h, k) => (
                          <li key={k} className="text-base leading-relaxed flex gap-3" style={{ color: "#374151", fontFamily: "Georgia, serif" }}>
                            <span className="w-1 h-1 rounded-full bg-neutral-300 mt-2 shrink-0" />
                            {h}
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
        <section className="mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-6 mb-10">
            <h2 className="text-base tracking-[0.4em] uppercase text-neutral-700 font-bold shrink-0">Core Competencies</h2>
            <div className="flex-1 h-px bg-neutral-200" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-200 px-6 py-5"
              >
                <p className="text-sm tracking-[0.3em] uppercase text-neutral-600 font-bold mb-4 pb-3 border-b border-neutral-200">{group.category}</p>
                <ul className="space-y-2.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-base flex items-center gap-3 font-medium" style={{ color: "#1f2937", fontFamily: "Georgia, serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-200 shrink-0" />
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
          className="border-t border-neutral-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-neutral-400 tracking-widest">© {new Date().getFullYear()} Jason McBride</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:jasonmcbride.mba@gmail.com" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">jasonmcbride.mba@gmail.com</a>
            <a href="tel:4086098558" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">(408) 609-8558</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}