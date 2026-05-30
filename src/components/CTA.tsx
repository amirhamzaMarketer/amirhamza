import { motion } from "motion/react";
import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-[3rem] text-center border-accent/30 relative overflow-hidden group"
        >
          {/* Animated Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
            Ready to take your digital <br />
            <span className="text-gradient">presence to the next level?</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Let’s collaborate to build strategies that drive real growth and achieve your business goals.
          </p>
          
          <motion.a
            href="https://bit.ly/4uKHHAP"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              boxShadow: ["0 0 0px rgba(34, 211, 238, 0)", "0 0 25px rgba(34, 211, 238, 0.4)", "0 0 0px rgba(34, 211, 238, 0)"]
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              y: { duration: 0.8 },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-accent/10 backdrop-blur-md border-2 border-accent/30 text-white font-black text-2xl rounded-3xl relative overflow-hidden group/btn transition-colors hover:bg-accent/20"
          >
            <span className="relative z-10 transition-colors group-hover/btn:text-accent">Start Your Journey</span>
            <Rocket size={26} className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-accent" />
            
            {/* Shimmer Effect */}
            <motion.div
              animate={{
                left: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[35deg] pointer-events-none z-10"
            />

            {/* Internal Glow */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </motion.a>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/40 font-medium">
            <span className="flex items-center gap-2 underline decoration-accent/20">Free Consultation</span>
            <span className="flex items-center gap-2 underline decoration-accent/20">Custom Strategy</span>
            <span className="flex items-center gap-2 underline decoration-accent/20">24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
