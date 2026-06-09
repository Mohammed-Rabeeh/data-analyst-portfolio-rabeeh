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
        return "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400 border-violet-100 dark:border-violet-900/30";
      case "Training":
        return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30";
      case "Internship":
        return "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-100 dark:border-blue-900/30";
    }
  };

  const getTypeIcon = (type: "Project" | "Internship" | "Training") => {
    switch (type) {
      case "Project":
        return <Search className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case "Training":
        return <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "Internship":
        return <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mt-2"
          >
            Academic Projects
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Timeline Path Container */}
        <div className="relative border-l-2 border-slate-900/10 dark:border-white/10 ml-4 md:ml-12 pl-6 md:pl-12 space-y-16">
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
              <div className="absolute -left-[31px] md:-left-[55px] top-6 w-10 h-10 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300">
                {getTypeIcon(exp.type)}
              </div>

              {/* Top Meta Details Row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5-pb-4 mb-4 border-b border-slate-905/10 dark:border-white/5 pb-4">
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-mono tracking-wider font-bold mb-2 border ${getTypeStyle(exp.type)}`}>
                    {exp.type.toUpperCase()}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-500 mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Calendar, Location metadata */}
                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1.5 self-start">
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
              <ul className="space-y-3.5 pl-5 list-disc text-slate-650 dark:text-slate-400 leading-relaxed font-sans text-xs sm:text-sm">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
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
