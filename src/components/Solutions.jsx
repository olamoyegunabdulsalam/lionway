import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";
import SunIndicator from "./SunIndicator";
import { USE_CASES } from "../data/site";

export default function Solutions() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-page py-24 md:py-36"
    >
      <SunIndicator
        size={110}
        className="left-[8%] top-[12%] hidden md:block"
        variant="warm"
        pulse={false}
      />

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionLabel index="01">Introduction</SectionLabel>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              className="font-display text-[11vw] font-extrabold leading-[0.9] tracking-[-0.035em] text-ink sm:text-[8vw] lg:text-[5.2vw] xl:text-[4.2vw]"
            >
              ENERGY SHOULD
              <br />
              <span className="text-ink-soft">MOVE WITH YOU.</span>
            </RevealText>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <RevealText
              as="p"
              delay={0.15}
              className="max-w-sm text-pretty text-[15px] leading-relaxed text-ink-soft"
            >
              We design, supply and maintain solar systems for the places that
              need power most — quietly, reliably, and built to last.
            </RevealText>
          </div>
        </div>

        {/* Interactive list */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          {/* List */}
          <div className="lg:col-span-7">
            <ul
              className="border-t hairline"
              style={{ borderColor: "var(--line)" }}
            >
              {USE_CASES.map((item, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={item.number}
                    className="border-b hairline"
                    style={{ borderColor: "var(--line)" }}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                  >
                    <button
                      className="group flex w-full items-center gap-6 py-6 text-left md:py-8"
                      aria-expanded={isActive}
                    >
                      <span
                        className={`editorial-eyebrow w-8 shrink-0 transition-colors ${
                          isActive ? "text-solar-deep" : "text-ink-faint"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`flex-1 font-display text-[9vw] font-extrabold leading-none tracking-[-0.03em] transition-colors duration-300 sm:text-[6vw] lg:text-[3.6vw] ${
                          isActive ? "text-ink" : "text-ink-faint"
                        }`}
                      >
                        {item.title}
                      </span>
                      <motion.span
                        animate={{
                          x: isActive ? 0 : -6,
                          opacity: isActive ? 1 : 0.4,
                          rotate: isActive ? 0 : -45,
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="shrink-0 text-ink"
                      >
                        <ArrowUpRight size={22} strokeWidth={1.5} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden pb-7 pl-14 text-[14px] leading-relaxed text-ink-soft"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Image panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-warm">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={USE_CASES[active].image}
                    src={USE_CASES[active].image}
                    alt=""
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute left-0 top-0 flex items-center gap-2 bg-cream/90 px-3 py-2 backdrop-blur-sm">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-solar)" }}
                  />
                  <span className="editorial-eyebrow text-ink">
                    {USE_CASES[active].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
