import { Award, ExternalLink, Calendar, Clock, ShieldCheck, FileText } from "lucide-react";
import { motion } from "motion/react";

export default function Certifications() {
  const skills = [
    "Python",
    "Data Analytics",
    "Data Cleaning",
    "Exploratory Data Analysis",
    "Data Visualization",
    "Artificial Intelligence",
    "Machine Learning"
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-theme-primary font-mono tracking-widest uppercase"
          >
            Verified Credentials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-theme-fg font-display mt-2"
          >
            Professional Certifications
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-theme-primary mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Certificate Card Container */}
        <div className="reveal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group glass-card glass-card-hover p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
          >
            {/* Ambient Background decoration to match premium theme */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Icon Block with subtle badge indicator */}
            <div className="w-16 h-16 rounded-2xl bg-theme-primary/10 border border-theme-primary/20 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 group-hover:border-theme-primary transition-all duration-300">
              <Award className="w-8 h-8 text-theme-primary animate-pulse" />
            </div>

            {/* Card Content Grid */}
            <div className="flex-1 space-y-5 w-full">
              
              {/* Header Titles */}
              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-bold text-theme-fg font-display tracking-tight leading-tight">
                  🏆 Data Analytics Using AI
                </h4>

                {/* Organization and Subtitle */}
                <div className="flex flex-col gap-0.5">
                  <p className="text-[15px] sm:text-base font-semibold text-theme-fg/95 dark:text-slate-100">
                    Safi Institute of Advanced Study (Autonomous)
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-400">
                    In collaboration with Bluegen Solutions, Calicut
                  </p>
                </div>
              </div>

              {/* Metadata Row */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-[13px] text-slate-400 font-medium select-none">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>November 2023 – November 2024</span>
                </div>
                <span className="text-slate-600 dark:text-slate-700 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>60-Hour Certificate Course</span>
                </div>
                <span className="text-slate-600 dark:text-slate-700 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>ID: CSA0617/112024</span>
                </div>
              </div>

              {/* Description Paragraph */}
              <p 
                style={{ lineHeight: 1.8 }}
                className="text-xs sm:text-[14px] text-theme-muted max-w-[650px] w-full text-left"
              >
                Successfully completed a 60-hour hands-on certification course focused on Data Analytics and Artificial Intelligence. Gained practical experience in Python, data preprocessing, exploratory data analysis (EDA), data visualization, and the fundamentals of AI and machine learning.
              </p>

              {/* Skills Badges */}
              <div className="space-y-2">
                <p className="text-xs font-mono font-bold tracking-wider text-theme-primary uppercase">Skills Acquired:</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs rounded-lg font-medium border border-blue-500/20 bg-blue-500/5 text-blue-400 select-none hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button block */}
              <div className="pt-4 flex items-center justify-start">
                <a
                  href="https://drive.google.com/file/d/11mXhmQYjeRPsmmx25gojwOqwczqR7MFA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-primary text-theme-primary-fg hover:bg-theme-accent border border-theme-border shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-all duration-250 font-semibold text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
