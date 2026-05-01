import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, FileText, Lock, Eye, ChevronRight, AlertTriangle } from "lucide-react";
import Redacted from "@/components/Redacted";
import ScrambleText from "@/components/ScrambleText";

const AVATAR = "https://media.base44.com/images/public/69f42b9511a51fd215a41bde/1e10132b5_generated_image.png";

const CASE_FILE = {
  id: "CIA-DO-7741-ALPHA",
  classification: "SECRET // NOFORN",
  prepared: "01 MAY 2026",
  subject: "McBride, Jason R.",
  assetId: "ASSET-0042",
  status: "ACTIVE",
  clearance: "TS/SCI",
  threat: "MINIMAL",
};

const experiences = [
  {
    op: "OPERATION NIGHTFALL",
    company: "Toshiba → KIOXIA",
    period: "2021–2024",
    role: "Director, Digital Transformation",
    caseRef: "7741-A",
    classification: "SECRET",
    intel: [
      "Commanded global team of 10 across data science, engineering & analysis — cloud migration of CRM, ERP & forecasting infrastructure",
      "Oracle SCM replacement: [[$500K annual savings]], 85% faster S&OP turnaround — objective achieved ahead of schedule",
      "Architected 'Opportunity-to-Revenue' doctrine covering full SSD product lifecycle — cross-functional adoption across 4 divisions",
    ],
  },
  {
    op: "OPERATION DARKROOM",
    company: "Toshiba",
    period: "2018–2021",
    role: "Sr Manager, Business Intelligence",
    caseRef: "7741-B",
    classification: "SECRET",
    intel: [
      "Established BI unit following direct pitch to C-suite — 120-user analytics ecosystem, cloud deployment, data governance framework",
      "Neutralized [[$50M]] contract violation exposure via execution controls and compliance framework — zero residual liability",
    ],
  },
  {
    op: "OPERATION LONGVIEW",
    company: "Toshiba",
    period: "2015–2018",
    role: "Sr Manager, Strategy & Planning",
    caseRef: "7741-C",
    classification: "TOP SECRET",
    intel: [
      "Directed [[$2B]] bi-annual supply/demand campaigns across 1, 3 & 5-year horizons in an [[$11B]] addressable market",
      "Scaled planning capacity from 10 to 120+ participants supporting 5X customer growth with zero operational disruption",
    ],
  },
  {
    op: "OPERATION CROSSCHECK",
    company: "Western Digital (SanDisk)",
    period: "2014–2015",
    role: "Marketing & Strategy Consultant",
    caseRef: "6612-A",
    classification: "CONFIDENTIAL",
    intel: [
      "Embedded with executive leadership to support [[$1.1B FusionIO acquisition]] — due diligence, integration strategy & assessment",
      "Constructed TAM/SOM intelligence models mapping PCIe/SATA/SAS segments across the $2B SSD theater",
    ],
  },
  {
    op: "OPERATION IRONCLAD",
    company: "Western Digital (SanDisk)",
    period: "2012–2014",
    role: "Operations Analyst",
    caseRef: "6612-B",
    classification: "CONFIDENTIAL",
    intel: [
      "Managed weekly global NAND allocation S&OP across $6B supply chain — real-time coordination across international units",
      "Engineered supply allocation automation via linear programming — 40% reduction in mission execution time",
    ],
  },
];

const skills = [
  { label: "Digital Transformation", level: 95, cat: "LEADERSHIP" },
  { label: "Business Intelligence", level: 92, cat: "LEADERSHIP" },
  { label: "Supply Chain Strategy", level: 88, cat: "OPERATIONS" },
  { label: "Data Engineering", level: 82, cat: "TECHNICAL" },
  { label: "SQL / Power BI", level: 85, cat: "TECHNICAL" },
  { label: "Python / Flask", level: 75, cat: "TECHNICAL" },
  { label: "Change Management", level: 90, cat: "LEADERSHIP" },
  { label: "Six Sigma / Lean", level: 80, cat: "OPERATIONS" },
];

const classColors = {
  "CONFIDENTIAL": "text-blue-400 border-blue-400/40 bg-blue-400/5",
  "SECRET": "text-amber-400 border-amber-400/40 bg-amber-400/5",
  "TOP SECRET": "text-red-400 border-red-400/40 bg-red-400/5",
};

