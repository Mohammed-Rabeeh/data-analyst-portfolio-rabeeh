import { X, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div id="resume-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 print:p-0 print:bg-white print:static print:z-auto">
      <motion.div
        id="resume-modal-content"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-h-none print:w-full print:rounded-none print:static"
      >
        {/* Modal Controls Header - Hidden on Print */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200 shrink-0 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              RESUME_VIEWER // ACTIVE_PROFILE
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all cursor-pointer"
              aria-label="Close modal dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Sheet Area */}
        <div className="p-8 sm:p-12 overflow-y-auto print:overflow-visible print:p-0 select-text font-sans">
          <div className="max-w-2xl mx-auto space-y-8">
            
            {/* Contact & Profile Name Details */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 border-b border-slate-200 pb-8 print:pb-4">
              <div className="space-y-2 text-center sm:text-left self-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-none">
                  MOHAMMED RABEEH T
                </h1>
              </div>

              {/* Precise Details blocks */}
              <div className="space-y-2 text-xs text-slate-600 shrink-0 font-medium font-sans">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="mailto:rabeehmuhammed911@gmail.com" className="hover:text-blue-600">
                    rabeehmuhammed911@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="tel:9496583504" className="hover:text-blue-600">
                    9496583504
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="leading-tight">
                    Tharammal House,<br />
                    Kaliyattamukku p.o Mooniyur
                  </p>
                </div>
              </div>
            </div>

            {/* Objective Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                OBJECTIVE
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                To enhance my professional skills, capabilities and knowledge in an organization
                which recognizes the value of hard work and trusts me with responsibilities and
                challenges.
              </p>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                EDUCATION
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">
                    Bachelor of Computer Application (BCA)
                  </h4>
                  <p className="text-xs text-slate-550 italic font-medium font-sans">
                    Safi Institute of Advanced Study
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-650 bg-indigo-50 px-2.5 py-1 rounded-md">
                  Graduation Year: 2026
                </span>
              </div>
            </div>

            {/* Core Skills Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                SKILLS
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["Problem Solving", "Team building", "Decision Making", "Sales"].map(skill => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>



            {/* Languages Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                  LANGUAGES
                </h3>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                  <span className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">English</span>
                  <span className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">Arabic</span>
                </div>
              </div>

              {/* Personal Details Section */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                  PERSONAL DETAILS
                </h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                  <div>
                    <span className="text-slate-400">Date of Birth:</span>
                    <p className="text-slate-700 font-semibold">04/06/2004</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Nationality:</span>
                    <p className="text-slate-700 font-semibold">India</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Gender:</span>
                    <p className="text-slate-700 font-semibold">Male</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
}
