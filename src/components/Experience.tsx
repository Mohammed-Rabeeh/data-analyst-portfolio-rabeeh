import { Calendar, Briefcase, GraduationCap, MapPin, Search } from "lucide-react";
import { motion } from "motion/react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Project" | "Internship" | "Training";
  bullets: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "capstone-project",
      role: "BCA Capstone Project Lead (Arivolam)",
      company: "SAFI Institute of Advanced Study (Calicut University)",
      period: "2025 - 2026",
      location: "Calicut, Kerala",
      type: "Project",
      bullets: [
        "Led the technical development of Arivolam, an academic knowledge coordination portal for the Safi Institute of Advanced Study, Calicut University.",
        "Architected optimized relational database tables in SQL to handle user credentials, resources meta-logs, and file pointers with full relational integrity.",
        "Collaborated closely with core development peers, coordinating git version control, peer-review pipelines, and system documentation under a structured release timeline."
      ]
    }
  ];

  const getTypeStyle = (type: "Project" | "Internship" | "Training") => {
    switch (type) {
      case "Project":
        return "bg-violet-500/10 text-violet-500 border-violet-500/20";
      case "Training":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Internship":
        return "bg-theme-primary/10 text-theme-primary border-theme-primary/20";
    }
  };

  const getTypeIcon = (type: "Project" | "Internship" | "Training") => {
    switch (type) {
      case "Project":
        return <Search className="w-5 h-5 text-violet-500" />;
      case "Training":
        return <Briefcase className="w-5 h-5 text-emerald-500" />;
      case "Internship":
        return <GraduationCap className="w-5 h-5 text-theme-primary" />;
    }
  };

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
            Academic Projects
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
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group glass-card glass-card-hover p-6 md:p-8 rounded-2xl"
            >
              {/* Timeline Bullet Anchor */}
              <div className="absolute -left-[31px] md:-left-[55px] top-6 w-10 h-10 rounded-xl bg-theme-bg border border-theme-border flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-theme-primary transition-all duration-300">
                {getTypeIcon(exp.type)}
              </div>

              {/* Top Meta Details Row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5-pb-4 mb-4 border-b border-theme-border pb-4">
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-mono tracking-wider font-bold mb-2 border ${getTypeStyle(exp.type)}`}>
                    {exp.type.toUpperCase()}
                  </span>
                  <h4 className="text-xl font-bold text-theme-fg font-display tracking-tight leading-tight">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-theme-primary mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Calendar, Location metadata */}
                <div className="flex flex-col sm:items-end text-xs font-mono text-theme-muted gap-1.5 self-start">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Accomplishments */}
              <ul className="space-y-3.5 pl-5 list-disc text-theme-muted leading-relaxed font-sans text-xs sm:text-sm">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="hover:text-theme-fg transition-colors duration-150">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
