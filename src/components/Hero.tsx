import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-6 text-white">
            Helping Businesses Grow Through <span className="text-accent underline decoration-accent/30 underline-offset-8">Smart Digital Marketing</span>
          </h1>

          <p className="text-white/70 text-lg mb-10 max-w-2xl leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Amir Hamza</span>, a Digital Marketer specializing in Social Media Growth and Online Branding. I help businesses build a strong online presence through strategic content, social media management, and digital marketing strategies. My goal is simple: help brands reach more people and turn followers into customers.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://shorturl.at/x1tpz"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: ["0 0 0px rgba(34, 211, 238, 0)", "0 0 20px rgba(34, 211, 238, 0.4)", "0 0 0px rgba(34, 211, 238, 0)"]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.2 },
                y: { duration: 0.5, delay: 0.2 },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-dark font-bold rounded-full flex items-center gap-2 border-2 border-transparent hover:border-white/20 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Chat on WhatsApp</span>
              <MessageCircle size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card text-white font-bold rounded-full flex items-center gap-2 border-white/20 hover:border-accent/40 transition-all"
            >
              Learn More <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <div className="relative flex justify-center items-center min-h-[400px]">
          {/* Main Hero Image Context */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[550px]"
          >
            {/* Background Glows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-accent/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80%] bg-blue-500/10 blur-[80px] rounded-full -z-10" />
            
            {/* Glassmorphism Frame and Image Container */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              className="relative p-3 rounded-[2.5rem] glass-card border-white/10 overflow-hidden group shadow-2xl transition-all duration-700"
            >
              {/* Inner Glow and Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
              
              {/* Light Reflection Sweep */}
              <motion.div 
                animate={{ 
                  left: ["-100%", "200%"],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 3
                }}
                className="absolute top-0 bottom-0 w-32 bg-white/20 skew-x-[35deg] blur-xl z-20 pointer-events-none"
              />

              <div className="relative rounded-[2rem] overflow-hidden">
                <img
                  src="https://i.ibb.co.com/zWbDcnrr/Untitled-design-1.png"
                  alt="Amir Hamza Growth Visual"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Glowing Pulse Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-accent/20 group-hover:border-accent/40 transition-colors duration-500" />
            </motion.div>

            {/* Depth Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-accent/20 blur-3xl opacity-50 -z-10" />
          </motion.div>

          {/* Decorative Elements for Depth */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none scale-110">
            <div className="w-[130%] h-[130%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="w-[110%] h-[110%] border border-accent/10 rounded-full animate-[spin_40s_linear_infinite_reverse] absolute" />
          </div>

          {/* Soft Light Rays/Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -150, 0],
                  x: [0, (i % 2 === 0 ? 40 : -40), 0],
                  opacity: [0, 0.4, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.7,
                }}
                className="absolute w-1.5 h-1.5 bg-accent/40 rounded-full blur-[2px]"
                style={{
                  left: `${10 + i * 8}%`,
                  bottom: `-10%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
