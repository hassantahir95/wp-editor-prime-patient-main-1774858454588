import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ParallaxSection, FadeUp, StaggerChildren, staggerItem } from "./AnimationUtils";
import { Target, Filter, Bell } from "lucide-react";
import systemImage from "@/assets/system-parallax.jpg";

const pillars = [
  { icon: Target, title: "Precision Targeting", desc: "Reach procedure-intent audiences in your market", chip: "Higher show rate" },
  { icon: Filter, title: "Intent Filtering", desc: "Reduce low-intent inquiries before they hit staff", chip: "Cleaner intake" },
  { icon: Bell, title: "Confirm & Protect", desc: "Reminders and follow-up that improve show rates", chip: "Less chasing" },
];

const SystemSection = () => {
  const svgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: "-100px" });

  return (
    <ParallaxSection image={systemImage} overlayOpacity="from-navy/95 via-navy/90 to-navy/80">
      <div className="section-container">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">The Dynamic Growth System</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 text-white">
            A consult engine designed to produce bookings, not just leads
          </h2>
          <p className="text-white/65 text-sm md:text-base">
            Turnkey Consult connects Meta ads to an intake and confirmation flow that routes patient-ready consultations directly to your front desk.
          </p>
        </FadeUp>

        <div ref={svgRef} className="relative max-w-4xl mx-auto">
          {/* SVG connector lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 900 180" preserveAspectRatio="none">
            <motion.line x1="180" y1="90" x2="450" y2="90" stroke="hsl(192 100% 56%)" strokeWidth="2" strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }} />
            <motion.line x1="450" y1="90" x2="720" y2="90" stroke="hsl(192 100% 56%)" strokeWidth="2" strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 1.2, delay: 0.8 }} />
          </svg>

          <StaggerChildren stagger={0.15} className="grid md:grid-cols-3 gap-5 md:gap-6 relative z-10">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(33,212,255,0.12)" }}
                className="glass-card p-6 md:p-7 text-center transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4"
                >
                  <pillar.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-white">{pillar.title}</h3>
                <p className="text-white/60 text-sm mb-4">{pillar.desc}</p>
                <span className="inline-block text-[11px] bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">{pillar.chip}</span>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default SystemSection;
