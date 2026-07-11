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
    <footer className="bg-theme-sec-bg border-t border-theme-border py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-theme-border">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg font-bold text-theme-fg font-display">
              Mohammed Rabeeh T
            </h4>
            <p className="text-xs text-theme-muted font-mono">
              DATA ANALYST
            </p>
          </div>

          {/* Quick links */}
          <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-theme-muted">
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
                  className="hover:text-theme-primary transition-colors duration-155 cursor-pointer font-sans"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-theme-muted">
          <div>
            © {currentYear} Mohammed Rabeeh T. All Analytics Reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/mohammed-rabeeh-t-404141415" target="_blank" rel="noopener noreferrer" className="hover:text-theme-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/Mohammed-Rabeeh" target="_blank" rel="noopener noreferrer" className="hover:text-theme-fg transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:rabeehmuhammed911@gmail.com" className="hover:text-theme-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-btn-back-to-top"
              onClick={onBackToTop}
              className="p-2 rounded-lg border border-theme-border bg-theme-bg text-theme-muted hover:text-theme-primary hover:bg-theme-sec-bg cursor-pointer transition-all duration-200"
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
