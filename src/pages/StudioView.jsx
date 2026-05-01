import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, MapPin, X, ChevronDown, Upload } from "lucide-react";

function ImageUploadOverlay({ onUpload }) {
  const ref = useRef();
  return (
    <>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => {
          const file = e.target.files[0];
          if (file) onUpload(URL.createObjectURL(file));
          e.target.value = "";
        }}
      />
      <button
        onClick={e => { e.stopPropagation(); ref.current.click(); }}
        className="absolute top-4 left-4 z-20 flex items-center gap-1.5 text-xs tracking-widest uppercase bg-black/60 text-white/70 border border-white/20 px-3 py-2 hover:bg-black/80 hover:text-white transition-all backdrop-blur-sm"
      >
        <Upload className="w-3 h-3" /> Upload Photo
      </button>
    </>
  );
}

const experiences = [
  {
    index: "01",
    company: "Rapidus Design Solutions",
    tag: "Semiconductor Startup · Santa Clara",
    period: "Nov 2025 – Present",
    role: "Customer Enablement Manager",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=85&fit=crop",
    imageFocus: "center 40%",
    highlights: [
      "Own end-to-end customer portal — onboarding, permissions, escalations & UAT",
      "Champion AI, automation & workflow innovations to unlock scale and efficiency",
      "BI analytics insights delivered directly to Chief of Staff to the President",
      "Partner with engineering, sales, and marketing on portal capability roadmap",
    ],
  },
  {
    index: "02",
    company: "KIOXIA",
    tag: "Formerly Toshiba · $5B IPO 2024 · San Jose",
    period: "2015 – 2024",
    role: "Director, Digital Transformation",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&fit=crop",
    imageFocus: "center 50%",
    highlights: [
      "Led global team of 10 — migrating legacy CRM, ERP & forecasting to cloud",
      "$500K annual savings delivered · 85% faster S&OP turnaround",
      "Built 120-user BI analytics ecosystem from zero after direct C-suite pitch",
      "Eliminated $50M contract violation exposure through compliance framework",
      "Directed $2B supply/demand campaigns across 1, 3 & 5-year horizons",
    ],
  },
  {
    index: "03",
    company: "SanDisk",
    tag: "Flash Storage Leader · San Jose",
    period: "2012 – 2015",
    role: "Strategy Consultant & Operations Analyst",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1400&q=85&fit=crop",
    imageFocus: "center 60%",
    highlights: [
      "Supported $1.1B FusionIO acquisition — due diligence & integration strategy",
      "Built TAM/SOM models mapping PCIe/SATA/SAS segments across $2B SSD market",
      "Managed $6B NAND supply chain S&OP with real-time global coordination",
      "Reduced execution time 40% via linear programming automation",
    ],
  },
];

const skills = [
  "Digital Transformation", "Business Intelligence", "Data Strategy",
  "S&OP Planning", "Change Management", "Power BI / Tableau",
  "SQL · Python", "Azure / SQL Server", "Product Strategy",
  "Demand Forecasting", "Customer Enablement", "Agile Operations",
  "SAP BI/BO", "Linear Optimization", "Six Sigma · Lean",
];

