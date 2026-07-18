import { ArrowRight, Download, Mail, Linkedin, Github, Database, LayoutDashboard, BarChart3, LineChart, Terminal, Table, Layers, GraduationCap, FolderKanban, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onContactClick: () => void;
  onViewProjectsClick: () => void;
  onViewResumeClick: () => void;
}

// Animation variants for premium enterprise stats stagger load
const statsContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom premium ease-out (cubic-bezier)
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero({ onContactClick, onViewProjectsClick, onViewResumeClick }: HeroProps) {
  const stats = [
    { icon: GraduationCap, title: "BCA Graduate" },
    { icon: BarChart3, title: "Data Analyst" },
    { icon: FolderKanban, title: "2 Projects" },
    { icon: BadgeCheck, title: "Certification" },
  ];

  return (
    <section id="hero" className="relative min-h-screen py-24 px-4 flex flex-col justify-center overflow-hidden bg-theme-bg dark:bg-[#020617] transition-colors duration-300">
      
      {/* Dynamic Grid Background decoration with gradientShift */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04] dark:opacity-[0.07] pointer-events-none"></div>

      {/* Layered gradients for deep premium depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] pointer-events-none dark:block hidden"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none dark:block hidden blur-3xl"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none dark:block hidden blur-3xl"></div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl">
          
          {/* Staggered entrance 1: Premium Animated Open to Work Badge */}
          <div className="rise-in rise-1">
            <div
              className="chip-float inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/90 to-cyan-500/90 dark:from-blue-500/60 dark:to-cyan-400/60 backdrop-blur-md border border-cyan-300/40 dark:border-cyan-400/30 px-4 py-1.5 rounded-full select-none shadow-[0_0_8px_rgba(34,211,238,0.15)] dark:shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:scale-105 transition-all duration-300 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.4)] border border-emerald-300/30"></span>
              <span className="text-[11px] font-extrabold text-white font-sans tracking-widest uppercase flex items-center gap-1.5">
                <span>🚀</span> OPEN TO WORK
              </span>
            </div>
          </div>

          {/* Staggered entrance 2: Portrait Avatar Bubble with premium-hero-float and premium-hero-glow */}
          <div className="rise-in rise-2 relative">
            {/* Faint radial blue light behind the illustration to create depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>
            
            <div className="premium-hero-float premium-hero-glow w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white relative p-[2px] z-10">
              <div className="w-full h-full rounded-full bg-theme-bg backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden p-3 group">
                {/* Embedded decorative glowing mesh network lines */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none"></div>
                
                {/* Main analytical elements arranged in an elegant cluster */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Glassmorphic Grid / Connection Hub */}
                  <div className="grid grid-cols-2 gap-2.5 z-10 p-1">
                    <div className="flex items-center justify-center bg-theme-primary/10 p-1.5 rounded-lg border border-theme-primary/20 shadow-inner group-hover:scale-110 transition-all duration-300">
                      <LayoutDashboard className="w-4 h-4 text-theme-primary" />
                    </div>
                    <div className="flex items-center justify-center bg-theme-accent/10 p-1.5 rounded-lg border border-theme-accent/20 shadow-inner group-hover:scale-110 transition-all duration-300 delay-75">
                      <BarChart3 className="w-4 h-4 text-theme-accent" />
                    </div>
                    <div className="flex items-center justify-center bg-indigo-500/10 p-1.5 rounded-lg border border-indigo-500/20 shadow-inner group-hover:scale-110 transition-all duration-300 delay-100">
                      <Database className="w-4 h-4 text-indigo-400 dark:text-indigo-300" />
                    </div>
                    <div className="flex items-center justify-center bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20 shadow-inner group-hover:scale-110 transition-all duration-300 delay-150">
                      <LineChart className="w-4 h-4 text-emerald-400 dark:text-emerald-300" />
                    </div>
                  </div>
                  
                  {/* Center linking dot */}
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Staggered entrance 3: Main Heading */}
            <h1
              className="rise-in rise-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-fg leading-tight"
            >
              Hi, I'm <span className="text-theme-primary">Mohammed Rabeeh T</span>
            </h1>

            {/* Staggered entrance 4: Subheading */}
            <h2
              className="rise-in rise-4 text-xl sm:text-2xl font-semibold text-theme-muted font-display"
            >
              Data Analyst
            </h2>

            {/* Staggered entrance 4b: Key Tech Skills Line */}
            <div className="rise-in rise-5 flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 select-none mt-4 font-sans">
              <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-transparent hover:border-theme-primary/10 hover:bg-theme-primary/5 transition-all duration-[250ms] ease-out cursor-default hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                <Terminal className="w-[18px] h-[18px] text-theme-primary opacity-100 transition-colors duration-[250ms] group-hover:text-theme-accent shrink-0" strokeWidth={2} />
                <span className="text-[16px] font-semibold text-theme-fg transition-colors duration-[250ms] leading-none">Python</span>
              </div>
              
              <span className="text-theme-border/50 select-none font-bold text-sm hidden sm:inline self-center">•</span>
              
              <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-transparent hover:border-theme-primary/10 hover:bg-theme-primary/5 transition-all duration-[250ms] ease-out cursor-default hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                <Database className="w-[18px] h-[18px] text-theme-primary opacity-100 transition-colors duration-[250ms] group-hover:text-theme-accent shrink-0" strokeWidth={2} />
                <span className="text-[16px] font-semibold text-theme-fg transition-colors duration-[250ms] leading-none">SQL</span>
              </div>
              
              <span className="text-theme-border/50 select-none font-bold text-sm hidden sm:inline self-center">•</span>
              
              <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-transparent hover:border-theme-primary/10 hover:bg-theme-primary/5 transition-all duration-[250ms] ease-out cursor-default hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                <Table className="w-[18px] h-[18px] text-theme-primary opacity-100 transition-colors duration-[250ms] group-hover:text-theme-accent shrink-0" strokeWidth={2} />
                <span className="text-[16px] font-semibold text-theme-fg transition-colors duration-[250ms] leading-none">Excel</span>
              </div>
              
              <span className="text-theme-border/50 select-none font-bold text-sm hidden sm:inline self-center">•</span>
              
              <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-transparent hover:border-theme-primary/10 hover:bg-theme-primary/5 transition-all duration-[250ms] ease-out cursor-default hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                <BarChart3 className="w-[18px] h-[18px] text-theme-primary opacity-100 transition-colors duration-[250ms] group-hover:text-theme-accent shrink-0" strokeWidth={2} />
                <span className="text-[16px] font-semibold text-theme-fg transition-colors duration-[250ms] leading-none">Power BI</span>
              </div>
              
              <span className="text-theme-border/50 select-none font-bold text-sm hidden sm:inline self-center">•</span>
              
              <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-transparent hover:border-theme-primary/10 hover:bg-theme-primary/5 transition-all duration-[250ms] ease-out cursor-default hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                <Layers className="w-[18px] h-[18px] text-theme-primary opacity-100 transition-colors duration-[250ms] group-hover:text-theme-accent shrink-0" strokeWidth={2} />
                <span className="text-[16px] font-semibold text-theme-fg transition-colors duration-[250ms] leading-none">Pandas</span>
              </div>
            </div>

            {/* Staggered entrance 5: Intro Paragraph */}
            <p
              className="rise-in rise-5 text-base sm:text-lg text-theme-muted max-w-2xl mx-auto leading-relaxed font-sans"
            >
              I transform raw data into actionable insights through rigorous data analysis, creative visualization, and business intelligence that powers strategic decisions.
            </p>
          </div>

          {/* Staggered entrance 6: Social Links & CTA buttons with hover shines */}
          <div
            className="rise-in rise-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2"
          >
            <button
              id="hero-projects-btn"
              onClick={onViewProjectsClick}
              className="shine w-full sm:w-auto px-6 py-3 bg-theme-fg text-theme-bg hover:bg-theme-fg/90 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer hover:scale-103 font-sans"
            >
              <BarChart3 className="w-4.5 h-4.5 text-theme-primary" />
              View Projects
            </button>
            <button
              id="hero-resume-btn"
              onClick={onViewResumeClick}
              className="shine w-full sm:w-auto px-6 py-3 border border-theme-border bg-theme-sec-bg text-theme-fg hover:bg-theme-bg rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer hover:scale-103 font-sans"
            >
              <Download className="w-4.5 h-4.5 text-theme-primary" />
              View Resume
            </button>
            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="shine w-full sm:w-auto px-6 py-3 bg-theme-primary hover:bg-theme-accent text-theme-primary-fg rounded-xl font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-theme-primary/25 cursor-pointer hover:scale-103 font-sans"
            >
              Contact Me
              <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Social Channels Row */}
          <div
            className="rise-in rise-6 flex items-center justify-center gap-6 pt-6"
          >
            <a
              id="hero-social-linkedin"
              href="https://www.linkedin.com/in/mohammed-rabeeh-t-404141415"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button-premium group flex items-center justify-center w-12 h-12 rounded-xl border border-theme-primary/15 bg-theme-primary/5 dark:border-theme-primary/25 text-theme-primary/90 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-theme-primary/10 dark:hover:bg-theme-primary/20 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] active:bg-theme-primary/20 dark:active:bg-theme-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg transition-all duration-[250ms] ease-out cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="w-[22px] h-[22px] transition-colors duration-[250ms]" strokeWidth={2} />
            </a>
            <a
              id="hero-social-github"
              href="https://github.com/Mohammed-Rabeeh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button-premium group flex items-center justify-center w-12 h-12 rounded-xl border border-theme-primary/15 bg-theme-primary/5 dark:border-theme-primary/25 text-theme-primary/90 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-theme-primary/10 dark:hover:bg-theme-primary/20 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] active:bg-theme-primary/20 dark:active:bg-theme-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg transition-all duration-[250ms] ease-out cursor-pointer"
              title="GitHub"
            >
              <Github className="w-[22px] h-[22px] transition-colors duration-[250ms]" strokeWidth={2} />
            </a>
            <a
              id="hero-social-email"
              href="mailto:rabeehmuhammed911@gmail.com"
              className="social-button-premium group flex items-center justify-center w-12 h-12 rounded-xl border border-theme-primary/15 bg-theme-primary/5 dark:border-theme-primary/25 text-theme-primary/90 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-theme-primary/10 dark:hover:bg-theme-primary/20 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] active:bg-theme-primary/20 dark:active:bg-theme-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg transition-all duration-[250ms] ease-out cursor-pointer"
              title="Email"
            >
              <Mail className="w-[22px] h-[22px] transition-colors duration-[250ms]" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Stats Section - Premium unified enterprise analytics panel */}
      <div className="max-w-6xl mx-auto w-full mt-16 relative z-10 px-4">
        {/* Subtle blue radial glow behind the card */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.12)_0%,transparent_70%)] pointer-events-none -translate-y-4 blur-2xl z-0" />

        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full rounded-[28px] border border-[rgba(96,165,250,0.18)] bg-gradient-to-br from-[#17233D]/90 to-[#1E2B49]/90 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_25px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(96,165,250,0.12)] overflow-x-auto md:overflow-x-visible scrollbar-none transform-gpu"
        >
          <div className="grid grid-cols-4 w-full min-w-[768px] md:min-w-0">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              
              // Divider borders using rgba(255,255,255,0.05) - border-white/5
              const borderClasses = i < 3 ? "border-r border-[rgba(255,255,255,0.05)]" : "";

              return (
                <motion.div
                  key={i}
                  variants={statCardVariants}
                  className={`group relative flex flex-col items-center justify-center text-center py-14 px-10 bg-transparent transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-[4px] hover:shadow-[0_20px_45px_rgba(96,165,250,0.18)] cursor-default select-none overflow-hidden min-h-[160px] md:min-h-[180px] border-[rgba(255,255,255,0.05)] ${borderClasses} transform-gpu`}
                >
                  {/* Soft subtle blue radial glow on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.14)_0%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Content wrapper for smooth slight lift hover animation */}
                  <div className="flex flex-col items-center justify-center transition-all duration-300 ease-out">
                    {/* Icon with #60A5FA, soft outer glow, slightly larger visual weight */}
                    <div className="mb-6 text-[#60A5FA] shrink-0 relative flex items-center justify-center">
                      {/* Ambient glow effect behind icon */}
                      <div className="absolute w-8 h-8 rounded-full bg-[#60A5FA]/10 blur-md opacity-40 group-hover:opacity-85 transition-opacity duration-300" />
                      <Icon className="w-9 h-9 relative z-10 filter drop-shadow-[0_0_12px_rgba(96,165,250,0.35)] group-hover:filter group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all duration-300" strokeWidth={1.8} />
                    </div>

                    {/* Title with font-bold, text-xl, White text (#F8FAFC), balanced spacing, transition on hover to #60A5FA */}
                    <h4 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#60A5FA] font-display tracking-wide leading-tight transition-colors duration-300 px-1 md:px-2 w-full break-words">
                      {stat.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
