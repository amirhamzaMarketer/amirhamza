import { Facebook, Instagram, Linkedin, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const socialLinks = [
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/hm.amir.hamza.912715",
    color: "#1877F2",
    bg: "rgba(24, 119, 242, 0.05)",
    bgHover: "rgba(24, 119, 242, 0.15)",
    borderColor: "rgba(24, 119, 242, 0.2)",
    shadowHover: "0px 8px 24px rgba(24, 119, 242, 0.25)",
    iconStyle: { stroke: "#1877F2" }
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/freelancer.2422/",
    color: "#E4405F",
    bg: "linear-gradient(to tr, rgba(240, 148, 51, 0.05), rgba(220, 39, 67, 0.05), rgba(188, 24, 136, 0.05))",
    bgHover: "linear-gradient(to tr, rgba(240, 148, 51, 0.15), rgba(220, 39, 67, 0.15), rgba(188, 24, 136, 0.15))",
    borderColor: "rgba(228, 64, 95, 0.2)",
    shadowHover: "0px 8px 24px rgba(228, 64, 95, 0.25)",
    iconStyle: { stroke: "url(#instagram-gradient)" }
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/amirhamzafreelancer/",
    color: "#0A66C2",
    bg: "rgba(10, 102, 194, 0.05)",
    bgHover: "rgba(10, 102, 194, 0.15)",
    borderColor: "rgba(10, 102, 194, 0.2)",
    shadowHover: "0px 8px 24px rgba(10, 102, 194, 0.25)",
    iconStyle: { stroke: "#0A66C2" }
  },
  { 
    name: "WhatsApp", 
    icon: MessageCircle, 
    href: "https://shorturl.at/x1tpz",
    color: "#25D366",
    bg: "rgba(37, 211, 102, 0.05)",
    bgHover: "rgba(37, 211, 102, 0.15)",
    borderColor: "rgba(37, 211, 102, 0.2)",
    shadowHover: "0px 8px 24px rgba(37, 211, 102, 0.25)",
    iconStyle: { stroke: "#25D366" }
  },
];

export default function Footer() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative border-t border-white/5 bg-dark-lighter/10">
      {/* SVG Definitions for Gradients */}
      <svg width="0" height="0" className="absolute pointer-events-none select-none" style={{ visibility: "hidden" }}>
        <defs>
          <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#f09433" offset="0%" />
            <stop stopColor="#dc2743" offset="50%" />
            <stop stopColor="#bc1888" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-display font-black mb-6">Amir Hamza</h2>
            <p className="text-white/60 text-lg mb-8 max-w-md leading-relaxed">
              Digital Marketing Expert & Business Growth Strategist. Helping businesses scale through result-driven digital solutions.
            </p>
            <div className="flex gap-4 items-center mt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  id={`footer-social-${social.name.toLowerCase()}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -5, 0]
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    boxShadow: social.shadowHover,
                    borderColor: social.color,
                    background: social.bgHover,
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    },
                    default: {
                      type: "spring",
                      stiffness: 300,
                      damping: 18
                    }
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="w-14 h-14 rounded-full flex items-center justify-center relative backdrop-blur-md cursor-pointer border transition-colors duration-300"
                  style={{ 
                    background: hoveredIdx === i ? social.bgHover : social.bg,
                    borderColor: hoveredIdx === i ? social.color : social.borderColor,
                  }}
                >
                  {/* Subtle Inner Glass Highlight */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                  {/* HD Official Brand Colored Icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <social.icon 
                      size={22} 
                      className="transition-transform duration-300" 
                      style={social.iconStyle}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/50 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 0 0px rgba(34, 211, 238, 0)", "0 0 15px rgba(34, 211, 238, 0.3)", "0 0 0px rgba(34, 211, 238, 0)"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/20 transition-all border border-accent/10 group-hover:border-accent/30"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </motion.div>
                <div>
                  <p className="text-white/40 text-sm mb-1 uppercase tracking-widest font-bold">Email</p>
                  <a href="mailto:digitalamirhamza@gmail.com" className="text-white hover:text-accent transition-colors truncate block">
                    digitalamirhamza@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 0 0px rgba(37, 211, 102, 0)", "0 0 15px rgba(37, 211, 102, 0.3)", "0 0 0px rgba(37, 211, 102, 0)"]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0 border border-[#25D366]/20 group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/20 transition-all"
                >
                  <MessageCircle size={20} className="fill-[#25D366]/10 group-hover:scale-110 transition-transform" />
                </motion.div>
                <div>
                  <p className="text-white/40 text-sm mb-1 uppercase tracking-widest font-bold">WhatsApp</p>
                  <a href="https://shorturl.at/x1tpz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] transition-colors font-medium block">
                    +880 1402-372259
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Amir Hamza. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/40 text-sm hover:text-accent transition-all"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
