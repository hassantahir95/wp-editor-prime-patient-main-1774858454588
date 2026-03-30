import { motion } from "framer-motion";
import { FadeUp } from "./AnimationUtils";
import { Lock, ArrowRight, Sparkles, Calendar, Shield, Users } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15–25", label: "Monthly Consults" },
  { icon: Shield, value: "<15%", label: "No-Show Rate" },
  { icon: Users, value: "87%", label: "Avg Show Rate" },
];

const FinalCTASection = () => {
  return (
    <>
      {/* Final CTA */}
      <section className="bg-primary noise-overlay relative overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          className="absolute top-0 left-[5%] w-72 h-72 rounded-full bg-accent/8 blur-[120px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full bg-accent/6 blur-[150px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1.5 }}
        />

        <div className="section-container relative z-[2] py-20 md:py-28">
          {/* Stats Row */}
          <FadeUp>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-heading font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px] font-bold text-accent uppercase tracking-wider">Limited Availability</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 text-white leading-tight">
                Your next 20 consultations are waiting
              </h2>
              <p className="text-sm md:text-base text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
                Apply now to see if we can onboard your practice with local market exclusivity this month.
              </p>

              {/* CTA Button */}
              <motion.button
                className="cta-button group text-xs md:text-base px-6 md:px-10 py-3 md:py-4 mb-5 whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply To Get Booked Consults
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-white/30">
                <Lock className="w-3 h-3" />
                <span>1 practice per local area · Market exclusivity applies</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden" style={{ background: "hsl(219 71% 10%)" }}>
        <div className="gradient-divider" />
        <FadeUp>
          <div className="section-container relative z-[2] text-center py-10">
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-accent font-heading font-bold text-sm">RE</span>
            </div>
            <p className="font-heading text-base font-semibold mb-3 text-white/90">Radiant Edge Marketing</p>
            <p className="text-xs text-white/30 mb-4">© 2026 Radiant Edge Marketing. All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 text-[11px] text-white/25">
              <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
              <span className="text-white/10">|</span>
              <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            </div>
          </div>
        </FadeUp>
      </footer>
    </>
  );
};

export default FinalCTASection;
