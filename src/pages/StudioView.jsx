import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react";

const PALETTE = {
  coral:   "#FF5C4D",
  violet:  "#7B4FE0",
  amber:   "#F59E0B",
  teal:    "#0BBFBF",
  lime:    "#84CC16",
  rose:    "#F43F5E",
  indigo:  "#4F46E5",
  sky:     "#0EA5E9",
};

const paletteValues = Object.values(PALETTE);

const experiences = [
  {
    company: "Rapidus Design Solutions",
    subtitle: "Santa Clara, CA · Semiconductor Startup",
    period: "Nov 2025 – Present",
    color: PALETTE.violet,
    role: "Customer Enablement Manager",
    highlights: [
      "Own end-to-end customer portal — onboarding, permissions, escalations & UAT",
      "Champion AI, automation & workflow innovations to unlock scale and efficiency",
      "BI analytics insights delivered directly to Chief of Staff to the President",
    ],
  },
  {
    company: "KIOXIA (formerly Toshiba)",
    subtitle: "San Jose, CA · $5B IPO Dec 2024",
    period: "2015 – 2024",
    color: PALETTE.teal,
    role: "Director, Digital Transformation → Sr. Manager, BI → Sr. Manager, Strategy",
    highlights: [
      "Led cloud migration of CRM, ERP & forecasting for a global team of 10",
      "$500K annual savings · 85% faster S&OP · 120-user analytics ecosystem",
      "Eliminated $50M contract violation exposure through compliance framework",
    ],
  },
  {
    company: "SanDisk",
    subtitle: "San Jose, CA",
    period: "2012 – 2015",
    color: PALETTE.coral,
    role: "Marketing & Strategy Consultant → Operations Analyst",
    highlights: [
      "Supported $1.1B FusionIO acquisition — due diligence & integration strategy",
      "Managed $6B NAND supply chain S&OP with real-time global coordination",
      "40% reduction in execution time via linear programming automation",
    ],
  },
];

const skills = [
  { label: "Digital Transformation", color: PALETTE.violet, size: "text-3xl" },
  { label: "Business Intelligence", color: PALETTE.teal, size: "text-2xl" },
  { label: "Data Strategy", color: PALETTE.coral, size: "text-2xl" },
  { label: "S&OP Planning", color: PALETTE.amber, size: "text-xl" },
  { label: "Power BI / Tableau", color: PALETTE.indigo, size: "text-xl" },
  { label: "SQL · Python", color: PALETTE.lime, size: "text-lg" },
  { label: "Cloud Architecture", color: PALETTE.sky, size: "text-lg" },
  { label: "Change Management", color: PALETTE.rose, size: "text-xl" },
  { label: "Agile Operations", color: PALETTE.amber, size: "text-lg" },
  { label: "Product Strategy", color: PALETTE.violet, size: "text-2xl" },
  { label: "Linear Optimization", color: PALETTE.teal, size: "text-base" },
  { label: "SAP BI/BO", color: PALETTE.coral, size: "text-base" },
  { label: "Azure / SQL Server", color: PALETTE.indigo, size: "text-lg" },
  { label: "Customer Enablement", color: PALETTE.sky, size: "text-xl" },
  { label: "Six Sigma · Lean", color: PALETTE.lime, size: "text-base" },
];

const stats = [
  { value: "$500K", label: "Annual savings", color: PALETTE.coral },
  { value: "5×", label: "Customer growth", color: PALETTE.violet },
  { value: "120+", label: "Stakeholders aligned", color: PALETTE.teal },
  { value: "$2B", label: "S&OP campaigns", color: PALETTE.amber },
  { value: "12+", label: "Years experience", color: PALETTE.lime },
  { value: "$50M", label: "Risk eliminated", color: PALETTE.rose },
];

