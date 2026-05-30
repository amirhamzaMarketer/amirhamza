import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Side - Visual Decoration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 glass-card p-4 rounded-[2.5rem]">
               <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Marketing Strategy" 
                className="w-full h-[400px] object-cover rounded-[2rem] opacity-80"
              />
            </div>
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[100px] rounded-full -z-10" />
          </motion.div>

          {/* Right Side - Content */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
                About Me
              </h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
                Turning Ideas Into <span className="text-gradient">Digital Growth</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Digital marketing is more than just promotion for me, it’s about building meaningful online presence and helping brands connect with the right audience.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                I am Amir Hamza, an experienced digital marketer and creative strategist. With 4+ years of experience, I help brands establish themselves strongly on digital platforms.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                I work in social media marketing, YouTube SEO, and content development, combining data-driven strategy and creative execution, which ensures real business growth.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                My goal is to create effective, transparent, and long-term digital success for every brand.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-accent text-3xl font-bold mb-1">100%</h4>
                  <p className="text-white/40 text-sm">Project Transparency</p>
                </div>
                <div>
                  <h4 className="text-accent text-3xl font-bold mb-1">Tailored</h4>
                  <p className="text-white/40 text-sm">Growth Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
