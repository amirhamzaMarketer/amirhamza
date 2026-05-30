import { motion } from "motion/react";

const testimonials = [
  {
    name: "David Chen",
    role: "CEO, TechFlow Solutions",
    content: "Amir Hamza handled our social media marketing professionally. The strategy and content quality helped improve our engagement and audience reach significantly. Communication was smooth throughout the project.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom Digital",
    content: "The content strategy was well planned and matched our brand perfectly. Everything was delivered on time, and the overall collaboration experience was very professional.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Mark Thompson",
    role: "Marketing Director, E-com Labs",
    content: "Great experience working together. The video editing and creative work were clean, modern, and aligned with our business goals.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Elena Rodriguez",
    role: "Wellness Consultant",
    content: "Very responsive and easy to communicate with. The workflow was organized, and the final results exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "James Wilson",
    role: "Project Manager, Blue Horizon",
    content: "Working with Amir Hamza was a smooth and professional experience. The marketing strategy was well-planned, communication was consistent, and the overall execution exceeded expectations. We saw clear improvements in audience engagement, brand visibility, and social media performance within a short period of time. Highly recommended for anyone looking to grow their online presence effectively.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Michael Brown",
    role: "YouTube Content Creator",
    content: "Amir Hamza is highly skilled and reliable. His SEO strategy and content optimization helped improve our channel performance and audience growth.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Linda Wu",
    role: "SaaS Founder",
    content: "The process was simple and well managed from start to finish. The quality of work was consistent, and everything felt professionally handled.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Robert Foster",
    role: "Apparel Brand Owner",
    content: "Professional, creative, and detail-oriented. The content quality and branding direction were impressive, and the collaboration was smooth.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Jessica Lee",
    role: "Event Strategist",
    content: "Everything was delivered as promised. The communication, creativity, and execution made the entire experience easy and stress-free.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Client Reviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#B3B3B3] text-lg max-w-xl leading-relaxed"
          >
            Honest feedback from people and brands I've helped grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05 
              }}
              className="flex flex-col text-left"
            >
              <p className="text-[#B3B3B3] text-[17px] leading-relaxed mb-8">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-[#FFFFFF] font-bold text-base tracking-tight mb-0.5">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#B3B3B3] text-xs font-medium uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


