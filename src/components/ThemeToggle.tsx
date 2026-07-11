import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-theme-border bg-theme-sec-bg hover:shadow-md cursor-pointer transition-all duration-300 group focus:outline-hidden"
      aria-label="Toggle structural dark theme"
    >
      <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{
            y: isDark ? -35 : 0,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute text-amber-500 group-hover:scale-110 transition-transform duration-200"
        >
          <Sun className="w-5 h-5 fill-amber-50" />
        </motion.div>
        <motion.div
          initial={{ y: 35, opacity: 0, rotate: -45 }}
          animate={{
            y: isDark ? 0 : 35,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : -45,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute text-blue-400 group-hover:scale-110 transition-transform duration-200"
        >
          <Moon className="w-5 h-5 fill-blue-950/20" />
        </motion.div>
      </div>
    </button>
  );
}
