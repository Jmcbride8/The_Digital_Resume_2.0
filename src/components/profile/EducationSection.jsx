import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { school: "UCLA Anderson School of Management", degree: "M.B.A.", location: "Los Angeles, CA" },
  { school: "Georgia Institute of Technology", degree: "B.S. Industrial & Systems Engineering", location: "Atlanta, GA" },
];

const certifications = [
  { name: "Full Stack Web Development", issuer: "UC Berkeley" },
  { name: "Six Sigma Green Belt", issuer: "Institute of Industrial Engineers" },
  { name: "Lean Manufacturing Green Belt", issuer: "Institute of Industrial Engineers" },
];

export default function EducationSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((ed, i) => (
                <div key={i} className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300">
                  <h3 className="font-semibold mb-1">{ed.school}</h3>
                  <p className="text-sm text-primary font-mono">{ed.degree}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ed.location}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300">
                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}