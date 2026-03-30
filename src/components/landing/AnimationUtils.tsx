import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface ParallaxSectionProps {
  image: string;
  children: React.ReactNode;
  overlayOpacity?: string;
}

export const ParallaxSection = ({
  image,
  children,
  overlayOpacity = "from-navy/95 via-navy/85 to-navy/70",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);

  return (
    <section ref={ref} className="relative overflow-hidden noise-overlay">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="absolute inset-[-15%] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayOpacity}`} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-[2]" style={{ y: contentY }}>
        {children}
      </motion.div>
    </section>
  );
};

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeUp = ({ children, delay = 0, className = "" }: FadeUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerChildrenProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}

export const StaggerChildren = ({ children, stagger = 0.08, className = "" }: StaggerChildrenProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const ScaleIn = ({ children, delay = 0, className = "" }: FadeUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
