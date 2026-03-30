import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, staggerItem } from "./AnimationUtils";
import { CalendarX, Shuffle, Users, AlertTriangle } from "lucide-react";

const painCards = [
  { icon: CalendarX, title: "Empty Consult Slots", desc: "Idle OR time and avoidable revenue gaps that compound monthly." },
  { icon: Shuffle, title: "Chaotic Planning Weeks", desc: "Staffing and surgery planning becomes reactive instead of strategic." },
  { icon: Users, title: "Referral Plateau", desc: "Referrals are valuable, but they're not a scalable growth system." },
  { icon: AlertTriangle, title: "No-Show Headaches", desc: "Lead lists without confirmation waste surgeon time and OR capacity." },
];

const PainSection = () => {
  return (
    <section className="bg-background noise-overlay relative">
      <div className="section-container relative z-[2]">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">The Problem</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 text-foreground">
            If next month's consults are a question mark, your entire operation slows down
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Inconsistent consult flow creates revenue gaps, staffing chaos, and OR underutilization.
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {painCards.map((card, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(11,27,58,0.1)" }}
              className="glass-card-light p-6 md:p-7 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-300">
                <card.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>

        <div className="gradient-divider mt-16" />
      </div>
    </section>
  );
};

export default PainSection;
