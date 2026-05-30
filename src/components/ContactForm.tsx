import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, ChevronDown, User, Mail, MessageSquare, Briefcase, Loader2 } from "lucide-react";

const services = [
  "Social Media Growth Strategy",
  "YouTube SEO",
  "Meta Ads Management",
  "Keyword & Competitor Analysis",
  "Graphic Design",
  "Social Media Account Setup",
  "Short-Form Video Editing",
  "Social Media Post Design",
  "Custom Project",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await globalThis.fetch("https://formsubmit.co/ajax/digitalamirhamza@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Service Needed": formData.service,
          "Message": formData.message,
          _captcha: "false",
          _template: "table",
          _subject: `Portfolio Inquiry: ${formData.service} from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight"
          >
            Let's <span className="text-gradient">Work Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl font-medium"
          >
            Send your project details and I’ll contact you shortly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/[0.05] backdrop-blur-[15px] p-8 md:p-12 rounded-[25px] border border-[rgba(0,255,255,0.2)] shadow-[0_0_40px_rgba(0,255,255,0.15)] relative"
        >
          {/* Subtle Float Animation background element */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-3xl -z-10"
          />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Success!</h3>
                <p className="text-white/60 mb-8 max-w-sm">
                  Your message has been sent successfully.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-medium"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest pl-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={20} />
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest pl-2">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={20} />
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest pl-2">Service Needed</label>
                  <div className="relative group">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={20} />
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-10 text-white focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-dark">Select a Service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-dark">{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest pl-2">Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-6 text-white/20 group-focus-within:text-accent transition-colors" size={20} />
                    <textarea
                      required
                      rows={6}
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all placeholder:text-white/30 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <motion.button
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#00d9ff] to-[#0077ff] text-white font-black text-xl rounded-2xl shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] flex items-center justify-center gap-3 transition-all disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </motion.button>
                  
                  {status === "error" && (
                    <p className="mt-4 text-red-400 text-sm font-medium">Failed to send message. Please try again later.</p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
