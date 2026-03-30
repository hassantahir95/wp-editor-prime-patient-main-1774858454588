import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, staggerItem } from "./AnimationUtils";
import { CalendarCheck, UserCheck, BellRing, Headset, BarChart3, Shield } from "lucide-react";

const benefits = [
  { icon: CalendarCheck, title: "Booked consults, not a spreadsheet of leads" },
  { icon: UserCheck, title: "Self-paying, procedure-seeking prospects" },
  { icon: BellRing, title: "Reduced no-show chaos with confirmations" },
  { icon: Headset, title: "Less front desk back-and-forth" },
  { icon: BarChart3, title: "Predictable weeks for surgery planning" },
  { icon: Shield, title: "Market exclusivity: 1 practice per local area" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background noise-overlay relative">
      <div className="section-container relative z-[2]">
        <FadeUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">What You Get</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Everything built for a busy surgical practice
          </h2>
        </FadeUp>

        <StaggerChildren stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6, rotate: 0.5 }}
              className="relative p-5 rounded-2xl border border-border bg-card overflow-hidden group cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/15 transition-all duration-500 pointer-events-none" />
              
              {/* Number badge */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-[10px] font-bold text-accent">{i + 1}</span>
              </div>

              <div className="relative z-10 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="font-medium text-sm leading-relaxed text-foreground pt-1.5">{b.title}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <div className="gradient-divider mt-16" />
      </div>
    </section>
  );
};

export default BenefitsSection;
