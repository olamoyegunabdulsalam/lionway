import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";
import SunIndicator from "./SunIndicator";
import { PROJECTS } from "../data/site";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const project = PROJECTS[index];

  const go = (next) => {
    setDir(next > index ? 1 : -1);
    setIndex(((next % PROJECTS.length) + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-page py-24 md:py-36"
    >
      <SunIndicator
        size={130}
        className="right-[10%] top-[8%] hidden md:block"
        variant="warm"
        pulse={false}
        delay={0.1}
      />
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionLabel index="03">Selected Work</SectionLabel>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <RevealText
            as="h2"
            className="font-display text-[10vw] font-extrabold leading-[0.9] tracking-[-0.035em] text-ink sm:text-[7vw] lg:col-span-8 lg:text-[4.4vw]"
          >
            WE DON'T JUST TALK
            <br />
            ABOUT POWER.
            <br />
            <span className="text-ink-soft">WE INSTALL IT.</span>
          </RevealText>
          <div className="hidden lg:col-span-4 lg:flex lg:items-end lg:justify-end">
            <p className="max-w-xs text-right text-[13px] leading-relaxed text-ink-faint">
              A selection of installations across homes, businesses and streets.
              Full case studies coming soon.
            </p>
          </div>
        </div>

        {/* Project slider */}
        <div className="mt-16 md:mt-20">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-warm md:aspect-[16/8]">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.img
                key={project.id}
                src={project.image}
                alt={project.title}
                loading="lazy"
                custom={dir}
                initial={{ opacity: 0, x: dir * 40, scale: 1.03 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -dir * 40, scale: 1.01 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute left-0 top-0 flex items-center gap-3 bg-cream/90 px-3 py-2 backdrop-blur-sm">
              <span className="editorial-eyebrow text-ink">
                {project.number} / 03
              </span>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-5 right-5 flex gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center bg-cream/95 text-ink backdrop-blur-sm transition-colors hover:bg-cream"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center bg-cream/95 text-ink backdrop-blur-sm transition-colors hover:bg-cream"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="flex items-baseline gap-6">
              <span className="font-display text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
                {project.number}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-[13px] text-ink-faint">
                  {project.location} ·{" "}
                  <span className="italic">{project.note}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => go(i)}
                  aria-label={`Go to project ${p.number}`}
                  className="h-px w-10 transition-colors"
                  style={{
                    backgroundColor:
                      i === index
                        ? "var(--color-solar-deep)"
                        : "var(--line-strong)",
                    height: i === index ? "2px" : "1px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
