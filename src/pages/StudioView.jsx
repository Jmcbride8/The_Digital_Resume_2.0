import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, MapPin, Phone } from "lucide-react";

// One single accent color — used sparingly
const ACCENT = "#1A1A1A";

const experiences = [
  {
    company: "Rapidus Design Solutions",
    subtitle: "Santa Clara, CA",
    tag: "Semiconductor · Startup",
    period: "Nov 2025 – Present",
    role: "Customer Enablement Manager",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&fit=crop",
    imageAlt: "Circuit board technology",
    accentColor: "#2D2D2D",
    highlights: [
      "Own end-to-end customer portal — onboarding, permissions, escalations & UAT",
      "Champion AI, automation & workflow innovations to unlock scale and efficiency",
      "BI analytics insights delivered directly to Chief of Staff to the President",
    ],
  },
  {
    company: "KIOXIA",
    subtitle: "San Jose, CA",
    tag: "Formerly Toshiba · $5B IPO 2024",
    period: "2015 – 2024",
    role: "Director, Digital Transformation → Sr. Manager, BI → Sr. Manager, Strategy",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&fit=crop",
    imageAlt: "Data center servers",
    accentColor: "#2D2D2D",
    highlights: [
      "Led global team of 10 — migrating legacy CRM, ERP & forecasting to cloud",
      "$500K annual savings · 85% faster S&OP · 120-user analytics ecosystem built from zero",
      "Eliminated $50M contract violation exposure through compliance framework",
    ],
  },
  {
    company: "SanDisk",
    subtitle: "San Jose, CA",
    tag: "Flash Storage · WD Subsidiary",
    period: "2012 – 2015",
    role: "Marketing & Strategy Consultant → Operations Analyst",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&q=80&fit=crop",
    imageAlt: "Memory storage chips",
    accentColor: "#2D2D2D",
    highlights: [
      "Supported $1.1B FusionIO acquisition — due diligence & integration strategy",
      "Managed $6B NAND supply chain S&OP with real-time global coordination",
      "40% reduction in execution time via linear programming automation",
    ],
  },
];

const skills = [
  { group: "Strategy", items: ["Digital Transformation", "Change Management", "Product Strategy", "S&OP Planning", "Agile Operations"] },
  { group: "Analytics", items: ["Business Intelligence", "Demand Forecasting", "Data ETL Pipelines", "Power BI / Tableau", "Business Modelling"] },
  { group: "Technical", items: ["SQL · Python", "Azure / SQL Server", "Data Warehousing", "SAP BI/BO", "Linear Optimization"] },
];

const stats = [
  { value: "$500K", label: "Annual savings delivered" },
  { value: "5×",    label: "Customer growth supported" },
  { value: "120+",  label: "Stakeholders aligned" },
  { value: "$2B",   label: "S&OP campaigns directed" },
];

