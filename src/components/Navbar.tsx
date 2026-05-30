import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Smartphone, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass-nav" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 flex items-center group cursor-pointer"
        >
          <span className="text-3xl font-display font-black text-white tracking-tighter uppercase relative">
            Amir <span className="text-accent">Hamza</span>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-accent transition-all duration-500 group-hover:w-full" />
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-bold text-white/70 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </motion.a>
          ))}
          
          <motion.a
            href="https://bit.ly/3RhulNL"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-2.5 glass-card border-accent/40 text-white font-bold rounded-full overflow-hidden transition-all duration-300 group shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            {/* Pulsing Overlay */}
            <div className="absolute inset-0 bg-accent/10 animate-pulse group-hover:bg-accent/20 transition-colors" />
            
            <span className="relative z-10 flex items-center gap-2">
              Order Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-opacity rounded-full pointer-events-none" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display font-medium text-white/80 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://bit.ly/3RhulNL"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 glass-card border-accent/40 text-white font-bold rounded-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/10 animate-pulse" />
                <span className="relative z-10">Order Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
