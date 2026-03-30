import { motion } from "framer-motion";
import { ParallaxSection, FadeUp } from "./AnimationUtils";
import { CheckCircle } from "lucide-react";
import proofImage from "@/assets/proof-parallax.jpg";

const ProofSection = () => {
  return (
    <ParallaxSection image={proofImage} overlayOpacity="from-navy/95 via-navy/85 to-navy/75">
      <div className="section-container">
        <FadeUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Results</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 text-white">
            From unpredictable slow weeks to reliable consult bookings
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Typical patterns when a practice switches to Turnkey Consult style scheduling.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Before/After table */}
          <FadeUp>
            <div className="glass-card p-6 md:p-7">
              <h3 className="font-heading text-base font-semibold mb-5 text-white">Illustrative Example</h3>
              <div className="space-y-4">
                {[
                  { before: "10–15 random consults/month", after: "15–25 pre-qualified consults/month" },
                  { before: "High no-show rates", after: "Confirmed attendance workflows" },
                  { before: "Staff chasing cold leads", after: "Filtered, intent-verified inquiries" },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="grid grid-cols-2 gap-4 text-sm py-3 border-b border-white/10 last:border-0"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Before</span>
                      <p className="mt-1 text-white/60 text-xs md:text-sm">{row.before}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">After</span>
                      <p className="mt-1 text-white/85 text-xs md:text-sm">{row.after}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-[11px] text-white/35 mt-5 italic">
                Results vary by market, offer, and patient eligibility. Ask for an assessment.
              </p>
            </div>
          </FadeUp>

          {/* Calendar mockup */}
          <FadeUp delay={0.15}>
            <div className="glass-card p-5 md:p-6">
              <h3 className="font-heading text-base font-semibold mb-4 text-white">Monthly View</h3>
              <div className="grid grid-cols-5 gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                  <div key={day} className="text-[10px] text-center text-white/45 font-semibold pb-2">{day}</div>
                ))}
                {Array.from({ length: 20 }).map((_, i) => {
                  const hasConsult = [0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19].includes(i);
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.025, duration: 0.3 }}
                      className={`rounded-lg p-1.5 text-center text-xs ${
                        hasConsult ? "bg-accent/20 border border-accent/35" : "bg-white/5 border border-white/8"
                      }`}
                    >
                      <span className="text-white/80 font-medium text-[11px]">{i + 1}</span>
                      {hasConsult && (
                        <div className="mt-0.5 flex justify-center">
                          <CheckCircle className="w-2.5 h-2.5 text-accent" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2.5 h-2.5 rounded-sm bg-accent/20 border border-accent/35" />
                <span className="text-[11px] text-white/55">Confirmed Consult</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default ProofSection;
