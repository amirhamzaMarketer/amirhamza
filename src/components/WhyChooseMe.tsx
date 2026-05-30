import { motion } from "motion/react";
import { Check, X, ShieldCheck, Zap, HeartHandshake, Eye, MessageSquare } from "lucide-react";

const amirPoints = [
  { text: "Custom tailored solutions", icon: Zap },
  { text: "Fast direct communication", icon: MessageSquare },
  { text: "Quality-driven work", icon: Eye },
  { text: "Long-term support", icon: HeartHandshake },
  { text: "100% transparent workflow", icon: ShieldCheck },
];

const freelancerPoints = [
  "Generic one-size-fits-all approach",
  "Slow communication",
  "Focus on quantity",
  "No post-project support",
  "Hidden costs",
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Why <span className="text-gradient">Choose Me?</span>
          </h2>
          <p className="text-white/60">The difference between standard results and exceptional growth.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Typical Freelancers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] bg-white/[0.02] border-white/5 opacity-80"
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-white/80">Typical Freelancers</h3>
            <ul className="space-y-6">
              {freelancerPoints.map((point) => (
                <li key={point} className="flex items-center gap-4 text-white/50">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X size={14} className="text-red-400" />
                  </div>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Amir Hamza */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] border-accent/40 bg-accent/5 relative overflow-hidden group"
          >
            {/* Animated accent gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -z-10 group-hover:bg-accent/20 transition-all" />
            
            <h3 className="text-2xl font-display font-bold mb-8 text-accent">Amir Hamza</h3>
            <ul className="space-y-6">
              {amirPoints.map((point) => (
                <li key={point.text} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check size={18} className="text-accent font-bold" />
                  </div>
                  <div className="flex items-center gap-2">
                    <point.icon size={16} className="text-accent/60" />
                    <span className="text-lg text-white font-medium">{point.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 text-sm text-white/60 italic">
              "My goal is not just to be your service provider, but to be a partner in your long-term success."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
