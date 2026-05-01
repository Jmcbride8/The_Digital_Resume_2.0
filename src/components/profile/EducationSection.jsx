import { motion } from "framer-motion";
import { GraduationCap, Award, Star } from "lucide-react";

const education = [
  { school: "UCLA Anderson School of Management", degree: "M.B.A.", location: "Los Angeles, CA", code: "ACAD-01" },
  { school: "Georgia Institute of Technology", degree: "B.S. Industrial & Systems Engineering", location: "Atlanta, GA", code: "ACAD-02" },
];

const certifications = [
  { name: "Full Stack Web Development", issuer: "UC Berkeley", code: "CERT-01" },
  { name: "Six Sigma Green Belt", issuer: "Institute of Industrial Engineers", code: "CERT-02" },
  { name: "Lean Manufacturing Green Belt", issuer: "Institute of Industrial Engineers", code: "CERT-03" },
];

export default function EducationSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, hsl(82,55%,42%) 0px, hsl(82,55%,42%) 1px, transparent 1px, transparent 10px)"
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary/60 tracking-[0.4em] uppercase mb-3">◆ TRAINING & QUALIFICATION RECORD</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Credentials
          </h2>
          <div className="h-px w-24 bg-primary mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold uppercase tracking-widest text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-5 border border-primary/20 bg-card hover:border-primary/50 transition-colors group"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
                >
                  <div className="absolute top-0 right-0 w-3 h-3 bg-primary/20 border-b border-l border-primary/40" />
                  <div className="font-mono text-xs text-muted-foreground mb-2">{ed.code}</div>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{ed.school}</h4>
                  <p className="font-mono text-xs text-primary tracking-wider">{ed.degree}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ed.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-display font-bold uppercase tracking-widest text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-5 border border-accent/20 bg-card hover:border-accent/50 transition-colors group"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
                >
                  <div className="absolute top-0 right-0 w-3 h-3 bg-accent/20 border-b border-l border-accent/40" />
                  <div className="font-mono text-xs text-muted-foreground mb-2">{cert.code}</div>
                  <div className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-accent mt-1 shrink-0 fill-accent" />
                    <div>
                      <h4 className="font-bold text-sm mb-1 group-hover:text-accent transition-colors">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}