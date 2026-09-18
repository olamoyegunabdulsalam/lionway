import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function CTA() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sunY = useTransform(scrollYProgress, [0, 1], [120, -80]);
  const sunScale = useTransform(scrollYProgress, [0, 0.6, 1], [0.85, 1, 1.05]);
  const glow = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section
      id="cta"
      ref={ref}
      className="relative overflow-hidden bg-page py-32 md:py-48"
    >
      {/* Solar glow */}
      <motion.div
        aria-hidden
        style={{
          opacity: reduced ? 1 : glow,
          background:
            "radial-gradient(ellipse at center, var(--color-solar) 0%, transparent 65%)",
        }}
        className="pointer-events-none absolute left-1/2 top-[30%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"
      />

      {/* Rising sun */}
      <motion.div
        aria-hidden
        style={{ y: reduced ? 0 : sunY, scale: reduced ? 1 : sunScale }}
        className="pointer-events-none absolute left-1/2 top-[36%] -translate-x-1/2"
      >
        <div className="relative h-[220px] w-[220px] md:h-[320px] md:w-[320px]">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <circle cx="100" cy="100" r="46" fill="var(--color-solar)" />
            <circle
              cx="100"
              cy="100"
              r="46"
              fill="none"
              stroke="var(--color-solar-deep)"
              strokeWidth="0.6"
              opacity="0.4"
            />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24;
              return (
                <line
                  key={i}
                  x1="100"
                  y1="30"
                  x2="100"
                  y2={i % 2 === 0 ? 16 : 22}
                  stroke="var(--color-solar-deep)"
                  strokeWidth={i % 2 === 0 ? 1.6 : 0.8}
                  strokeLinecap="round"
                  opacity={i % 2 === 0 ? 0.9 : 0.4}
                  transform={`rotate(${angle} 100 100)`}
                />
              );
            })}
          </svg>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="editorial-eyebrow text-ink-faint">
            Ready to talk power?
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-4xl font-display text-[15vw] font-extrabold leading-[0.88] tracking-[-0.035em] text-ink sm:text-[10vw] lg:text-[6.4vw]"
          >
            READY TO TALK
            <br />
            <span className="text-ink-soft">POWER?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft"
          >
            Tell us what you're trying to power. Let's find the right solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10"
          >
            <MagneticButton
              href="mailto:hello@lionwayventures.com"
              variant="primary"
              className="!px-9 !py-5"
            >
              Get a Quote
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 editorial-eyebrow text-ink-faint"
          >
            <span>Lagos, Nigeria</span>
            <span className="h-3 w-px bg-current opacity-30" />
            <span>Nationwide delivery</span>
            <span className="h-3 w-px bg-current opacity-30" />
            <span>Installation · Sales · Maintenance</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