export default function StudioView({ onSwitch }) {
  return (
    <div className="min-h-screen text-neutral-900"
      style={{ background: "#F7F6F3", fontFamily: "'Inter', system-ui, sans-serif", position: "relative", zIndex: 9998 }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-[9999]"
        style={{ background: "#F7F6F3", borderBottom: "1px solid #E5E2DC" }}>
        <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-widest">JM</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-neutral-800">Jason McBride</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:jasonmcbride.mba@gmail.com"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors hidden md:block">
              Contact
            </a>
            <button onClick={onSwitch}
              className="text-xs px-4 py-2 border border-neutral-300 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all">
              ⇄ Switch View
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 pt-32 pb-32">

        {/* ── HERO ── */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 font-medium mb-8">
            Technology · Strategy · Leadership
          </p>
          <h1 className="font-black text-neutral-900 leading-[0.92] mb-8"
            style={{ fontSize: "clamp(4rem, 11vw, 7.5rem)", letterSpacing: "-0.04em" }}>
            Jason<br />McBride
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <p className="text-lg text-neutral-500 leading-relaxed max-w-sm" style={{ fontWeight: 400 }}>
              Director-level executive with 12+ years driving digital transformation, business intelligence, and data strategy across Fortune 500 technology companies.
            </p>
            {/* Stats row */}
            <div className="flex gap-10 shrink-0">
              {stats.slice(0, 2).map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-neutral-900 leading-none">{s.value}</div>
                  <div className="text-xs text-neutral-400 mt-1 leading-tight max-w-[80px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mt-10">
            <a href="mailto:jasonmcbride.mba@gmail.com"
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors">
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 border border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-all">
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Thin divider line */}
          <div className="mt-16 h-px bg-neutral-200" />
        </motion.section>

        {/* ── EXPERIENCE CARDS ── */}
        <section className="mb-28">
          <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 font-medium mb-12">Selected Experience</p>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden"
                style={{ background: "#FFFFFF", border: "1px solid #E5E2DC" }}
              >
                {/* Image banner */}
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <img
                    src={exp.image}
                    alt={exp.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.55) saturate(0.6)" }}
                  />
                  {/* Overlay text on image */}
                  <div className="absolute inset-0 flex items-end p-8">
                    <div>
                      <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium">{exp.tag}</span>
                      <h3 className="text-3xl font-black text-white mt-1 leading-tight"
                        style={{ letterSpacing: "-0.02em" }}>
                        {exp.company}
                      </h3>
                    </div>
                    <div className="ml-auto shrink-0">
                      <span className="text-xs tracking-widest font-medium text-white/60 bg-white/10 px-3 py-1.5">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 font-semibold leading-relaxed">{exp.role}</p>
                    <div className="flex items-center gap-1.5 shrink-0 text-xs text-neutral-400">
                      <MapPin className="w-3 h-3" />{exp.subtitle}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, k) => (
                      <li key={k} className="flex gap-4 text-base text-neutral-600 leading-relaxed">
                        <span className="text-neutral-300 shrink-0 mt-1">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="mb-28">
          <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 font-medium mb-12">Core Competencies</p>
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8"
                style={{ background: "#FFFFFF", border: "1px solid #E5E2DC" }}
              >
                <p className="text-xs tracking-[0.4em] uppercase font-bold text-neutral-900 mb-6 pb-4"
                  style={{ borderBottom: "1px solid #E5E2DC" }}>
                  {group.group}
                </p>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-base text-neutral-600 flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "#E5E2DC" }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 flex flex-col gap-2"
                style={{ background: "#FFFFFF" }}
              >
                <div className="text-4xl font-black text-neutral-900 leading-none"
                  style={{ letterSpacing: "-0.03em" }}>
                  {s.value}
                </div>
                <div className="text-sm text-neutral-400 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className="mb-28">
          <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 font-medium mb-12">Education</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { degree: "MBA", school: "University of Southern California", detail: "Marshall School of Business" },
              { degree: "B.S. Business Administration", school: "California State University", detail: "Finance & Management" },
            ].map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 flex items-start gap-6"
                style={{ background: "#FFFFFF", border: "1px solid #E5E2DC" }}
              >
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-black tracking-widest">
                    {e.degree.slice(0, e.degree.includes(".") ? 0 : 3).replace("B.S", "BS") || "BS"}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-base">{e.degree}</p>
                  <p className="text-sm text-neutral-500 mt-0.5">{e.school}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FOOTER CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ background: "#1A1A1A" }}
        >
          <div>
            <p className="text-2xl font-black text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Let's work together.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Goleta, CA</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> (408) 609-8558</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:jasonmcbride.mba@gmail.com"
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 border border-neutral-700 text-neutral-300 hover:border-white hover:text-white transition-all">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-6 text-xs text-neutral-400 text-center tracking-widest">
          © {new Date().getFullYear()} Jason McBride
        </div>

      </div>
    </div>
  );
}