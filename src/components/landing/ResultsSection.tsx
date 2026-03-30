import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, staggerItem } from "./AnimationUtils";
import { CalendarCheck, TrendingUp, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { icon: CalendarCheck, value: "2,400+", label: "Consults Booked", suffix: "" },
  { icon: TrendingUp, value: "87%", label: "Average Show Rate", suffix: "" },
  { icon: ShieldCheck, value: "<15%", label: "No-Show Rate", suffix: "" },
  { icon: Clock, value: "7–14", label: "Days to Launch", suffix: "days" },
];

const ResultsSection = () => {
  return (
    <section className="bg-background noise-overlay relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="section-container relative z-[2] py-16 md:py-20">
        <FadeUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Proven Results</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Numbers that speak for themselves
          </h2>
          <p className="text-sm text-muted-foreground">
            Real performance metrics from practices using the Turnkey Consult system.
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card-light p-6 md:p-8 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <motion.p
                className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>

      <div className="gradient-divider" />
    </section>
  );
};

export default ResultsSection;
