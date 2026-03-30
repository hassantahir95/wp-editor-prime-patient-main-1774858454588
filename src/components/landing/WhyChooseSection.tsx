import { motion } from "framer-motion";
import { ParallaxSection, FadeUp, StaggerChildren, staggerItem } from "./AnimationUtils";
import { CheckCircle, XCircle, Shield, Target, Users, MapPin, ArrowRight } from "lucide-react";
import whyImage from "@/assets/why-parallax.jpg";

const advantages = [
  {
    icon: Target,
    title: "Consult-Volume Architecture",
    desc: "Every touchpoint engineered around show rates, not vanity metrics",
  },
  {
    icon: Shield,
    title: "Intent-Grade Filtering",
    desc: "Automated screening eliminates tire-kickers before they reach your desk",
  },
  {
    icon: Users,
    title: "Front-Desk Friendly",
    desc: "Your staff receives confirmed, scheduled patients — not raw leads to chase",
  },
  {
    icon: MapPin,
    title: "Market Exclusivity",
    desc: "One practice per local area — no competing with your neighbor for the same patient",
  },
];

const comparison = [
  { feature: "Lead Delivery", generic: "Raw contact list", turnkey: "Confirmed bookings" },
  { feature: "Follow-Up", generic: "Staff responsibility", turnkey: "Fully automated" },
  { feature: "No-Show Rate", generic: "30–50%", turnkey: "Under 15%" },
  { feature: "Staff Workload", generic: "Heavy chase required", turnkey: "Answer confirmed calls" },
  { feature: "Market Protection", generic: "None", turnkey: "Local exclusivity" },
];

const WhyChooseSection = () => {
  return (
    <ParallaxSection image={whyImage} overlayOpacity="from-navy/97 via-navy/92 to-navy/85">
      <div className="section-container py-16 md:py-20">
        {/* Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Why Us</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Built for surgeons, not generalists
          </h2>
          <p className="text-sm text-white/60">
            Most agencies deliver leads. We deliver confirmed, pre-qualified consultations that respect your time.
          </p>
        </FadeUp>

        {/* Advantage Cards */}
        <StaggerChildren stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-5xl mx-auto">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card p-5 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-heading text-sm font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Comparison Table */}
        <FadeUp>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-0 border-b border-white/10">
                <div className="p-4 md:p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/40">Feature</span>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-white/10">
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-400/70" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white/40">Generic Agency</span>
                  </div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-accent/20 bg-accent/5">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">Turnkey Consult</span>
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`grid grid-cols-3 gap-0 ${i < comparison.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  <div className="p-4 md:p-5">
                    <span className="text-sm font-medium text-white/80">{row.feature}</span>
                  </div>
                  <div className="p-4 md:p-5 text-center border-l border-white/10">
                    <span className="text-xs text-white/40">{row.generic}</span>
                  </div>
                  <div className="p-4 md:p-5 text-center border-l border-accent/20 bg-accent/5">
                    <span className="text-xs text-accent font-medium">{row.turnkey}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="cta-button group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                See If You Qualify
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </ParallaxSection>
  );
};

export default WhyChooseSection;
