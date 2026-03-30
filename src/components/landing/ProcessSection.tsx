import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeUp, StaggerChildren, staggerItem } from "./AnimationUtils";
import { Map, Megaphone, CalendarCheck } from "lucide-react";

const steps = [
  { icon: Map, title: "Market & Offer Mapping", desc: "Align procedures, pricing, and qualification criteria", youDo: "Share your top procedures and ideal patient", weDo: "Build targeting and qualifying criteria" },
  { icon: Megaphone, title: "Meta Ads Launch", desc: "High-quality Meta ads with procedure-intent messaging", youDo: "Approve creative and offer direction", weDo: "Build and launch campaigns" },
  { icon: CalendarCheck, title: "Booking & Confirmation", desc: "Intake, routing, reminders, and staff-friendly scheduling", youDo: "Your team takes confirmed calls", weDo: "Automate follow-up and reminders" },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-secondary noise-overlay relative" ref={ref}>
      <div className="section-container relative z-[2]">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">How It Works</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            A simple rollout that protects your time
          </h2>
        </FadeUp>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-border -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(11,27,58,0.08)" }}
                className="glass-card-light p-6 text-center transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-accent/5">
                  <span className="text-sm font-bold text-accent">{i + 1}</span>
                </div>

                <step.icon className="w-7 h-7 text-accent mx-auto mb-2" />
                <h3 className="font-heading text-base font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-xs mb-4">{step.desc}</p>

                <div className="space-y-1.5 text-[11px]">
                  <div className="bg-secondary rounded-lg p-2.5 border border-border/50">
                    <span className="font-bold text-foreground">You:</span>{" "}
                    <span className="text-muted-foreground">{step.youDo}</span>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-2.5 border border-accent/10">
                    <span className="font-bold text-accent">We:</span>{" "}
                    <span className="text-muted-foreground">{step.weDo}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>

        <div className="gradient-divider mt-16" />
      </div>
    </section>
  );
};

export default ProcessSection;
