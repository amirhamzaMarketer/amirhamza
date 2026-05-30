import { motion } from "motion/react";
import { 
  Share2, 
  Youtube, 
  MousePointer2, 
  Search, 
  Palette, 
  Settings, 
  Video, 
  Layout 
} from "lucide-react";

const services = [
  {
    title: "Social Media Growth Strategy",
    description: "Building community and increasing engagement across all major platforms.",
    icon: Share2,
  },
  {
    title: "YouTube SEO",
    description: "Optimizing content to rank higher in searches and suggest videos for more views.",
    icon: Youtube,
  },
  {
    title: "Meta Ads Management",
    description: "Data-driven Facebook and Instagram ad campaigns that convert.",
    icon: MousePointer2,
  },
  {
    title: "Keyword & Competitor Analysis",
    description: "In-depth research to find your competitive edge in the market.",
    icon: Search,
  },
  {
    title: "Graphic Design",
    description: "Stunning visuals that capture attention and represent your brand identity.",
    icon: Palette,
  },
  {
    title: "Social Media Account Setup",
    description: "Professional optimization of your business profiles for maximum impact.",
    icon: Settings,
  },
  {
    title: "Short-Form Video Editing",
    description: "High-energy Reels, TikToks, and Shorts that keep viewers watching.",
    icon: Video,
  },
  {
    title: "Social Media Post Design",
    description: "Consistent, high-quality content tailored for each specific platform.",
    icon: Layout,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-dark-lighter/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            How <span className="text-accent">I Can Help You</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            I provide a comprehensive suite of digital marketing solutions tailored to help your business thrive in a competitive online landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl border-white/5 hover:border-accent/40 hover:bg-white/10 transition-all group flex flex-col items-center text-center"
            >
              <motion.div 
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-dark transition-all duration-500 relative"
              >
                <service.icon size={32} className="group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-lg group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all" />
              </motion.div>
              <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Corner Glow Effect */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/0 group-hover:bg-accent/20 blur-xl transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
