import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { 
  Users, 
  Youtube, 
  Zap, 
  Search, 
  Palette, 
  Settings, 
  Video, 
  Layout,
  ArrowUpRight
} from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      // Just to trigger re-renders if needed, but motion.span handles it
    });
  }, [displayValue]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

const servicesStats = [
  {
    title: "Social Media Growth Strategy",
    description: "Building community and increasing engagement across all major platforms.",
    icon: Users,
    stats: [
      { label: "Audience Growth", value: 250, suffix: "K", prefix: "+" },
      { label: "Engagement Increase", value: 180, suffix: "%", prefix: "+" },
      { label: "Successful Campaigns", value: 500, suffix: "+" },
    ]
  },
  {
    title: "YouTube SEO",
    description: "Optimizing content to rank higher in searches and suggested videos for more views.",
    icon: Youtube,
    stats: [
      { label: "Video Reach", value: 1, suffix: "M", prefix: "+" },
      { label: "Organic Views", value: 300, suffix: "K+" },
      { label: "Ranking Improvement", value: 85, suffix: "%" },
    ]
  },
  {
    title: "Meta Ads Management",
    description: "Data-driven Facebook and Instagram ad campaigns that convert.",
    icon: Zap,
    stats: [
      { label: "ROAS", value: 450, suffix: "%", prefix: "+" },
      { label: "Ad Impressions", value: 2, suffix: "M+", prefix: "" },
      { label: "Leads Generated", value: 10, suffix: "K+", prefix: "" },
    ]
  },
  {
    title: "Keyword & Competitor Analysis",
    description: "In-depth research to find your competitive edge in the market.",
    icon: Search,
    stats: [
      { label: "Keywords Researched", value: 5, suffix: "K+", prefix: "" },
      { label: "Competitor Audits", value: 200, suffix: "+", prefix: "" },
      { label: "SEO Improvement", value: 70, suffix: "%", prefix: "+" },
    ]
  },
  {
    title: "Graphic Design",
    description: "Stunning visuals that capture attention and represent your brand identity.",
    icon: Palette,
    stats: [
      { label: "Creative Designs", value: 1000, suffix: "+", prefix: "" },
      { label: "Client Satisfaction", value: 98, suffix: "%", prefix: "" },
      { label: "Brand Projects", value: 350, suffix: "+", prefix: "" },
    ]
  },
  {
    title: "Social Media Account Setup",
    description: "Professional optimization of your business profiles for maximum impact.",
    icon: Settings,
    stats: [
      { label: "Optimized Profiles", value: 400, suffix: "+", prefix: "" },
      { label: "Brand Consistency", value: 90, suffix: "%", prefix: "+" },
      { label: "Fast Growth", value: 100, suffix: "%", prefix: "" },
    ]
  },
  {
    title: "Short-Form Video Editing",
    description: "High-energy Reels, TikToks, and Shorts that keep viewers watching.",
    icon: Video,
    stats: [
      { label: "Video Views", value: 5, suffix: "M+", prefix: "" },
      { label: "Edited Shorts", value: 1200, suffix: "+", prefix: "" },
      { label: "Retention Rate", value: 75, suffix: "%", prefix: "High" },
    ]
  },
  {
    title: "Social Media Post Design",
    description: "Consistent, high-quality content tailored for each specific platform.",
    icon: Layout,
    stats: [
      { label: "Social Posts Designed", value: 3500, suffix: "+", prefix: "" },
      { label: "Reach Growth", value: 220, suffix: "%", prefix: "+" },
      { label: "Engagement Rate", value: 95, suffix: "%" },
    ]
  }
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            Performance Metrics
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white"
          >
            Results That <span className="text-accent underline decoration-accent/20 underline-offset-8">Speak for Themselves</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Real growth, engagement, and performance delivered through strategic digital marketing solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesStats.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/40 transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500 border border-accent/20">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-6">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className="relative">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/30">
                          {stat.label}
                        </span>
                        <ArrowUpRight size={12} className="text-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-2xl font-black text-white group-hover:text-accent transition-colors">
                        <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Animation Element */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: idx * 0.5
                }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
