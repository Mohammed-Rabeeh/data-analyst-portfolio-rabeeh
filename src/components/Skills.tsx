import { ReactNode } from "react";
import { Code2, LineChart, BarChart3, Database, Wrench } from "lucide-react";
import { motion } from "motion/react";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: ReactNode;
  items: SkillItem[];
  colorClass: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming",
      icon: <Code2 className="w-5 h-5" />,
      colorClass: "bg-blue-500",
      items: [
        { name: "Python (Pandas, NumPy, Scikit-Learn)", level: 90 },
        { name: "SQL (Complex queries, optimization)", level: 95 },
        { name: "R (Statistical analysis)", level: 75 }
      ]
    },
    {
      category: "Data Analysis",
      icon: <LineChart className="w-5 h-5" />,
      colorClass: "bg-emerald-500",
      items: [
        { name: "Pandas & NumPy", level: 90 },
        { name: "Microsoft Excel (VBA, Power Query)", level: 95 },
        { name: "Statistical Hypothesis Testing", level: 85 }
      ]
    },
    {
      category: "Visualization",
      icon: <BarChart3 className="w-5 h-5" />,
      colorClass: "bg-indigo-500",
      items: [
        { name: "Microsoft Power BI (DAX, modeling)", level: 90 },
        { name: "Tableau (Calculated fields, custom maps)", level: 85 },
        { name: "Matplotlib & Seaborn", level: 80 }
      ]
    },
    {
      category: "Database Systems",
      icon: <Database className="w-5 h-5" />,
      colorClass: "bg-violet-500",
      items: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 92 },
        { name: "Microsoft SQL Server", level: 85 }
      ]
    },
    {
      category: "Analytic Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      colorClass: "bg-cyan-500",
      items: [
        { name: "Git & Version Control", level: 88 },
        { name: "Jupyter & Notebook environments", level: 95 },
        { name: "Google Analytics (GA4)", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mt-2"
          >
            Technical Skillset
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl glass-card glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Visual Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shadow-xs shrink-0`}>
                    {cat.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    {cat.category}
                  </h4>
                </div>

                {/* Skill Ranges */}
                <div className="space-y-5">
                  {cat.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="font-mono font-semibold text-blue-600 dark:text-blue-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Range Track Frame */}
                      <div className="h-2 w-full bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: groupIdx * 0.05 }}
                          className={`h-full bg-linear-to-r from-blue-600 to-indigo-505 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal decoration */}
              <div className="mt-6 pt-3 border-t border-slate-100/40 dark:border-slate-800/20 text-(size:--text-xs) font-mono text-slate-400 tracking-wider flex justify-end">
                READY FOR ANALYSIS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
