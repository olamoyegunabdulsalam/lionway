import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";
import { PROCESS_STEPS } from "../data/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Process() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsub = progress.on("change", (v) => {
      const idx = Math.min(
        PROCESS_STEPS.length - 1,
        Math.max(0, Math.round(v * (PROCESS_STEPS.length - 1))),
      );
      setActive(idx);
    });
    return unsub;
  }, [progress]);

  return (
    <section id="process" ref={ref} className="relative bg-page py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionLabel index="05">How it works</SectionLabel>

        <RevealText
          as="h2"
          className="mt-10 max-w-4xl font-display text-[11vw] font-extrabold leading-[0.9] tracking-[-0.035em] text-ink sm:text-[8vw] lg:text-[5vw]"
        >
          FROM POWER NEED
          <br />
          <span className="text-ink-soft">TO POWER ON.</span>
        </RevealText>

        {/* Desktop horizontal */}
        <div className="relative mt-20 hidden lg:block">
          {/* Track */}
          <div
            className="relative h-px w-full"
            style={{ backgroundColor: "var(--line-strong)" }}
          >
            <motion.div
              className="absolute left-0 top-0 h-px origin-left"
              style={{
                backgroundColor: "var(--color-solar-deep)",
                scaleX: reduced ? 1 : progress,
                width: "100%",
              }}
            />
            {/* Moving sun */}
            <motion.div
              className="absolute -top-[14px]"
              style={{
                left: reduced
                  ? "100%"
                  : useTransform(progress, (v) => `${v * 100}%`),
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="h-7 w-7 -translate-x-1/2"
              >
                <svg viewBox="0 0 40 40" className="h-full w-full">
                  <circle cx="20" cy="20" r="7" fill="var(--color-solar)" />
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={i}
                      x1="20"
                      y1="6"
                      x2="20"
                      y2="2"
                      stroke="var(--color-solar-deep)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      transform={`rotate(${i * 45} 20 20)`}
                    />
                  ))}
                </svg>
              </motion.div>
            </motion.div>
          </div>

          <ol className="mt-12 grid grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const isActive = i <= active;
              return (
                <li key={step.number} className="flex flex-col">
                  <span
                    className={`editorial-eyebrow transition-colors duration-500 ${
                      isActive ? "text-solar-deep" : "text-ink-faint"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`mt-4 font-display text-[15px] font-bold leading-tight tracking-tight transition-colors duration-500 ${
                      isActive ? "text-ink" : "text-ink-faint"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span
                    className={`mt-3 text-[12px] leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-ink-soft" : "text-ink-faint/70"
                    }`}
                  >
                    {step.hint}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile vertical timeline */}
        <ol className="relative mt-16 lg:hidden">
          <div
            className="absolute bottom-0 left-[13px] top-2 w-px"
            style={{ backgroundColor: "var(--line-strong)" }}
          />
          <motion.div
            className="absolute left-[13px] top-2 w-px origin-top"
            style={{
              backgroundColor: "var(--color-solar-deep)",
              scaleY: reduced ? 1 : progress,
              height: "calc(100% - 16px)",
            }}
          />
          {PROCESS_STEPS.map((step, i) => {
            const isActive = i <= active;
            return (
              <li key={step.number} className="relative flex gap-6 pb-10">
                <div
                  className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-500"
                  style={{
                    backgroundColor: isActive
                      ? "var(--color-solar)"
                      : "var(--bg-elevated)",
                    border: `1px solid ${isActive ? "var(--color-solar)" : "var(--line-strong)"}`,
                  }}
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{
                      color: isActive ? "var(--color-ink)" : "var(--ink-faint)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3
                    className={`font-display text-lg font-bold tracking-tight transition-colors duration-500 ${
                      isActive ? "text-ink" : "text-ink-faint"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-[13px] leading-relaxed transition-colors duration-500 ${isActive ? "text-ink-soft" : "text-ink-faint/70"}`}
                  >
                    {step.hint}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
