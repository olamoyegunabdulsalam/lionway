import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";
import { SERVICES } from "../data/site";

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="relative bg-page py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionLabel index="02">Services</SectionLabel>

        <RevealText
          as="h2"
          className="mt-10 font-display text-[13vw] font-extrabold leading-[0.88] tracking-[-0.035em] text-ink sm:text-[9vw] lg:text-[6vw]"
        >
          WHAT WE BUILD.
        </RevealText>

        <div
          className="mt-20 border-t hairline"
          style={{ borderColor: "var(--line)" }}
        >
          {SERVICES.map((service, i) => {
            const isHover = hovered === i;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative border-b hairline"
                style={{ borderColor: "var(--line)" }}
              >
                <a
                  href="#cta"
                  className="relative flex items-center gap-4 py-7 md:gap-8 md:py-10"
                >
                  {/* hover bg image */}
                  <AnimatePresence>
                    {isHover && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
                      >
                        <img
                          src={service.image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover opacity-[0.16]"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, var(--color-solar) 200%)",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span
                    className={`relative z-10 editorial-eyebrow w-10 shrink-0 transition-colors ${
                      isHover ? "text-solar-deep" : "text-ink-faint"
                    }`}
                  >
                    {service.number}
                  </span>

                  <div className="relative z-10 flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-10">
                    <h3
                      className={`font-display text-[7.5vw] font-extrabold leading-none tracking-[-0.03em] transition-all duration-500 sm:text-[5vw] lg:text-[2.8vw] ${
                        isHover ? "text-ink lg:translate-x-2" : "text-ink"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`max-w-sm text-[13px] leading-relaxed transition-colors duration-300 md:text-[14px] ${
                        isHover ? "text-ink-soft" : "text-ink-faint"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <motion.span
                    animate={
                      isHover ? { x: 6, rotate: 0 } : { x: 0, rotate: -45 }
                    }
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 shrink-0 text-ink"
                  >
                    <ArrowUpRight size={26} strokeWidth={1.4} />
                  </motion.span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
