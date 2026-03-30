import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxSection, FadeUp, StaggerChildren, staggerItem } from "./AnimationUtils";
import { CheckCircle, ChevronDown, Phone, DollarSign, TrendingUp, Star, ArrowRight } from "lucide-react";
import qualImage from "@/assets/qualification-parallax.jpg";

const qualifications = [
  {
    icon: Phone,
    title: "Responsive Front Desk",
    desc: "You can answer calls fast or have dedicated coverage for incoming patient inquiries",
  },
  {
    icon: DollarSign,
    title: "Self-Pay Focus",
    desc: "You want more self-paying consults for core cosmetic and reconstructive procedures",
  },
  {
    icon: TrendingUp,
    title: "Growth-Ready Operations",
    desc: "You can handle 15–25+ additional consults per month without operational strain",
  },
  {
    icon: Star,
    title: "Quality Over Volume",
    desc: "You value pre-qualified, intent-verified patients over raw lead volume",
  },
];

const faqs = [
  {
    q: "Do you guarantee 15–25 consults?",
    a: "We target this range based on market data and campaign optimization. Results depend on your market, procedures, and responsiveness. We provide transparent reporting so you always know exactly where you stand.",
  },
  {
    q: "How do you reduce no-shows?",
    a: "Automated confirmation sequences — SMS and email reminders, pre-qualification steps, and intent filtering ensure patients are serious before reaching your schedule. Most practices see under 15% no-show rates.",
  },
  {
    q: "Will this work in my city?",
    a: "We assess market viability before onboarding. Our system works across most metro and suburban markets. We'll tell you upfront if your area has limitations — no guesswork.",
  },
  {
    q: "What does my staff need to do?",
    a: "Your front desk answers confirmed consultation calls and schedules appointments. We handle lead generation, filtering, follow-up, and reminders. Minimal disruption to your existing workflow.",
  },
  {
    q: "How fast can we launch?",
    a: "Most practices are live within 7–14 business days after onboarding approval, including market mapping, campaign setup, and flow configuration.",
  },
];

const QualificationSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <ParallaxSection image={qualImage} overlayOpacity="from-navy/98 via-navy/95 to-navy/92">
      <div className="section-container py-16 md:py-20">
        {/* Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-12">
          <div style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3" style={{ textShadow: '0 2px 12px hsl(192 100% 56% / 0.4)' }}>Qualification</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Is Turnkey Consult right for your practice?
            </h2>
            <p className="text-sm text-white/60">
              We work exclusively with practices that meet these criteria to ensure mutual success.
            </p>
          </div>
        </FadeUp>

        {/* Qualification Cards */}
        <StaggerChildren stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
          {qualifications.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-card p-5 flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Divider */}
        <div className="gradient-divider max-w-xl mx-auto mb-14" />

        {/* FAQ Section */}
        <FadeUp className="max-w-2xl mx-auto">
          <h3 className="font-heading text-lg md:text-xl font-bold text-white text-center mb-8" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}>
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-accent">{i + 1}</span>
                    </div>
                    <span className="font-medium text-sm text-white/90">{faq.q}</span>
                  </div>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 text-accent/60 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pl-14">
                        <p className="text-xs md:text-sm text-white/60 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </FadeUp>

      </div>
    </ParallaxSection>
  );
};

export default QualificationSection;
