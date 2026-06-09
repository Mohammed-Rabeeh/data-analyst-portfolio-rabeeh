import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  onBackToTop: () => void;
  onLinkClick: (sectionId: string) => void;
  onViewResumeClick: () => void;
}

export default function Footer({ onBackToTop, onLinkClick, onViewResumeClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/50 dark:border-slate-900">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Mohammed Rabeeh T
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              DATA ANALYST
            </p>
          </div>

          {/* Quick links */}
          <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  id={`footer-nav-${link.id}`}
                  onClick={() => {
                    if (link.id === "resume") {
                      onViewResumeClick();
                    } else {
                      onLinkClick(link.id);
                    }
                  }}
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-155 cursor-pointer font-sans"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} Mohammed Rabeeh T. All Analytics Reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/mohammed-rabeeh-t-404141415" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/Mohammed-Rabeeh" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:rabeehmuhammed911@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-btn-back-to-top"
              onClick={onBackToTop}
              className="p-2 rounded-lg border border-slate-950/10 dark:border-white/10 bg-white/40 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 cursor-pointer transition-all duration-200"
              title="Return upstream"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
