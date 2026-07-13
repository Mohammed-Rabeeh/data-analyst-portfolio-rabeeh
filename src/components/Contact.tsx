import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Linkedin, Github, Globe, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      const emailTo = "rabeehmuhammed911@gmail.com";
      const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hello Mohammed,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nSent via Portfolio Contact Form`
      );
      window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-theme-primary font-mono tracking-widest uppercase"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-theme-fg font-display mt-2"
          >
            Contact Me
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-theme-primary mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start reveal">
          {/* Left Column - Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-theme-fg font-display">
                Let's discuss raw facts and analytics.
              </h4>
              <p className="text-theme-muted leading-relaxed font-sans text-sm sm:text-base">
                Looking for a freelance BI dashboard builder, an academic research analyst buddy, or to fill an open corporate headcount? Drop a message! I respond within 24 hours.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              <div className="p-4 rounded-2xl glass-card flex items-center gap-4 shadow-sm">
                <div className="p-2.5 rounded-xl bg-theme-primary/10 border border-theme-primary/20 text-theme-primary shadow-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-theme-muted tracking-wider block">EMAIL</span>
                  <a href="mailto:rabeehmuhammed911@gmail.com" className="font-bold text-theme-fg hover:text-theme-primary transition-colors">
                    rabeehmuhammed911@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-card flex items-center gap-4 shadow-sm">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shadow-sm shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-theme-muted tracking-wider block">AVAILABILITY</span>
                  <span className="font-bold text-theme-fg">
                     🌍 Available for Remote Opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Social Network Channels */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-theme-muted block">
                FIND ME ACROSS WEB DATA NETWORKS
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  id="contact-social-linkedin"
                  href="https://www.linkedin.com/in/mohammed-rabeeh-t-404141415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-theme-border bg-theme-sec-bg text-theme-muted hover:text-theme-primary hover:bg-theme-bg hover:shadow-xs transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide"
                >
                  <Linkedin className="w-4 h-4 text-theme-primary" />
                  LinkedIn
                </a>
                <a
                  id="contact-social-github"
                  href="https://github.com/Mohammed-Rabeeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-theme-border bg-theme-sec-bg text-theme-muted hover:text-theme-fg hover:bg-theme-bg hover:shadow-xs transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide"
                >
                  <Github className="w-4 h-4 text-theme-muted" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Submission Form Panel */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl glass-card shadow-sm relative">
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4 space-y-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-theme-fg font-display">
                    Redirecting to Direct Email Access!
                  </h4>
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-theme-muted max-w-md mx-auto leading-relaxed">
                      We have launched your default email application to deliver the prepared message to <strong className="text-theme-primary font-semibold">rabeehmuhammed911@gmail.com</strong>.
                    </p>
                    <p className="text-xs text-theme-muted max-w-sm mx-auto italic font-sans">
                      If your default mail application did not trigger, please click the button below to retry or write directly.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center font-sans">
                    <a
                      href={`mailto:rabeehmuhammed911@gmail.com?subject=${encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Hello Mohammed,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nSent via Portfolio Contact Form`)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-primary hover:bg-theme-accent text-theme-primary-fg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md shadow-theme-primary/10"
                    >
                      <Mail className="w-4 h-4" />
                      Open Email App
                    </a>
                    <button
                      id="contact-btn-new-msg"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-5 py-2.5 rounded-xl border border-theme-border text-theme-muted hover:bg-theme-bg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
                    >
                      Write New Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-widest text-theme-muted block uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-theme-border bg-theme-bg text-theme-fg text-sm focus:outline-hidden focus:ring-2 focus:ring-theme-primary/50 transition-all font-sans"
                        disabled={status === "loading"}
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-widest text-theme-muted block uppercase">
                        YOUR EMAIL *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-2.5 rounded-xl border border-theme-border bg-theme-bg text-theme-fg text-sm focus:outline-hidden focus:ring-2 focus:ring-theme-primary/50 transition-all font-sans"
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-[10px] font-mono font-bold tracking-widest text-theme-muted block uppercase">
                      SUBJECT
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Job Opportunity, Freelance Project, Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl border border-theme-border bg-theme-bg text-theme-fg text-sm focus:outline-hidden focus:ring-2 focus:ring-theme-primary/50 transition-all font-sans"
                      disabled={status === "loading"}
                    />
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-widest text-theme-muted block uppercase">
                      MESSAGE BODY *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project, collaboration, or job opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl border border-theme-border bg-theme-bg text-theme-fg text-sm focus:outline-hidden focus:ring-2 focus:ring-theme-primary/50 transition-all font-sans"
                      disabled={status === "loading"}
                    ></textarea>
                  </div>

                  {/* Error Prompt alert state */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl border border-rose-500/10 bg-rose-500/10 text-rose-500 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please complete the mandatory Name, Email, and Message fields so I can parse your request!</span>
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <button
                    id="contact-btn-submit"
                    type="submit"
                    className="w-full py-3 bg-theme-primary hover:bg-theme-accent text-theme-primary-fg rounded-xl font-medium flex items-center justify-center gap-2 group transition-all duration-300 shadow-md shadow-theme-primary/10 cursor-pointer"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Ingesting message pipeline...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
