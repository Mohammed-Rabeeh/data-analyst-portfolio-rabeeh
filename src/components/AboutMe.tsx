import { BookOpen, Target, Lightbulb, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export default function AboutMe() {
  const strengths = [
    {
      icon: <Lightbulb className="w-5 h-5 text-theme-primary" />,
      title: "Analytical Problem Solving",
      desc: "Deconstructing obscure complex issues into manageable, logical parts and querying data to pinpoint precise root causes."
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-500" />,
      title: "Business Translation",
      desc: "Speaking both coding/math and commercial business dialects to successfully map raw numbers to corporate strategy."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      title: "Data Storytelling",
      desc: "Designing tailored narratives and dashboards that keep executive decision-makers engaged and instantly informed."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Safi Institute of Advanced Study , University of Calicut",
      period: "2023 - 2026",
      description: "Focused on programming paradigms, database design, software development cycles, and advanced analytics workflows."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-theme-primary font-mono tracking-widest uppercase"
          >
            Behind the Numbers
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-theme-fg font-display mt-2"
          >
            About Me
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-theme-primary mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start reveal">
          {/* Professional Narrative (Left column) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-xl font-bold text-theme-fg font-display">
                Professional Journey
              </h4>
              <p className="text-theme-muted leading-relaxed">
                As a passionate and motivated Bachelor of Computer Application (BCA) Graduate, I am excited to kickstart my career as a Fresher Data Analyst. I thrive at the critical intersection of technical databases, programming frameworks, and business logic, translating complex datasets into actionable insights.
              </p>
              <p className="text-theme-muted leading-relaxed">
                I specialize in querying relational databases under SQL, scripting analysis routines in Python, and building clean BI dashboards. By combining computer application theory with data mining practices, I aim to enable continuous operational improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-2xl glass-card"
            >
              <h4 className="text-sm font-semibold text-theme-muted font-mono flex items-center gap-2 mb-2">
                <Briefcase className="w-4.5 h-4.5 text-theme-primary" /> CAREER GOALS
              </h4>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                My immediate goal is to secure an entry-level position as an Associate Data Analyst where I can deploy my database systems knowledge and business intelligence training to deliver clear, business-focused insights and optimize key operational metrics.
              </p>
            </motion.div>
          </div>

          {/* Education & Strengths (Right column) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Academic Background */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-theme-fg font-display flex items-center gap-2">
                <GraduationCap className="w-5.5 h-5.5 text-theme-primary" /> Educational Background
              </h4>
              <div className="relative border-l-2 border-theme-border ml-3.5 pl-5.5 space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group"
                  >
                    {/* Ring Indicator */}
                    <span className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-theme-bg border-2 border-theme-primary group-hover:scale-125 transition-transform duration-200 shadow-md shadow-theme-primary/20"></span>
                    <span className="text-xs font-mono font-bold text-theme-primary font-semibold tracking-wide">
                      {edu.period}
                    </span>
                    <h5 className="text-base font-bold text-theme-fg mt-0.5">
                      {edu.degree}
                    </h5>
                    <p className="text-xs font-semibold text-theme-muted">
                      {edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-theme-muted mt-1.5 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xl font-bold text-theme-fg font-display">
                Key Strengths
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {strengths.map((str, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl glass-card glass-card-hover"
                  >
                    <div className="p-2 rounded-lg bg-theme-primary/10 border border-theme-primary/20 shrink-0 self-start">
                      {str.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-theme-fg text-sm sm:text-base">
                        {str.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-theme-muted mt-0.5 leading-relaxed">
                        {str.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
