import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";
import SunIndicator from "./SunIndicator";
import { WHY_POINTS } from "../data/site";

export default function WhyLionWay() {
  return (
    <section className="relative overflow-hidden bg-page py-24 md:py-36">
      <SunIndicator
        size={200}
        className="right-[4%] top-[10%] hidden md:block"
        variant="warm"
        pulse={false}
      />

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionLabel index="06">Why Lion-Way</SectionLabel>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <RevealText
            as="h2"
            className="font-display text-[13vw] font-extrabold leading-[0.88] tracking-[-0.035em] text-ink sm:text-[9vw] lg:col-span-7 lg:text-[5.4vw]"
          >
            BUILT FOR
            <br />
            <span className="text-ink-soft">REAL CONDITIONS.</span>
          </RevealText>

          <div className="lg:col-span-5 lg:pt-8">
            <RevealText
              as="p"
              delay={0.15}
              className="max-w-sm text-[15px] leading-relaxed text-ink-soft"
            >
              Nigeria is not a controlled environment. Our systems are chosen
              and installed to hold up where it matters — and to be looked after
              long after the installation is done.
            </RevealText>
          </div>
        </div>

        <div
          className="mt-20 grid grid-cols-1 gap-px border-t hairline sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--line)" }}
        >
          {WHY_POINTS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative border-b hairline p-6 md:p-8 lg:border-r"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="editorial-eyebrow text-solar-deep">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-[19px] font-bold leading-tight tracking-tight text-ink md:text-[21px]">
                {p.label}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-faint">
                {p.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
