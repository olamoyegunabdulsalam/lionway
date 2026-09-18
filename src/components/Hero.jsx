import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import SunIndicator from "./SunIndicator";
import MagneticButton from "./MagneticButton";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-page pt-28 md:pt-32"
    >
      {/* Editorial grid lines */}
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35]"
        aria-hidden
      />

      {/* Sun */}
      <SunIndicator
        size={150}
        className="right-[6%] top-[14%] hidden md:block"
        delay={0.2}
      />
      <SunIndicator
        size={90}
        className="right-[8%] top-[12%] md:hidden"
        delay={0.2}
        pulse={false}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-[1440px] px-5 md:px-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left — typography */}
          <div className="lg:col-span-7 lg:pt-10">
            {/* Technical details */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 editorial-eyebrow text-ink-faint"
            >
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-solar)" }}
                />
                Lagos, Nigeria
              </span>
              <span className="hidden h-3 w-px bg-current opacity-30 md:block" />
              <span className="hidden md:inline">Solar Installation</span>
              <span className="hidden h-3 w-px bg-current opacity-30 md:block" />
              <span>01</span>
            </motion.div>

            <h1 className="font-display text-[13vw] font-extrabold leading-[0.86] tracking-[-0.035em] text-ink sm:text-[10vw] lg:text-[6.6vw] xl:text-[5.6vw]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                POWER THAT
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                WORKS.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-ink-soft"
              >
                WHERE YOU
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                NEED IT.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-8 max-w-md text-pretty text-[15px] leading-relaxed text-ink-soft md:text-base"
            >
              Solar solutions for homes, businesses and streets — from
              installation to long-term maintenance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#cta" variant="primary">
                Get a Quote
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-3 py-4 text-[12px] font-semibold tracking-[0.18em] uppercase text-ink"
              >
                See our work
                <span className="relative block h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
              </a>
            </motion.div>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-5 lg:pt-4">
            <motion.div
              style={{ y: imgY }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-warm">
                <motion.img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
                  alt="Solar panels installed on a rooftop"
                  loading="eager"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Overlay technical tag */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
                  <div className="bg-cream/90 px-3 py-2 backdrop-blur-sm">
                    <div className="editorial-eyebrow text-ink">
                      Rooftop · PV Array
                    </div>
                  </div>
                  <div className="editorial-eyebrow text-cream mix-blend-difference">
                    Fig. 01
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-14 flex items-center gap-3 pb-10 md:mt-20"
        >
          <ArrowDown size={14} className="text-ink-faint" />
          <span className="editorial-eyebrow text-ink-faint">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