export default function StudioView({ onSwitch }) {
  const [activeCard, setActiveCard] = useState(null);
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&q=90&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3");
  const [cardImages, setCardImages] = useState(experiences.map(e => e.image));
  const updateCardImage = (i, url) => setCardImages(prev => prev.map((img, idx) => idx === i ? url : img));

  return (
    <div className="min-h-screen bg-black text-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", position: "relative", zIndex: 9998 }}>

      {/* ── FLOATING NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-8 py-6"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)" }}>
        <span className="text-sm font-light tracking-[0.3em] uppercase text-white/70">Jason McBride</span>
        <div className="flex items-center gap-6">
          <a href="mailto:jasonmcbride.mba@gmail.com"
            className="text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors hidden md:block">
            Contact
          </a>
          <button onClick={onSwitch}
            className="text-xs tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-white/50 hover:border-white/60 hover:text-white transition-all">
            ⇄ Switch
          </button>
        </div>
      </nav>

      {/* ── HERO — full bleed ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative flex items-end"
        style={{ height: "100vh", minHeight: 600 }}
      >
        <img
          src={heroImage}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.4)" }}
        />
        <ImageUploadOverlay onUpload={setHeroImage} />
        {/* Gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }} />

        <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs tracking-[0.6em] uppercase text-white/50 mb-6 font-light">
            Technology Leadership · Digital Transformation · Strategy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white leading-[0.88] mb-8"
            style={{
              fontSize: "clamp(4rem, 13vw, 10rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
            }}>
            Jason<br />
            <span style={{ fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.82)" }}>McBride</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6">
            <a href="mailto:jasonmcbride.mba@gmail.com"
              className="flex items-center gap-2 text-sm font-semibold bg-white text-black px-6 py-3 hover:bg-white/90 transition-colors">
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors">
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-white/30 text-sm hidden md:block">·</span>
            <span className="text-white/40 text-sm font-light flex items-center gap-1.5 hidden md:block">
              <MapPin className="w-3 h-3 inline mr-1" />Goleta, CA
            </span>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-[0.4em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </motion.div>

      {/* ── INTRO STRIP ── */}
      <div className="px-8 md:px-16 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed"
              style={{ fontStyle: "italic" }}>
              "Director-level executive with 12+ years turning data chaos into elegant strategy across Fortune 500 technology."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { v: "$500K", l: "Savings Delivered" },
              { v: "5×",    l: "Customer Growth" },
              { v: "120+",  l: "Stakeholders" },
              { v: "12+",   l: "Years Exp." },
            ].map((s, i) => (
              <div key={i} className="border-t border-white/10 pt-4">
                <div className="text-3xl font-black text-white leading-none" style={{ letterSpacing: "-0.04em" }}>{s.v}</div>
                <div className="text-xs text-white/40 mt-1.5 tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── EXPERIENCE — full-bleed photo grid ── */}
      <div className="px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.6em] uppercase text-white/30 mb-12">Selected Experience</p>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: 2 }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: activeCard === i ? 480 : 320, transition: "height 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
                  <img
                    src={cardImages[i]}
                    alt={exp.company}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{
                      objectPosition: exp.imageFocus,
                      filter: "brightness(0.3) saturate(0.3)",
                    }}
                  />
                  <ImageUploadOverlay onUpload={url => updateCardImage(i, url)} />
                  {/* Overlay */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%)" }} />

                  {/* Index */}
                  <div className="absolute top-8 right-8 font-black text-white/10"
                    style={{ fontSize: "clamp(4rem, 10vw, 8rem)", letterSpacing: "-0.05em", lineHeight: 1 }}>
                    {exp.index}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <span className="text-xs tracking-[0.4em] uppercase text-white/40 mb-3">{exp.tag}</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                      <h3 className="font-black text-white leading-tight"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-light text-white/50">{exp.period}</span>
                        <span className="text-xs tracking-[0.3em] uppercase text-white/40 border border-white/20 px-3 py-1.5">
                          {activeCard === i ? "Close" : "View"}
                        </span>
                      </div>
                    </div>

                    {/* Expandable detail */}
                    <AnimatePresence>
                      {activeCard === i && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.4 }}
                          className="mt-8 pt-6 border-t border-white/10"
                          onClick={e => e.stopPropagation()}
                        >
                          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-5">{exp.role}</p>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {exp.highlights.map((h, k) => (
                              <li key={k} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                                <span className="text-white/20 shrink-0 mt-0.5">—</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS — horizontal flowing list ── */}
      <div className="px-8 md:px-16 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.6em] uppercase text-white/30 mb-12">Core Competencies</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="text-sm font-light text-white/60 border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white/90 transition-all cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <div className="px-8 md:px-16 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {[
            { degree: "MBA", school: "University of Southern California", detail: "Marshall School of Business" },
            { degree: "B.S. Business Administration", school: "California State University", detail: "Finance & Management" },
          ].map((e, i) => (
            <motion.div key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 flex gap-6 items-start"
              style={{ background: "#0A0A0A" }}>
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                <span className="text-white/60 text-xs font-bold tracking-widest">{i === 0 ? "MBA" : "BS"}</span>
              </div>
              <div>
                <p className="font-semibold text-white/90">{e.degree}</p>
                <p className="text-sm text-white/40 mt-0.5">{e.school}</p>
                <p className="text-xs text-white/25 mt-0.5">{e.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CONTACT FOOTER ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-8 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <p className="text-xs tracking-[0.6em] uppercase text-white/30 mb-6">Get in Touch</p>
            <p className="font-black text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.04em", fontStyle: "italic", fontWeight: 200 }}>
              Let's build<br />
              <span style={{ fontWeight: 900, fontStyle: "normal" }}>something great.</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:jasonmcbride.mba@gmail.com"
              className="flex items-center gap-3 text-base font-semibold bg-white text-black px-8 py-4 hover:bg-white/90 transition-colors">
              <Mail className="w-4 h-4" /> jasonmcbride.mba@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-light text-white/50 border border-white/15 px-8 py-4 hover:border-white/40 hover:text-white/80 transition-all">
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-white/10 flex justify-between items-center">
          <span className="text-xs text-white/20 tracking-widest">© {new Date().getFullYear()} Jason McBride</span>
          <span className="text-xs text-white/20 tracking-widest">(408) 609-8558 · Goleta, CA</span>
        </div>
      </motion.div>

    </div>
  );
}