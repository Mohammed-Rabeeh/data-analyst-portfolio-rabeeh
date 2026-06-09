import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, BarChart2, ShieldCheck, Database, LayoutDashboard, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Initializer checked themes
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") return false;
      if (savedTheme === "dark") return true;
      return false; // Default to light theme
    }
    return false; // Default to light theme
  });

  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const [loadingProgress, setLoadingProgress] = useState(0);

  // Sync dark class on mount and theme state change
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Loading Simulation
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500; // 1.5s loader

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setLoadingProgress(Math.floor(progress * 100));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  // Monitor scroll for progress, Back to Top visibility, and active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Progress Indicator
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }

      // 2. Back To Top visibility
      setShowBackToTop(window.scrollY > 400);

      // 3. Highlight active menu items based on coordinates
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "contact"
      ];

      let currentSection = "hero";
      const buffer = window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - buffer <= 0) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-blue-500/30">
      
      {/* Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          // Ingesting Full Screen Database Loading Animation
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-slate-950 z-[100] flex flex-col items-center justify-center text-white"
          >
            <div className="space-y-6 text-center max-w-sm w-full px-6">
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="w-16 h-16 rounded-full border-2 border-slate-800 border-t-blue-500 p-1"
                ></motion.div>
                <div className="absolute text-blue-500">
                  <BarChart2 className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono text-sm tracking-widest text-slate-400 font-bold uppercase transition-colors">
                  INGESTING_RECORDS // RABEEH_PORTFOLIO
                </h3>
                
                {/* Visual loading bar track */}
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-100 rounded-full"
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>AGGREGATING_OBJECTIVES</span>
                  <span>{loadingProgress}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            
            {/* Horizontal Header Nav Bar */}
            <header className="fixed top-0 left-0 w-full z-40 bg-white dark:bg-black border-b border-slate-200 dark:border-neutral-900 transition-colors duration-300">
              <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                
                {/* Identity logo */}
                <button
                  onClick={() => scrollToSection("hero")}
                  className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-blue-600 text-white shadow-xs group-hover:bg-blue-700 transition-colors">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="font-display text-lg tracking-tight font-extrabold text-slate-900 dark:text-white">
                    Mohammed<span className="text-blue-600 dark:text-blue-500"> Rabeeh T</span>
                  </span>
                </button>

                {/* Desktop menu */}
                <nav className="hidden lg:flex items-center space-x-5">
                  <ul className="flex space-x-1">
                    {navItems.map(item => (
                      <li key={item.id}>
                        {item.id === "resume" ? (
                          <button
                            id={`nav-${item.id}`}
                            onClick={() => setIsResumeOpen(true)}
                            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-white/5"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <button
                            id={`nav-${item.id}`}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200
                              ${activeSection === item.id
                                ? "bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/30"
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-white/5"
                              }`}
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <span className="h-4 w-px bg-slate-200 dark:bg-slate-800"></span>

                  {/* Theme Toggle Widget */}
                  <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                </nav>

                {/* Mobile navbar tools row */}
                <div className="flex items-center space-x-3 lg:hidden">
                  <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

                  <button
                    id="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(prev => !prev)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                    aria-label="Open directory indexing list"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5 pointer-events-none" /> : <Menu className="w-5 h-5 pointer-events-none" />}
                  </button>
                </div>
              </div>

              {/* Mobile overlay slide drawer menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden border-t border-slate-200 dark:border-neutral-900 bg-white dark:bg-black overflow-hidden"
                  >
                    <ul className="py-4 px-4 space-y-1">
                      {navItems.map(item => (
                        <li key={item.id}>
                          {item.id === "resume" ? (
                            <button
                              id={`mobile-nav-${item.id}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsResumeOpen(true);
                              }}
                              className="w-full text-left px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-250 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/5"
                            >
                              {item.label}
                            </button>
                          ) : (
                            <button
                              id={`mobile-nav-${item.id}`}
                              onClick={() => scrollToSection(item.id)}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer
                                ${activeSection === item.id
                                  ? "bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/5"
                                }`}
                            >
                              {item.label}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* Sections assembly layout */}
            <main className="relative bg-white dark:bg-black">
              <Hero 
                onContactClick={() => scrollToSection("contact")} 
                onViewResumeClick={() => setIsResumeOpen(true)}
              />
              <AboutMe />
              <Skills />
              <Experience />
              <Contact />
            </main>

            {/* Footer Assembly */}
            <Footer 
              onBackToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              onLinkClick={scrollToSection} 
              onViewResumeClick={() => setIsResumeOpen(true)}
            />

            {/* Resume Interactive Modal Viewer */}
            <AnimatePresence>
              {isResumeOpen && (
                <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
              )}
            </AnimatePresence>

            {/* Fixed Back To Top Trigger Button standard micro implementation */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  id="float-back-to-top"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-6 right-6 p-3 rounded-xl bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 shadow-xl transition-all duration-300 hover:scale-110 z-40 cursor-pointer border border-blue-550 dark:border-blue-400 flex items-center justify-center shadow-blue-500/20"
                  title="Shift to top of scroll index"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