function ClearanceBadge({ level }) {
  return (
    <span className={`font-mono text-xs px-2 py-0.5 border tracking-widest ${classColors[level] || "text-muted-foreground border-border"}`}>
      {level}
    </span>
  );
}

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

export default function AnalystView({ onSwitch }) {
  return (
    <div className="min-h-screen font-mono" style={{ background: "hsl(40,8%,6%)", color: "hsl(40,15%,82%)" }}>
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 border-b"
        style={{ background: "hsl(40,8%,5%)", borderColor: "hsl(36,90%,30%,0.4)" }}
      >
        <span className="text-xs tracking-widest" style={{ color: "hsl(36,90%,45%)" }}>
          ◆ CIA // DIRECTORATE OF OPERATIONS // SECURE PORTAL
        </span>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground tracking-widest">
            CASE: {CASE_FILE.id}
          </span>
          <button
            onClick={onSwitch}
            className="text-xs px-3 py-1 border border-primary/30 text-primary/60 hover:text-primary hover:border-primary transition-all tracking-widest"
          >
            ⇄ SWITCH PROTOCOL
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 space-y-16">

        {/* ASSET PROFILE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border p-8 relative"
          style={{ borderColor: "hsl(36,90%,30%,0.5)", background: "hsl(40,8%,8%)" }}
        >
          {/* Corner cuts */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: "hsl(36,90%,50%)" }} />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: "hsl(36,90%,50%)" }} />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: "hsl(36,90%,50%)" }} />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: "hsl(36,90%,50%)" }} />

          {/* Stamp */}
          <div
            className="absolute top-6 right-8 text-2xl font-display font-black uppercase tracking-widest rotate-[-12deg] opacity-20 select-none pointer-events-none"
            style={{ fontFamily: "'Oswald', sans-serif", color: "hsl(0,75%,45%)", border: "3px solid hsl(0,75%,45%)", padding: "4px 12px" }}
          >
            SECRET
          </div>

          <div className="flex gap-6 items-start">
            {/* Photo */}
            <div className="shrink-0 relative">
              <img
                src={AVATAR}
                alt="Asset"
                className="w-28 h-28 object-cover grayscale contrast-110"
                style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.85)", border: "2px solid hsl(36,90%,30%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-0.5">
                <span className="text-xs tracking-widest" style={{ color: "hsl(36,90%,50%)" }}>ASSET PHOTO</span>
              </div>
            </div>

            {/* File fields */}
            <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-3 text-xs">
              {[
                ["CASE FILE NO.", CASE_FILE.id],
                ["CLASSIFICATION", CASE_FILE.classification],
                ["SUBJECT", CASE_FILE.subject],
                ["ASSET ID", CASE_FILE.assetId],
                ["OPERATIONAL STATUS", CASE_FILE.status],
                ["CLEARANCE", CASE_FILE.clearance],
                ["THREAT ASSESSMENT", CASE_FILE.threat],
                ["DATE PREPARED", CASE_FILE.prepared],
              ].map(([key, val]) => (
                <div key={key}>
                  <div className="text-muted-foreground tracking-widest mb-0.5">{key}:</div>
                  <div
                    className="tracking-wider font-bold"
                    style={{ color: key === "CLASSIFICATION" ? "hsl(36,90%,55%)" : "hsl(40,15%,88%)" }}
                  >
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: "hsl(36,90%,20%)" }}>
            <p className="text-xs tracking-widest text-muted-foreground mb-2">BIOGRAPHICAL SUMMARY:</p>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(40,15%,78%)" }}>
              Subject is a senior-level asset with demonstrated capability in digital transformation, data intelligence, and strategic operations across Fortune 500 technology companies. Specializes in cross-functional command, cloud infrastructure modernization, and high-value supply chain operations. Last known location: Goleta, CA. Contact: <span style={{ color: "hsl(36,90%,55%)" }}>jasonmcbride.mba@gmail.com</span> · (408) 609-8558.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="mailto:jasonmcbride.mba@gmail.com" className="flex items-center gap-2 text-xs px-3 py-1.5 border transition-all" style={{ borderColor: "hsl(36,90%,30%)", color: "hsl(36,90%,55%)" }}>
              <Mail className="w-3 h-3" /> COMMS CHANNEL
            </a>
            <a href="tel:4086098558" className="flex items-center gap-2 text-xs px-3 py-1.5 border transition-all" style={{ borderColor: "hsl(36,90%,30%)", color: "hsl(36,90%,55%)" }}>
              <Phone className="w-3 h-3" /> (408) 609-8558
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs px-3 py-1.5 border transition-all" style={{ borderColor: "hsl(36,90%,30%)", color: "hsl(36,90%,55%)" }}>
              <Linkedin className="w-3 h-3" /> OPEN SOURCE PROFILE
            </a>
            <span className="flex items-center gap-2 text-xs px-3 py-1.5 border" style={{ borderColor: "hsl(40,8%,18%)", color: "hsl(40,15%,50%)" }}>
              <MapPin className="w-3 h-3" /> GOLETA, CA
            </span>
          </div>
        </motion.div>

        {/* OPERATIONS RECORD */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <FileText className="w-4 h-4" style={{ color: "hsl(36,90%,50%)" }} />
            <h2 className="text-sm tracking-[0.4em] uppercase" style={{ color: "hsl(36,90%,55%)" }}>
              Operations Record
            </h2>
            <div className="flex-1 h-px" style={{ background: "hsl(36,90%,20%)" }} />
            <span className="text-xs text-muted-foreground tracking-widest">DECLASSIFIED PER E.O. 13526</span>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border p-6 relative"
                style={{ borderColor: "hsl(36,90%,20%)", background: "hsl(40,8%,7%)" }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: "hsl(36,90%,40%)" }} />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: "hsl(36,90%,40%)" }} />

                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-xs tracking-widest mb-1" style={{ color: "hsl(36,90%,40%)" }}>
                      {exp.op} // REF: {exp.caseRef}
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif", color: "hsl(40,15%,90%)" }}>
                      {exp.role}
                    </h3>
                    <div className="text-xs text-muted-foreground tracking-wider mt-0.5">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <ClearanceBadge level={exp.classification} />
                    <span className="text-xs px-2 py-0.5 border border-border text-muted-foreground tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.intel.map((item, j) => (
                    <li key={j} className="text-sm leading-relaxed flex gap-2" style={{ color: "hsl(40,15%,72%)" }}>
                      <ChevronRight className="w-3 h-3 shrink-0 mt-1" style={{ color: "hsl(36,90%,40%)" }} />
                      <span><RedactedInline text={item} /></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CAPABILITY ASSESSMENT */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Eye className="w-4 h-4" style={{ color: "hsl(36,90%,50%)" }} />
            <h2 className="text-sm tracking-[0.4em] uppercase" style={{ color: "hsl(36,90%,55%)" }}>
              Capability Assessment
            </h2>
            <div className="flex-1 h-px" style={{ background: "hsl(36,90%,20%)" }} />
          </div>

          <div className="grid gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs tracking-widest w-20 shrink-0" style={{ color: "hsl(36,90%,35%)" }}>
                  {skill.cat}
                </span>
                <span className="text-xs w-48 shrink-0" style={{ color: "hsl(40,15%,75%)" }}>{skill.label}</span>
                <div className="flex-1 h-1.5 relative" style={{ background: "hsl(40,8%,14%)" }}>
                  <motion.div
                    className="absolute inset-y-0 left-0"
                    style={{ background: "hsl(36,90%,45%)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs w-10 text-right shrink-0" style={{ color: "hsl(36,90%,45%)" }}>
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <div
          className="text-center pt-8 border-t text-xs space-y-2"
          style={{ borderColor: "hsl(36,90%,20%)" }}
        >
          <div className="flex items-center justify-center gap-2" style={{ color: "hsl(36,90%,35%)" }}>
            <Lock className="w-3 h-3" />
            <span className="tracking-widest">DOCUMENT CONTROLLED // DO NOT REPRODUCE WITHOUT AUTHORIZATION</span>
          </div>
          <p className="text-muted-foreground/40 tracking-widest">
            © {new Date().getFullYear()} JASON McBRIDE // CASE FILE {CASE_FILE.id}
          </p>
        </div>
      </div>
    </div>
  );
}