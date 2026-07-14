import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, BarChart2, ShieldCheck, Database, LayoutDashboard, Mail, Phone, MapPin, BarChart3, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Initializer checked themes
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") return false;
      if (savedTheme === "dark") return true;
      return true; // Default to dark theme
    }
    return true; // Default to dark theme
  });

  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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
        "certifications",
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

  // IntersectionObserver for reveal elements and data-count elements
  useEffect(() => {
    if (isLoading) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Prevent multiple parallel animation loops on same element
            if (el.dataset.animating === "true") return;
            el.dataset.animating = "true";

            const targetVal = parseFloat(el.getAttribute("data-count") || "0");
            const suffix = el.getAttribute("data-suffix") || "";
            const isFloat = el.getAttribute("data-count")?.includes(".") || false;
            
            // Animate count-up
            let startTimestamp: number | null = null;
            const duration = 1500; // ms
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentVal = progress * targetVal;
              
              if (isFloat) {
                el.textContent = currentVal.toFixed(1) + suffix;
              } else {
                el.textContent = Math.floor(currentVal).toString() + suffix;
              }
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                el.dataset.animating = "false";
              }
            };
            window.requestAnimationFrame(step);
            countObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.05 }
    );

    // Active tracking sets to avoid observing the same element multiple times
    const observedReveal = new Set<Element>();
    const observedCount = new Set<Element>();

    const observeElements = () => {
      document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => {
        if (!observedReveal.has(el)) {
          observedReveal.add(el);
          revealObserver.observe(el);
        }
      });

      document.querySelectorAll("[data-count]").forEach((el) => {
        if (!observedCount.has(el)) {
          observedCount.add(el);
          countObserver.observe(el);
        }
      });
    };

    // Initial check
    observeElements();

    // Use MutationObserver to watch for dynamically loaded parts of the layout
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [isLoading]);

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
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" }
  ];

  return (
    <div className="min-h-screen bg-theme-bg text-theme-fg transition-colors duration-300 antialiased selection:bg-blue-500/30">
      
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
            <header className="fixed top-0 left-0 w-full z-40 bg-theme-sec-bg border-b border-theme-border transition-colors duration-300">
              <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                
                {/* Identity logo */}
                <button
                  onClick={() => scrollToSection("hero")}
                  className="flex items-center gap-2 text-theme-fg font-bold group cursor-pointer transition-all duration-[250ms]"
                >
                  <div className="relative w-[34px] h-[34px] rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.2px] transition-all duration-[250ms] group-hover:scale-105 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.25)] dark:group-hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    <div className="w-full h-full rounded-full bg-theme-bg flex flex-col items-center justify-center relative overflow-hidden p-[2px]">
                      {/* Grid structure matching the main hero logo */}
                      <div className="grid grid-cols-2 gap-0.5 z-10">
                        <div className="flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/20 p-0.5 rounded-sm border border-blue-500/10 dark:border-blue-500/20">
                          <LayoutDashboard className="w-2 h-2 text-blue-400 dark:text-blue-300" />
                        </div>
                        <div className="flex items-center justify-center bg-cyan-500/10 dark:bg-cyan-500/20 p-0.5 rounded-sm border border-cyan-500/10 dark:border-cyan-400/20">
                          <BarChart3 className="w-2 h-2 text-cyan-400 dark:text-cyan-300" />
                        </div>
                        <div className="flex items-center justify-center bg-indigo-500/10 dark:bg-indigo-500/20 p-0.5 rounded-sm border border-indigo-500/10 dark:border-indigo-400/20">
                          <Database className="w-2 h-2 text-indigo-400 dark:text-indigo-300" />
                        </div>
                        <div className="flex items-center justify-center bg-emerald-500/10 dark:bg-emerald-500/20 p-0.5 rounded-sm border border-emerald-500/10 dark:border-emerald-400/20">
                          <LineChart className="w-2 h-2 text-emerald-400 dark:text-emerald-300" />
                        </div>
                      </div>
                      {/* Tiny center linking dot */}
                      <div className="absolute w-[3px] h-[3px] rounded-full bg-cyan-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_3px_rgba(34,211,238,0.8)]"></div>
                    </div>
                  </div>
                  <span className="font-display text-lg tracking-tight font-extrabold text-theme-fg">
                    Mohammed{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                      Rabeeh T
                    </span>
                  </span>
                </button>

                {/* Desktop menu */}
                <nav className="hidden lg:flex items-center space-x-5">
                  <ul className="flex space-x-1">
                    {navItems.map(item => (
                      <li key={item.id}>
                        {item.id === "resume" ? (
                          <a
                            id={`nav-${item.id}`}
                            href="https://drive.google.com/file/d/1OGIDpdQp_HlDECbBd4ALFD5suVzE2L06/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200 text-theme-muted hover:text-theme-fg hover:bg-theme-bg/50 flex items-center"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <button
                            id={`nav-${item.id}`}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200
                              ${activeSection === item.id
                                ? "bg-theme-primary/10 text-theme-primary border border-theme-primary/30"
                                : "text-theme-muted hover:text-theme-fg hover:bg-theme-bg/50"
                              }`}
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <span className="h-4 w-px bg-theme-border"></span>

                  {/* Theme Toggle Widget */}
                  <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                </nav>

                {/* Mobile navbar tools row */}
                <div className="flex items-center space-x-3 lg:hidden">
                  <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

                  <button
                    id="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(prev => !prev)}
                    className="p-2.5 rounded-xl border border-theme-border bg-theme-bg text-theme-muted hover:text-theme-fg cursor-pointer"
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
                    className="lg:hidden border-t border-theme-border bg-theme-sec-bg overflow-hidden"
                  >
                    <ul className="py-4 px-4 space-y-1">
                      {navItems.map(item => (
                        <li key={item.id}>
                          {item.id === "resume" ? (
                            <a
                              id={`mobile-nav-${item.id}`}
                              href="https://drive.google.com/file/d/1OGIDpdQp_HlDECbBd4ALFD5suVzE2L06/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block w-full text-left px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-250 cursor-pointer text-theme-muted hover:text-theme-fg hover:bg-theme-bg/50"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <button
                              id={`mobile-nav-${item.id}`}
                              onClick={() => scrollToSection(item.id)}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer
                                ${activeSection === item.id
                                  ? "bg-theme-primary/10 text-theme-primary border border-theme-primary/20"
                                  : "text-theme-muted hover:text-theme-fg hover:bg-theme-bg/50"
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
            <main className="relative bg-theme-bg">
              <Hero 
                onContactClick={() => scrollToSection("contact")} 
                onViewProjectsClick={() => scrollToSection("experience")}
                onViewResumeClick={() => window.open("https://drive.google.com/file/d/1OGIDpdQp_HlDECbBd4ALFD5suVzE2L06/view?usp=sharing", "_blank")}
              />
              <AboutMe />
              <Skills />
              <Experience />
              <Certifications />
              <Contact />
            </main>

            {/* Footer Assembly */}
            <Footer 
              onBackToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              onLinkClick={scrollToSection} 
              onViewResumeClick={() => window.open("https://drive.google.com/file/d/1OGIDpdQp_HlDECbBd4ALFD5suVzE2L06/view?usp=sharing", "_blank")}
            />

            {/* Fixed Back To Top Trigger Button standard micro implementation */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  id="float-back-to-top"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-6 right-6 p-3 rounded-xl bg-theme-primary text-theme-primary-fg hover:bg-theme-accent border border-theme-border shadow-xl hover:scale-110 z-40 cursor-pointer flex items-center justify-center shadow-theme-primary/20 transition-all duration-300"
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