export default function StudioView({ onSwitch }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: `linear-gradient(135deg, ${PALETTE.violet}, ${PALETTE.coral})` }}>
              J
            </div>
            <span className="font-bold tracking-tight text-neutral-900 text-sm">Jason McBride</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:jasonmcbride.mba@gmail.com"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors hidden md:block">
              Contact
            </a>
            <button onClick={onSwitch}
              className="text-xs px-4 py-1.5 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all">
              ⇄ Switch View
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 pt-28 pb-24">

        {/* ── HERO ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Colored accent bar */}
              <div className="flex gap-1.5 mb-8">
                {paletteValues.map((c, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <p className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                Portfolio · Technology & Strategy
              </p>
              <h1 className="font-black leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", letterSpacing: "-0.03em" }}>
                Jason<br />
                <span style={{ WebkitTextStroke: "2px #e5e7eb", color: "transparent" }}>McBride</span>
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed max-w-sm">
                Director-level executive with 12+ years turning data chaos into elegant strategy across Fortune 500 tech.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="mailto:jasonmcbride.mba@gmail.com"
                  className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${PALETTE.violet}, ${PALETTE.coral})` }}>
                  <Mail className="w-4 h-4" /> Get in Touch
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Stats grid — colorful tiles */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="rounded-2xl p-5 flex flex-col justify-between aspect-square"
                  style={{ background: s.color }}
                >
                  <div />
                  <div>
                    <div className="text-3xl font-black text-white leading-none">{s.value}</div>
                    <div className="text-xs font-semibold text-white/80 mt-1 leading-tight">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── EXPERIENCE ── */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-12"
          >
            <h2 className="text-xs font-black tracking-[0.35em] uppercase text-neutral-400 shrink-0">Experience</h2>
            <div className="flex-1 h-px bg-neutral-100" />
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group rounded-2xl overflow-hidden border border-neutral-100 hover:border-transparent hover:shadow-xl transition-all duration-400"
              >
                {/* Color bar header */}
                <div className="px-8 py-6 flex flex-col md:flex-row md:items-center gap-4"
                  style={{ background: exp.color }}>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white leading-tight">{exp.company}</h3>
                    <p className="text-white/70 text-sm font-medium mt-1">{exp.subtitle}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-xs font-bold tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white px-8 py-6">
                  <p className="text-sm font-bold text-neutral-500 tracking-wide mb-4 uppercase">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, k) => (
                      <li key={k} className="text-base text-neutral-700 flex gap-3 leading-relaxed">
                        <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILLS WORD CLOUD ── */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-12"
          >
            <h2 className="text-xs font-black tracking-[0.35em] uppercase text-neutral-400 shrink-0">Craft & Expertise</h2>
            <div className="flex-1 h-px bg-neutral-100" />
          </motion.div>

          <div className="rounded-3xl bg-neutral-50 p-10">
            <div className="flex flex-wrap gap-4 items-baseline justify-center">
              {skills.map((s, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.08 }}
                  className={`${s.size} font-black cursor-default select-none transition-all duration-200`}
                  style={{ color: s.color }}
                >
                  {s.label}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION STRIP ── */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <h2 className="text-xs font-black tracking-[0.35em] uppercase text-neutral-400 shrink-0">Education</h2>
            <div className="flex-1 h-px bg-neutral-100" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { degree: "MBA", school: "University of Southern California", color: PALETTE.indigo },
              { degree: "B.S. Business Administration", school: "California State University", color: PALETTE.sky },
            ].map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 flex items-center gap-5"
                style={{ background: e.color + "14", border: `2px solid ${e.color}30` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: e.color }}>
                  {e.degree.slice(0, 2)}
                </div>
                <div>
                  <p className="font-black text-neutral-900">{e.degree}</p>
                  <p className="text-sm text-neutral-500">{e.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: `linear-gradient(135deg, ${PALETTE.violet}18, ${PALETTE.coral}18)` }}
        >
          <div>
            <p className="text-2xl font-black text-neutral-900 mb-1">Let's build something great.</p>
            <p className="text-neutral-500 text-sm">Open to new opportunities · Goleta, CA</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:jasonmcbride.mba@gmail.com"
              className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white"
              style={{ background: PALETTE.violet }}>
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="tel:4086098558"
              className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all">
              (408) 609-8558
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}