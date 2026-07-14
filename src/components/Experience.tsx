import { Calendar, GraduationCap, MapPin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function Experience() {
  const githubUrl = ""; // No GitHub repo URL available for Arivolam yet, so it is hidden.

  return (
    <section id="experience" className="py-24 px-4 bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-theme-fg font-display mt-2"
          >
            Featured Academic Project
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-theme-primary mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Timeline Path Container */}
        <div className="relative border-l-2 border-theme-border ml-4 md:ml-12 pl-6 md:pl-12 space-y-16 reveal">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group glass-card glass-card-hover p-6 md:p-8 rounded-2xl"
          >
            {/* Timeline Bullet Anchor */}
            <div className="absolute -left-[31px] md:-left-[55px] top-6 w-10 h-10 rounded-xl bg-theme-bg border border-theme-border flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-theme-primary transition-all duration-300">
              <GraduationCap className="w-5 h-5 text-theme-primary" />
            </div>

            {/* Top Meta Details Row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-theme-border/60 pb-6 mb-6">
              <div className="space-y-1.5 flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold mb-2 bg-theme-primary/10 text-theme-primary border border-theme-primary/20">
                  🎓 CAPSTONE PROJECT
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-theme-fg font-display tracking-tight leading-tight group-hover:text-theme-primary transition-colors duration-200">
                  Arivolam – Academic Knowledge Management Portal
                </h4>
                <div className="mt-2.5">
                  <p className="text-sm sm:text-base font-semibold text-theme-fg leading-snug">
                    SAFI Institute of Advanced Study
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-theme-muted">
                    Affiliated to the University of Calicut
                  </p>
                </div>

                {/* Tech Stack Section */}
                <div className="flex flex-wrap gap-1.5 pt-3.5">
                  {["Python", "SQL", "HTML", "CSS", "JavaScript", "Git"].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-theme-sec-bg border border-theme-border text-theme-muted hover:border-theme-primary hover:text-theme-primary hover:bg-theme-primary/5 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Calendar, Location metadata */}
              <div className="flex flex-row md:flex-col items-center md:items-end text-xs font-mono text-theme-muted gap-2.5 self-start shrink-0 flex-wrap">
                <span className="flex items-center gap-1.5 bg-theme-sec-bg/80 border border-theme-border px-2.5 py-1.5 rounded-lg shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-theme-primary" />
                  <span className="font-semibold text-theme-fg">Jan 2025 – Apr 2026</span>
                </span>
                <span className="flex items-center gap-1.5 bg-theme-sec-bg/80 border border-theme-border px-2.5 py-1.5 rounded-lg shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-theme-primary" />
                  <span className="font-semibold text-theme-fg">Calicut, Kerala</span>
                </span>
              </div>
            </div>

            {/* Bullet Accomplishments */}
            <div className="space-y-5">
              <ul className="space-y-3.5 pl-1 text-theme-muted leading-relaxed font-sans text-xs sm:text-sm">
                <li className="flex items-start gap-2.5 group/li">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary mt-2 shrink-0 group-hover/li:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover/li:text-theme-fg transition-colors duration-150">
                    Developed <strong className="text-theme-fg font-semibold">Arivolam</strong>, a centralized academic knowledge management portal for SAFI Institute of Advanced Study.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 group/li">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary mt-2 shrink-0 group-hover/li:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover/li:text-theme-fg transition-colors duration-150">
                    Designed and managed a relational SQL database for users, academic resources, and document management.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 group/li">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary mt-2 shrink-0 group-hover/li:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover/li:text-theme-fg transition-colors duration-150">
                    Collaborated with team members using Git for version control, code reviews, and project coordination.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 group/li">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary mt-2 shrink-0 group-hover/li:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover/li:text-theme-fg transition-colors duration-150">
                    Improved information accessibility by implementing an organized and scalable data structure.
                  </span>
                </li>
              </ul>

              {/* Outcomes Section */}
              <div className="mt-6 pt-5 border-t border-theme-border/60">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-theme-muted mb-3 font-display">
                  Key Outcomes
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SQL Database Design",
                    "Team Collaboration",
                    "Git Version Control",
                    "Database Management",
                    "Problem Solving"
                  ].map((outcome) => (
                    <span 
                      key={outcome} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-theme-primary/5 text-theme-primary border border-theme-primary/10 hover:bg-theme-primary/10 hover:border-theme-primary/30 transition-all duration-200 shadow-sm"
                    >
                      <span className="text-theme-primary text-xs">✔</span>
                      <span className="text-theme-fg font-medium">{outcome}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Conditional View Project Button */}
              {githubUrl && (
                <div className="mt-6 pt-4 flex items-center justify-start">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-primary text-theme-primary-fg hover:bg-theme-accent border border-theme-border shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-all duration-250 font-semibold text-xs sm:text-sm"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
