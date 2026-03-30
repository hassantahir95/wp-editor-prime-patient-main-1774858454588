import { motion } from "framer-motion";
import { ParallaxSection, FadeUp } from "./AnimationUtils";
import { ArrowRight, Sparkles, Lock } from "lucide-react";
import heroImage from "@/assets/hero-parallax.jpg";

const HeroSection = () => {
  return (
    <ParallaxSection image={heroImage} overlayOpacity="from-navy/90 via-navy/80 to-navy/65">
      <div className="section-container py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                For Plastic Surgeons
              </span>
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.15] heading-gradient mb-5">
              Book 15–25 Premium Patient Consultations Monthly
            </h1>
          </FadeUp>

          {/* Subtext */}
          <FadeUp delay={0.2}>
            <p className="text-sm md:text-base lg:text-lg text-white/65 leading-relaxed max-w-xl mx-auto mb-8">
              High-quality Meta ads, intent filtering, and automated follow-up — so your calendar stays filled without relying on referrals.
            </p>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.3}>
            <motion.button
              className="cta-button group text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 mb-4"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              See How Turnkey Consult Works
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-white/35">
              <Lock className="w-3 h-3" />
              <span>1 practice per local area · Limited onboarding this month</span>
            </div>
          </FadeUp>

          {/* Mini Stats */}
          <FadeUp delay={0.45}>
            <div className="flex items-center justify-center gap-6 md:gap-10 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "15–25", label: "Monthly Consults" },
                { value: "87%", label: "Show Rate" },
                { value: "<15%", label: "No-Shows" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-lg md:text-xl font-heading font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default HeroSection;
