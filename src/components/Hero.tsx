import { ArrowRight, Download, Mail, Linkedin, Github, FileSpreadsheet } from "lucide-react";
import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";

interface HeroProps {
  onContactClick: () => void;
  onViewResumeClick: () => void;
}

export default function Hero({ onContactClick, onViewResumeClick }: HeroProps) {
  const stats = [
    { value: "BCA", label: "Graduate", suffix: "", isText: true },
    { value: "Fresher", label: "Experience Level", suffix: "", isText: true },
    { value: 8, label: "Projects Completed", suffix: "+", isText: false },
    { value: 95, label: "Accuracy Rate", suffix: "%", isText: false },
  ];

  return (
    <section id="hero" className="relative min-h-screen py-24 px-4 flex flex-col justify-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/30 px-3.5 py-1.5 rounded-full"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 font-mono tracking-wider uppercase">
              Available for Freelance & Full-time Roles
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">Mohammed Rabeeh T</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 font-display"
            >
              Data Analyst 
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans"
            >
              I transform raw data into actionable insights through rigorous data analysis, creative visualization, and business intelligence that powers strategic decisions.
            </motion.p>
          </div>

          {/* Social Links & Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-755 text-white rounded-xl font-medium flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-blue-600/25 cursor-pointer hover:scale-103"
            >
              Contact Me
              <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              id="hero-resume-btn"
              onClick={onViewResumeClick}
              className="w-full sm:w-auto px-6 py-3 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer hover:scale-103 font-sans"
            >
              <Download className="w-4.5 h-4.5 text-blue-500" />
              View Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-6 pt-4 text-slate-500 dark:text-slate-400"
          >
            <a id="hero-social-linkedin" href="https://www.linkedin.com/in/mohammed-rabeeh-t-404141415" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" title="LinkedIn">
              <Linkedin className="w-5.5 h-5.5" />
            </a>
            <a id="hero-social-github" href="https://github.com/Mohammed-Rabeeh" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200" title="GitHub">
              <Github className="w-5.5 h-5.5" />
            </a>
            <a id="hero-social-email" href="mailto:rabeehmuhammed911@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" title="Email">
              <Mail className="w-5.5 h-5.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="max-w-6xl mx-auto w-full mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/30 dark:bg-[#030712]/40 border border-slate-950/10 dark:border-white/10 glass-panel shadow-sm"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 border-r border-slate-950/10 dark:border-white/5 last:border-r-0">
              <span className="block text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-500 font-display">
                {stat.isText ? (
                  <span>{stat.value}</span>
                ) : (
                  <AnimatedCounter value={stat.value as number} suffix={stat.suffix} />
                )}
              </span>
              <span className="block text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
