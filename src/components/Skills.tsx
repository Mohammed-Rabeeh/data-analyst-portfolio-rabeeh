import { ReactNode } from "react";
import {
  Code2,
  LineChart,
  BarChart3,
  Database,
  Terminal,
  Table,
  Sparkles,
  Search,
  Layers,
  Calculator,
  Cpu,
  GitBranch,
  Github,
  Wrench,
  FileJson,
  Info
} from "lucide-react";
import { motion } from "motion/react";

interface SkillItem {
  name: string;
  icon: ReactNode;
  tooltip?: string[];
}

interface SkillCategory {
  category: string;
  icon: ReactNode;
  items: SkillItem[];
  accentColor: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming",
      icon: <Code2 className="w-5 h-5 text-theme-primary" />,
      accentColor: "from-blue-600/20 to-indigo-600/20",
      items: [
        { name: "Python", icon: <Terminal className="w-3.5 h-3.5 text-theme-primary" /> },
        { name: "SQL", icon: <Database className="w-3.5 h-3.5 text-cyan-500" /> }
      ]
    },
    {
      category: "Data Analysis",
      icon: <LineChart className="w-5 h-5 text-emerald-500" />,
      accentColor: "from-emerald-600/20 to-teal-600/20",
      items: [
        { name: "Pandas", icon: <Table className="w-3.5 h-3.5 text-emerald-500" /> },
        { name: "NumPy", icon: <Cpu className="w-3.5 h-3.5 text-teal-500" /> },
        { name: "Data Cleaning", icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" /> },
        { name: "Exploratory Data Analysis (EDA)", icon: <Search className="w-3.5 h-3.5 text-indigo-500" /> },
        { name: "Data Wrangling", icon: <Layers className="w-3.5 h-3.5 text-theme-primary" /> },
        { name: "Descriptive Statistics", icon: <Calculator className="w-3.5 h-3.5 text-violet-500" /> }
      ]
    },
    {
      category: "Data Visualization",
      icon: <BarChart3 className="w-5 h-5 text-indigo-500" />,
      accentColor: "from-indigo-600/20 to-purple-600/20",
      items: [
        { name: "Microsoft Power BI", icon: <BarChart3 className="w-3.5 h-3.5 text-yellow-500" /> },
        { name: "Matplotlib", icon: <LineChart className="w-3.5 h-3.5 text-sky-500" /> },
        { name: "Seaborn", icon: <LineChart className="w-3.5 h-3.5 text-purple-500" /> },
        {
          name: "Microsoft Excel",
          icon: <Table className="w-3.5 h-3.5 text-green-500" />,
          tooltip: ["Pivot Tables", "Charts", "Basic Formulas"]
        }
      ]
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5 text-violet-500" />,
      accentColor: "from-violet-600/20 to-fuchsia-600/20",
      items: [
        { name: "MySQL", icon: <Database className="w-3.5 h-3.5 text-blue-400" /> },
        { name: "PostgreSQL (Basic)", icon: <Database className="w-3.5 h-3.5 text-indigo-400" /> }
      ]
    },
    {
      category: "Tools",
      icon: <Wrench className="w-5 h-5 text-cyan-500" />,
      accentColor: "from-cyan-600/20 to-blue-600/20",
      items: [
        { name: "Jupyter Notebook", icon: <FileJson className="w-3.5 h-3.5 text-orange-500" /> },
        { name: "VS Code", icon: <Code2 className="w-3.5 h-3.5 text-theme-primary" /> },
        { name: "Git", icon: <GitBranch className="w-3.5 h-3.5 text-red-500" /> },
        { name: "GitHub", icon: <Github className="w-3.5 h-3.5 text-theme-muted" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-theme-bg text-theme-fg relative overflow-hidden transition-colors duration-300">
      {/* Dynamic dark-theme background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-theme-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-theme-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-primary/10 border border-theme-primary/20 text-xs sm:text-sm font-semibold tracking-wider text-theme-primary font-mono uppercase"
          >
            ⚡ TECHNICAL SKILLS
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-theme-fg font-display mt-4 tracking-tight"
          >
            Technical Skills
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-theme-primary to-cyan-500 mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-theme-muted mt-4 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          >
            A clean, verified toolkit built for industry data visualization, processing, and modern business intelligence.
          </motion.p>
        </div>

        {/* Bento / Staggered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, groupIdx) => {
            // Determine if card spans columns on larger layouts for custom layout flow
            const isLarge = cat.category === "Data Analysis" || cat.category === "Data Visualization";
            return (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.08, duration: 0.5 }}
                className={`p-6 rounded-2xl bg-theme-sec-bg/50 backdrop-blur-md border border-theme-border hover:border-theme-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col justify-between group ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-theme-bg border border-theme-border text-theme-muted shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {cat.icon}
                      </div>
                      <h4 className="text-lg font-bold text-theme-fg font-display">
                        {cat.category}
                      </h4>
                    </div>
                    {/* Visual glowing accent badge */}
                    <div className="w-1.5 h-1.5 rounded-full bg-theme-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.items.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative flex items-center gap-2.5 p-3 rounded-xl bg-theme-bg/40 border border-theme-border/50 hover:border-theme-primary/20 hover:bg-theme-sec-bg/50 transition-all duration-[250ms] group/skill"
                      >
                        <div className="p-1.5 rounded-lg bg-theme-sec-bg border border-theme-border shrink-0 group-hover/skill:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-xs sm:text-sm font-semibold text-theme-fg group-hover/skill:text-theme-primary transition-colors duration-200 line-clamp-2">
                            {skill.name}
                          </span>
                          {skill.tooltip && (
                            <Info className="w-3.5 h-3.5 text-theme-muted group-hover/skill:text-theme-primary transition-colors shrink-0" />
                          )}
                        </div>

                        {/* Tooltip implementation for specific skills (like Excel) */}
                        {skill.tooltip && (
                          <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 rounded-xl bg-theme-sec-bg border border-theme-primary/30 shadow-[0_4px_20px_rgba(0,0,0,0.8),_0_0_15px_rgba(34,211,238,0.15)] opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-300 pointer-events-none transform translate-y-1 group-hover/skill:translate-y-0">
                            <p className="text-xs font-bold text-theme-primary font-display mb-2 border-b border-theme-border pb-1.5">
                              Includes Practical Use:
                            </p>
                            <ul className="space-y-1.5 text-xs text-theme-muted font-medium">
                              {skill.tooltip.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-theme-primary shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            {/* Tooltip arrow down */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-theme-sec-bg -mt-[1px]" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-theme-primary/35 -mt-[2px] -z-10" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card footer decor */}
                <div className="mt-8 pt-3 border-t border-theme-border flex items-center justify-between text-[10px] font-mono text-theme-muted tracking-wider">
                  <span>0{groupIdx + 1} // TECH_SPEC</span>
                  <span className="text-theme-primary/80 font-semibold uppercase">verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
